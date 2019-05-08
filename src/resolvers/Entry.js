const postedBy = (root, args, ctx) =>
  ctx.prisma.entry({ id: root.id }).postedBy();

module.exports = {
  postedBy
};
