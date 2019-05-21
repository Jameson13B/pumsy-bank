const users = (root, args, ctx) => ctx.prisma.users()
const user = (root, args, ctx) => ctx.prisma.user({ id: args.id })
const usersByClass = async (root, args, ctx) => {
  ctx.prisma.users({ where: { class: args.class } })
}
const purchases = async (root, args, ctx) => {
  return await ctx.prisma.purchases({
    where: { createdAt: args.filter }
  })
}

module.exports = {
  users,
  user,
  usersByClass,
  purchases
}
