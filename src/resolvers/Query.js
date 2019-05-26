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
  const start = args.start + 'T00:00:00-07:00'
  const end = args.end + 'T23:59:59-07:00'
  const where =
    args.start && args.end
      ? {
          AND: [{ createdAt_gte: start }, { createdAt_lte: end }]
        }
      : {}
  return await ctx.prisma.user({ id: args.id }).log()
}
const purchases = async (root, args, ctx) => {
  const start = args.start + 'T00:00:00-07:00'
  const end = args.end + 'T23:59:59-07:00'
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
