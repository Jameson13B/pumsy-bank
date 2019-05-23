const users = (root, args, ctx) => ctx.prisma.users()
const user = (root, args, ctx) => ctx.prisma.user({ id: args.id })
const usersByClass = async (root, args, ctx) => {
  ctx.prisma.users({ where: { class: args.class } })
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
  usersByClass,
  purchases
}
