module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.31.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateEntry {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Entry {
  id: ID!
  change: String!
  description: String!
  postedBy: User!
  createdAt: DateTime!
}

type EntryConnection {
  pageInfo: PageInfo!
  edges: [EntryEdge]!
  aggregate: AggregateEntry!
}

input EntryCreateInput {
  id: ID
  change: String!
  description: String!
  postedBy: UserCreateOneWithoutLogInput!
}

input EntryCreateManyWithoutPostedByInput {
  create: [EntryCreateWithoutPostedByInput!]
  connect: [EntryWhereUniqueInput!]
}

input EntryCreateWithoutPostedByInput {
  id: ID
  change: String!
  description: String!
}

type EntryEdge {
  node: Entry!
  cursor: String!
}

enum EntryOrderByInput {
  id_ASC
  id_DESC
  change_ASC
  change_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
}

type EntryPreviousValues {
  id: ID!
  change: String!
  description: String!
  createdAt: DateTime!
}

input EntryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  change: String
  change_not: String
  change_in: [String!]
  change_not_in: [String!]
  change_lt: String
  change_lte: String
  change_gt: String
  change_gte: String
  change_contains: String
  change_not_contains: String
  change_starts_with: String
  change_not_starts_with: String
  change_ends_with: String
  change_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [EntryScalarWhereInput!]
  OR: [EntryScalarWhereInput!]
  NOT: [EntryScalarWhereInput!]
}

type EntrySubscriptionPayload {
  mutation: MutationType!
  node: Entry
  updatedFields: [String!]
  previousValues: EntryPreviousValues
}

input EntrySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EntryWhereInput
  AND: [EntrySubscriptionWhereInput!]
  OR: [EntrySubscriptionWhereInput!]
  NOT: [EntrySubscriptionWhereInput!]
}

input EntryUpdateInput {
  change: String
  description: String
  postedBy: UserUpdateOneRequiredWithoutLogInput
}

input EntryUpdateManyDataInput {
  change: String
  description: String
}

input EntryUpdateManyMutationInput {
  change: String
  description: String
}

input EntryUpdateManyWithoutPostedByInput {
  create: [EntryCreateWithoutPostedByInput!]
  delete: [EntryWhereUniqueInput!]
  connect: [EntryWhereUniqueInput!]
  set: [EntryWhereUniqueInput!]
  disconnect: [EntryWhereUniqueInput!]
  update: [EntryUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [EntryUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [EntryScalarWhereInput!]
  updateMany: [EntryUpdateManyWithWhereNestedInput!]
}

input EntryUpdateManyWithWhereNestedInput {
  where: EntryScalarWhereInput!
  data: EntryUpdateManyDataInput!
}

input EntryUpdateWithoutPostedByDataInput {
  change: String
  description: String
}

input EntryUpdateWithWhereUniqueWithoutPostedByInput {
  where: EntryWhereUniqueInput!
  data: EntryUpdateWithoutPostedByDataInput!
}

input EntryUpsertWithWhereUniqueWithoutPostedByInput {
  where: EntryWhereUniqueInput!
  update: EntryUpdateWithoutPostedByDataInput!
  create: EntryCreateWithoutPostedByInput!
}

input EntryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  change: String
  change_not: String
  change_in: [String!]
  change_not_in: [String!]
  change_lt: String
  change_lte: String
  change_gt: String
  change_gte: String
  change_contains: String
  change_not_contains: String
  change_starts_with: String
  change_not_starts_with: String
  change_ends_with: String
  change_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  postedBy: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [EntryWhereInput!]
  OR: [EntryWhereInput!]
  NOT: [EntryWhereInput!]
}

input EntryWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createEntry(data: EntryCreateInput!): Entry!
  updateEntry(data: EntryUpdateInput!, where: EntryWhereUniqueInput!): Entry
  updateManyEntries(data: EntryUpdateManyMutationInput!, where: EntryWhereInput): BatchPayload!
  upsertEntry(where: EntryWhereUniqueInput!, create: EntryCreateInput!, update: EntryUpdateInput!): Entry!
  deleteEntry(where: EntryWhereUniqueInput!): Entry
  deleteManyEntries(where: EntryWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  entry(where: EntryWhereUniqueInput!): Entry
  entries(where: EntryWhereInput, orderBy: EntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Entry]!
  entriesConnection(where: EntryWhereInput, orderBy: EntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EntryConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  entry(where: EntrySubscriptionWhereInput): EntrySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  balance: Int!
  log(where: EntryWhereInput, orderBy: EntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Entry!]
  class: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  balance: Int
  log: EntryCreateManyWithoutPostedByInput
  class: String
}

input UserCreateOneWithoutLogInput {
  create: UserCreateWithoutLogInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLogInput {
  id: ID
  name: String!
  email: String!
  password: String!
  balance: Int
  class: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  balance_ASC
  balance_DESC
  class_ASC
  class_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  balance: Int!
  class: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  balance: Int
  log: EntryUpdateManyWithoutPostedByInput
  class: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  balance: Int
  class: String
}

input UserUpdateOneRequiredWithoutLogInput {
  create: UserCreateWithoutLogInput
  update: UserUpdateWithoutLogDataInput
  upsert: UserUpsertWithoutLogInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutLogDataInput {
  name: String
  email: String
  password: String
  balance: Int
  class: String
}

input UserUpsertWithoutLogInput {
  update: UserUpdateWithoutLogDataInput!
  create: UserCreateWithoutLogInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  balance: Int
  balance_not: Int
  balance_in: [Int!]
  balance_not_in: [Int!]
  balance_lt: Int
  balance_lte: Int
  balance_gt: Int
  balance_gte: Int
  log_every: EntryWhereInput
  log_some: EntryWhereInput
  log_none: EntryWhereInput
  class: String
  class_not: String
  class_in: [String!]
  class_not_in: [String!]
  class_lt: String
  class_lte: String
  class_gt: String
  class_gte: String
  class_contains: String
  class_not_contains: String
  class_starts_with: String
  class_not_starts_with: String
  class_ends_with: String
  class_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    