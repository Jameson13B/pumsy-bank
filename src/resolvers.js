const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('./utils');

const resolvers = {
  Query: {
    users(root, args, cxt) {
      return cxt.prisma.users();
    },
    user(root, args, cxt) {
      return cxt.prisma.user({ id: args.id });
    },
    async usersClass(root, args, cxt) {
      return cxt.prisma.users({ where: { class: args.class } });
    }
  },
  Mutation: {
    async createUser(root, args, cxt) {
      const password = await bcrypt.hash(args.password, 10);
      const user = await cxt.prisma.createUser({ ...args, password });
      const token = jwt.sign({ userId: user.id }, APP_SECRET);
      return { token, user };
    },
    async login(root, args, cxt) {
      const user = await cxt.prisma.user({ email: args.email });
      if (!user) throw new Error(`No user found with email: ${args.email}`);

      const valid = await bcrypt.compare(args.password, user.password);
      if (!valid) throw new Error('Invalid password');

      const token = jwt.sign({ userId: user.id }, APP_SECRET);
      return { token, user };
    },
    deleteUser(root, args, cxt) {
      return cxt.prisma.deleteUser({ id: args.id });
    },
    async updateUser(root, args, cxt) {
      return await cxt.prisma.updateUser({
        where: { id: args.id },
        data: {
          name: args.name,
          email: args.email,
          class: args.class
        }
      });
    },
    async changePassword(root, args, cxt) {
      const password = await bcrypt.hash(args.password, 10);
      await cxt.prisma.updateUser({
        where: { id: args.id },
        data: {
          password
        }
      });
      return 'Password successfully changed!';
    },
    async addPoints(root, args, cxt) {
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
    }
  },
  User: {
    log(root, args, ctx) {
      return ctx.prisma.user({ id: root.id }).log();
    }
  },
  Entry: {
    postedBy(root, args, ctx) {
      return ctx.prisma.entry({ id: root.id }).postedBy();
    }
  }
};

module.exports = resolvers;
