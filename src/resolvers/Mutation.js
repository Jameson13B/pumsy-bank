const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

const createUser = async (root, args, cxt) => {
  const password = await bcrypt.hash(args.password, 10);
  const user = await cxt.prisma.createUser({ ...args, password });
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return { token, user };
};
const login = async (root, args, cxt) => {
  const user = await cxt.prisma.user({ email: args.email });
  if (!user) throw new Error(`No user found with email: ${args.email}`);

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) throw new Error('Invalid password');

  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return { token, user };
};
const deleteUser = (root, args, cxt) => {
  return cxt.prisma.deleteUser({ id: args.id });
};
const updateUser = async (root, args, cxt) => {
  return await cxt.prisma.updateUser({
    where: { id: args.id },
    data: {
      name: args.name,
      email: args.email,
      class: args.class
    }
  });
};
const changePassword = async (root, args, cxt) => {
  const password = await bcrypt.hash(args.password, 10);
  await cxt.prisma.updateUser({
    where: { id: args.id },
    data: {
      password
    }
  });
  return 'Password successfully changed!';
};
const addPoints = async (root, args, cxt) => {
  // Update User Log and Balance
  const balance = await cxt.prisma.user({ id: args.id }).balance();
  const user = await cxt.prisma.updateUser({
    where: { id: args.id },
    data: {
      balance: balance + args.points,
      log: {
        create: {
          change: `+${args.points}`,
          description: `${args.description}`
        }
      }
    }
  });
  return user.balance;
};
const removePoints = async (root, args, cxt) => {
  // Update User Log and Balance
  const balance = await cxt.prisma.user({ id: args.id }).balance();
  const user = await cxt.prisma.updateUser({
    where: { id: args.id },
    data: {
      balance: balance - args.points,
      log: {
        create: {
          change: `-${args.points}`,
          description: `${args.description}`
        }
      }
    }
  });
  return user.balance;
};

module.exports = {
  createUser,
  login,
  deleteUser,
  updateUser,
  changePassword,
  addPoints,
  removePoints
};
