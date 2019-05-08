const users = (root, args, cxt) => cxt.prisma.users();
const user = (root, args, cxt) => cxt.prisma.user({ id: args.id });
const usersClass = async (root, args, cxt) => {
  return cxt.prisma.users({ where: { class: args.class } });
};

module.exports = {
  users,
  user,
  usersClass
};
