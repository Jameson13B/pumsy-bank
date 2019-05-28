const userUpdates = async (root, args, ctx) =>
  await ctx.prisma.$subscribe.user({
    mutation_in: ['CREATED', 'UPDATED', 'DELETED']
  })
const purchasesUpdate = async (root, args, ctx) =>
  await ctx.prisma.$subscribe
    .purchase({
      mutation_in: ['CREATED']
    })
    .node()

const dashboard = {
  subscribe: userUpdates,
  resolve: payload => {
    if (payload.mutation === 'DELETED') return payload.previousValues
    return payload.node
  }
}

const purchase = {
  subscribe: purchasesUpdate,
  resolve: payload => {
    return payload
  }
}
module.exports = {
  dashboard,
  purchase
}
