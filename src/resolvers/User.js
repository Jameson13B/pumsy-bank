const log = (root, args, ctx) => ctx.prisma.user({ id: root.id }).log()

module.exports = {
  log
}
