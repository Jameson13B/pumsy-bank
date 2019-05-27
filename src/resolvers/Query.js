const { getUserId } = require('../utils')

const users = (root, args, ctx) => ctx.prisma.users()
const user = async (root, args, ctx) => {
  // Get ID from user
  let userId = null
  if (args.id) {
    userId = args.id
  } else {
    userId = await getUserId(ctx)
  }
  return await ctx.prisma.user({ id: userId })
}
const userLog = async (root, args, ctx) => {
  const start = args.start + 'T00:00:00Z'
  const end = args.end + 'T23:59:59Z'
  const where =
    args.start && args.end
      ? {
          AND: [{ createdAt_gte: start }, { createdAt_lte: end }]
        }
      : {}
  let user
  // If no ID, return the first users ID
  // Else send back logs
  if (!args.id) {
    user = await ctx.prisma.users()
  }
  return args.id
    ? await ctx.prisma.user({ id: args.id }).log({ where })
    : [{ id: user[0].id, change: '', description: '', createdAt: '' }]
}
const purchases = async (root, args, ctx) => {
  const start = args.start + 'T00:00:00Z'
  const end = args.end + 'T23:59:59Z'
  const where =
    args.start && args.end
      ? { AND: [{ createdAt_gte: start }, { createdAt_lte: end }] }
      : {}
  const purchases = await ctx.prisma.purchases({ where })
  return purchases
}

module.exports = {
  users,
  user,
  userLog,
  purchases
}
