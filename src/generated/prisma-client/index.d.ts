// Code generated by Prisma (prisma@1.31.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  entry: (where?: EntryWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  entry: (where: EntryWhereUniqueInput) => EntryPromise;
  entries: (args?: {
    where?: EntryWhereInput;
    orderBy?: EntryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Entry>;
  entriesConnection: (args?: {
    where?: EntryWhereInput;
    orderBy?: EntryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => EntryConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createEntry: (data: EntryCreateInput) => EntryPromise;
  updateEntry: (args: {
    data: EntryUpdateInput;
    where: EntryWhereUniqueInput;
  }) => EntryPromise;
  updateManyEntries: (args: {
    data: EntryUpdateManyMutationInput;
    where?: EntryWhereInput;
  }) => BatchPayloadPromise;
  upsertEntry: (args: {
    where: EntryWhereUniqueInput;
    create: EntryCreateInput;
    update: EntryUpdateInput;
  }) => EntryPromise;
  deleteEntry: (where: EntryWhereUniqueInput) => EntryPromise;
  deleteManyEntries: (where?: EntryWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  entry: (
    where?: EntrySubscriptionWhereInput
  ) => EntrySubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type EntryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "change_ASC"
  | "change_DESC"
  | "description_ASC"
  | "description_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "parentEmail_ASC"
  | "parentEmail_DESC"
  | "password_ASC"
  | "password_DESC"
  | "balance_ASC"
  | "balance_DESC"
  | "class_ASC"
  | "class_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateOneRequiredWithoutLogInput {
  create?: UserCreateWithoutLogInput;
  update?: UserUpdateWithoutLogDataInput;
  upsert?: UserUpsertWithoutLogInput;
  connect?: UserWhereUniqueInput;
}

export type EntryWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface EntryUpdateManyWithoutPostedByInput {
  create?: EntryCreateWithoutPostedByInput[] | EntryCreateWithoutPostedByInput;
  delete?: EntryWhereUniqueInput[] | EntryWhereUniqueInput;
  connect?: EntryWhereUniqueInput[] | EntryWhereUniqueInput;
  set?: EntryWhereUniqueInput[] | EntryWhereUniqueInput;
  disconnect?: EntryWhereUniqueInput[] | EntryWhereUniqueInput;
  update?:
    | EntryUpdateWithWhereUniqueWithoutPostedByInput[]
    | EntryUpdateWithWhereUniqueWithoutPostedByInput;
  upsert?:
    | EntryUpsertWithWhereUniqueWithoutPostedByInput[]
    | EntryUpsertWithWhereUniqueWithoutPostedByInput;
  deleteMany?: EntryScalarWhereInput[] | EntryScalarWhereInput;
  updateMany?:
    | EntryUpdateManyWithWhereNestedInput[]
    | EntryUpdateManyWithWhereNestedInput;
}

export interface UserCreateInput {
  id?: ID_Input;
  name: String;
  email: String;
  parentEmail?: String;
  password: String;
  balance?: Int;
  log?: EntryCreateManyWithoutPostedByInput;
  class?: String;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  parentEmail?: String;
  password?: String;
  balance?: Int;
  log?: EntryUpdateManyWithoutPostedByInput;
  class?: String;
}

export interface UserUpsertWithoutLogInput {
  update: UserUpdateWithoutLogDataInput;
  create: UserCreateWithoutLogInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
  parentEmail?: String;
  password?: String;
  balance?: Int;
  class?: String;
}

export interface EntryCreateInput {
  id?: ID_Input;
  change: String;
  description: String;
  postedBy: UserCreateOneWithoutLogInput;
}

export interface EntryUpdateManyWithWhereNestedInput {
  where: EntryScalarWhereInput;
  data: EntryUpdateManyDataInput;
}

export interface UserCreateOneWithoutLogInput {
  create?: UserCreateWithoutLogInput;
  connect?: UserWhereUniqueInput;
}

export interface EntryUpsertWithWhereUniqueWithoutPostedByInput {
  where: EntryWhereUniqueInput;
  update: EntryUpdateWithoutPostedByDataInput;
  create: EntryCreateWithoutPostedByInput;
}

export interface UserCreateWithoutLogInput {
  id?: ID_Input;
  name: String;
  email: String;
  parentEmail?: String;
  password: String;
  balance?: Int;
  class?: String;
}

export interface EntryUpdateWithoutPostedByDataInput {
  change?: String;
  description?: String;
}

export interface EntryUpdateInput {
  change?: String;
  description?: String;
  postedBy?: UserUpdateOneRequiredWithoutLogInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  parentEmail?: String;
  parentEmail_not?: String;
  parentEmail_in?: String[] | String;
  parentEmail_not_in?: String[] | String;
  parentEmail_lt?: String;
  parentEmail_lte?: String;
  parentEmail_gt?: String;
  parentEmail_gte?: String;
  parentEmail_contains?: String;
  parentEmail_not_contains?: String;
  parentEmail_starts_with?: String;
  parentEmail_not_starts_with?: String;
  parentEmail_ends_with?: String;
  parentEmail_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  balance?: Int;
  balance_not?: Int;
  balance_in?: Int[] | Int;
  balance_not_in?: Int[] | Int;
  balance_lt?: Int;
  balance_lte?: Int;
  balance_gt?: Int;
  balance_gte?: Int;
  log_every?: EntryWhereInput;
  log_some?: EntryWhereInput;
  log_none?: EntryWhereInput;
  class?: String;
  class_not?: String;
  class_in?: String[] | String;
  class_not_in?: String[] | String;
  class_lt?: String;
  class_lte?: String;
  class_gt?: String;
  class_gte?: String;
  class_contains?: String;
  class_not_contains?: String;
  class_starts_with?: String;
  class_not_starts_with?: String;
  class_ends_with?: String;
  class_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface EntryCreateWithoutPostedByInput {
  id?: ID_Input;
  change: String;
  description: String;
}

export interface EntryUpdateManyDataInput {
  change?: String;
  description?: String;
}

export interface EntryCreateManyWithoutPostedByInput {
  create?: EntryCreateWithoutPostedByInput[] | EntryCreateWithoutPostedByInput;
  connect?: EntryWhereUniqueInput[] | EntryWhereUniqueInput;
}

export interface EntryUpdateManyMutationInput {
  change?: String;
  description?: String;
}

export interface EntryWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  change?: String;
  change_not?: String;
  change_in?: String[] | String;
  change_not_in?: String[] | String;
  change_lt?: String;
  change_lte?: String;
  change_gt?: String;
  change_gte?: String;
  change_contains?: String;
  change_not_contains?: String;
  change_starts_with?: String;
  change_not_starts_with?: String;
  change_ends_with?: String;
  change_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  postedBy?: UserWhereInput;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  AND?: EntryWhereInput[] | EntryWhereInput;
  OR?: EntryWhereInput[] | EntryWhereInput;
  NOT?: EntryWhereInput[] | EntryWhereInput;
}

export interface UserUpdateWithoutLogDataInput {
  name?: String;
  email?: String;
  parentEmail?: String;
  password?: String;
  balance?: Int;
  class?: String;
}

export interface EntryScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  change?: String;
  change_not?: String;
  change_in?: String[] | String;
  change_not_in?: String[] | String;
  change_lt?: String;
  change_lte?: String;
  change_gt?: String;
  change_gte?: String;
  change_contains?: String;
  change_not_contains?: String;
  change_starts_with?: String;
  change_not_starts_with?: String;
  change_ends_with?: String;
  change_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  AND?: EntryScalarWhereInput[] | EntryScalarWhereInput;
  OR?: EntryScalarWhereInput[] | EntryScalarWhereInput;
  NOT?: EntryScalarWhereInput[] | EntryScalarWhereInput;
}

export interface EntrySubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: EntryWhereInput;
  AND?: EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput;
  OR?: EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput;
  NOT?: EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput;
}

export interface EntryUpdateWithWhereUniqueWithoutPostedByInput {
  where: EntryWhereUniqueInput;
  data: EntryUpdateWithoutPostedByDataInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  parentEmail?: String;
  password: String;
  balance: Int;
  class: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  parentEmail: () => Promise<String>;
  password: () => Promise<String>;
  balance: () => Promise<Int>;
  class: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  parentEmail: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  balance: () => Promise<AsyncIterator<Int>>;
  class: () => Promise<AsyncIterator<String>>;
}

export interface EntryEdge {
  node: Entry;
  cursor: String;
}

export interface EntryEdgePromise extends Promise<EntryEdge>, Fragmentable {
  node: <T = EntryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface EntryEdgeSubscription
  extends Promise<AsyncIterator<EntryEdge>>,
    Fragmentable {
  node: <T = EntrySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface EntrySubscriptionPayload {
  mutation: MutationType;
  node: Entry;
  updatedFields: String[];
  previousValues: EntryPreviousValues;
}

export interface EntrySubscriptionPayloadPromise
  extends Promise<EntrySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EntryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EntryPreviousValuesPromise>() => T;
}

export interface EntrySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EntrySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EntrySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EntryPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Entry {
  id: ID_Output;
  change: String;
  description: String;
  createdAt: DateTimeOutput;
}

export interface EntryPromise extends Promise<Entry>, Fragmentable {
  id: () => Promise<ID_Output>;
  change: () => Promise<String>;
  description: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface EntrySubscription
  extends Promise<AsyncIterator<Entry>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  change: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  postedBy: <T = UserSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  parentEmail?: String;
  password: String;
  balance: Int;
  class: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  parentEmail: () => Promise<String>;
  password: () => Promise<String>;
  balance: () => Promise<Int>;
  log: <T = FragmentableArray<Entry>>(args?: {
    where?: EntryWhereInput;
    orderBy?: EntryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  class: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  parentEmail: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  balance: () => Promise<AsyncIterator<Int>>;
  log: <T = Promise<AsyncIterator<EntrySubscription>>>(args?: {
    where?: EntryWhereInput;
    orderBy?: EntryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  class: () => Promise<AsyncIterator<String>>;
}

export interface EntryConnection {
  pageInfo: PageInfo;
  edges: EntryEdge[];
}

export interface EntryConnectionPromise
  extends Promise<EntryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EntryEdge>>() => T;
  aggregate: <T = AggregateEntryPromise>() => T;
}

export interface EntryConnectionSubscription
  extends Promise<AsyncIterator<EntryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EntryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEntrySubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface AggregateEntry {
  count: Int;
}

export interface AggregateEntryPromise
  extends Promise<AggregateEntry>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEntrySubscription
  extends Promise<AsyncIterator<AggregateEntry>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface EntryPreviousValues {
  id: ID_Output;
  change: String;
  description: String;
  createdAt: DateTimeOutput;
}

export interface EntryPreviousValuesPromise
  extends Promise<EntryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  change: () => Promise<String>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface EntryPreviousValuesSubscription
  extends Promise<AsyncIterator<EntryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  change: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Entry",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
