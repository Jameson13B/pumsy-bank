const postedBy = (root, args, ctx) =>
  ctx.prisma.purchase({ id: root.id }).postedBy()

module.exports = {
  postedBy
}
