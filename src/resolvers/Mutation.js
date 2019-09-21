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
      parentEmail: args.parentEmail,
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
  if (user.parentEmail) {
    // Create Message and send it
    const msg = addMsg(
      user.parentEmail,
      user.name,
      args.points,
      args.description
    )
    sgMail.send(msg)
  }
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
  if (user.parentEmail) {
    // Create Message and send it
    const msg = removeMsg(
      user.parentEmail,
      user.name,
      args.points,
      args.description
    )
    sgMail.send(msg)
  }
  return user
}
const addPointsByClass = async (root, args, ctx) => {
  // Get users in class
  const users = await ctx.prisma.users({ where: { class: args.class } })
  // Update User Log and Balance
  await users.forEach(async user => {
    await ctx.prisma.updateUser({
      where: { id: user.id },
      data: {
        balance: user.balance + args.points,
        log: {
          create: {
            change: `+${args.points}`,
            description: `${args.description}`
          }
        }
      }
    })
  })
  return `Updated ${users.length} users`
}
const removePointsByClass = async (root, args, ctx) => {
  // Get users in class
  const users = await ctx.prisma.users({ where: { class: args.class } })
  // Update User Log and Balance
  await users.forEach(async user => {
    await ctx.prisma.updateUser({
      where: { id: user.id },
      data: {
        balance: user.balance - args.points,
        log: {
          create: {
            change: `-${args.points}`,
            description: `${args.description}`
          }
        }
      }
    })
  })
  return `Updated ${users.length} users`
}
const purchase = async (root, args, ctx) => {
  // Login Protected Route
  const userId = getUserId(ctx)
  // Update User Log and Balance
  const balance = await ctx.prisma.user({ id: userId }).balance()
  try {
    await ctx.prisma.createPurchase({
      description: args.description,
      change: args.points,
      postedBy: { connect: { id: userId } }
    })
    return await ctx.prisma.updateUser({
      where: { id: userId },
      data: {
        balance: balance - args.points,
        log: {
          create: {
            change: `-${args.points}`,
            description: `Purchased: ${args.description}`
          }
        }
      }
    })
  } catch (err) {
    return err
  }
}

module.exports = {
  createUser,
  login,
  deleteUser,
  updateUser,
  changePassword,
  addPoints,
  removePoints,
  addPointsByClass,
  removePointsByClass,
  purchase
}
