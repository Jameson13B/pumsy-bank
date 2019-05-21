const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')
const User = require('./resolvers/User')
const Entry = require('./resolvers/Entry')
const Purchase = require('./resolvers/Purchase')

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Entry,
  Purchase
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  }
})

server.start(() => console.log('Server is running on http://localhost:4000'))
