const users = (root, args, ctx) => ctx.prisma.users()
const user = (root, args, ctx) => ctx.prisma.user({ id: args.id })
const usersByClass = async (root, args, ctx) =>
  ctx.prisma.users({ where: { class: args.class } })

module.exports = {
  users,
  user,
  usersByClass
}
