const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId, sgMail, addMsg, removeMsg } = require('../utils')

const createUser = async (root, args, ctx) => {
  const password = await bcrypt.hash(args.password, 10)
  const user = await ctx.prisma.createUser({ ...args, password })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return { token, user }
}
const login = async (root, args, ctx) => {
  const user = await ctx.prisma.user({ email: args.email })
  if (!user) throw new Error(`No user found with email: ${args.email}`)

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) throw new Error('Invalid password')

  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return { token, user }
}
const deleteUser = (root, args, ctx) => ctx.prisma.deleteUser({ id: args.id })
const updateUser = async (root, args, ctx) => {
  return await ctx.prisma.updateUser({
    where: { id: args.id },
    data: {
      name: args.name,
      email: args.email,
      class: args.class
    }
  })
}
const changePassword = async (root, args, ctx) => {
  const password = await bcrypt.hash(args.password, 10)
  await ctx.prisma.updateUser({
    where: { id: args.id },
    data: {
      password
    }
  })
  return 'Password successfully changed!'
}
const addPoints = async (root, args, ctx) => {
  // Update User Log and Balance
  const balance = await ctx.prisma.user({ id: args.id }).balance()

  const user = await ctx.prisma.updateUser({
    where: { id: args.id },
    data: {
      balance: balance + args.points,
      log: {
        create: {
          change: `+${args.points}`,
          description: `${args.description}`
        }
      }
    }
  })
  // Create Message and send it
  const msg = addMsg(user.email, user.name, args.points, args.description)
  sgMail.send(msg)
  return user
}
const removePoints = async (root, args, ctx) => {
  // Update User Log and Balance
  const balance = await ctx.prisma.user({ id: args.id }).balance()
  const user = await ctx.prisma.updateUser({
    where: { id: args.id },
    data: {
      balance: balance - args.points,
      log: {
        create: {
          change: `-${args.points}`,
          description: `${args.description}`
        }
      }
    }
  })
  // Create Message and send it
  const msg = removeMsg(user.email, user.name, args.points, args.description)
  sgMail.send(msg)
  return user
}
const purchase = async (root, args, ctx) => {
  // Update User Log and Balance
  const balance = await ctx.prisma.user({ id: args.id }).balance()
  return await ctx.prisma.updateUser({
    where: { id: args.id },
    data: {
      balance: balance - args.points,
      log: {
        create: {
          change: `-${args.points}`,
          description: `${args.description}`
        }
      }
    }
  })
}

module.exports = {
  createUser,
  login,
  deleteUser,
  updateUser,
  changePassword,
  addPoints,
  removePoints,
  purchase
}
