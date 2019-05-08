const users = (root, args, ctx) => ctx.prisma.users();
const user = (root, args, ctx) => ctx.prisma.user({ id: args.id });
const usersClass = async (root, args, ctx) => {
  return ctx.prisma.users({ where: { class: args.class } });
};

module.exports = {
  users,
  user,
  usersClass
};
