const userUpdates = async (root, args, ctx) =>
  await ctx.prisma.$subscribe
    .user({ mutation_in: ['CREATED', 'UPDATED'] })
    .node()

const dashboard = {
  subscribe: userUpdates,
  resolve: payload => {
    return payload
  }
}

module.exports = {
  dashboard
}
