// Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
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

export type Maybe<T> = T | undefined | null;

export interface Exists {
  entry: (where?: EntryWhereInput) => Promise<boolean>;
  purchase: (where?: PurchaseWhereInput) => Promise<boolean>;
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

  entry: (where: EntryWhereUniqueInput) => EntryNullablePromise;
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
  purchase: (where: PurchaseWhereUniqueInput) => PurchaseNullablePromise;
  purchases: (args?: {
    where?: PurchaseWhereInput;
    orderBy?: PurchaseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Purchase>;
  purchasesConnection: (args?: {
    where?: PurchaseWhereInput;
    orderBy?: PurchaseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PurchaseConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
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
  createPurchase: (data: PurchaseCreateInput) => PurchasePromise;
  updatePurchase: (args: {
    data: PurchaseUpdateInput;
    where: PurchaseWhereUniqueInput;
  }) => PurchasePromise;
  updateManyPurchases: (args: {
    data: PurchaseUpdateManyMutationInput;
    where?: PurchaseWhereInput;
  }) => BatchPayloadPromise;
  upsertPurchase: (args: {
    where: PurchaseWhereUniqueInput;
    create: PurchaseCreateInput;
    update: PurchaseUpdateInput;
  }) => PurchasePromise;
  deletePurchase: (where: PurchaseWhereUniqueInput) => PurchasePromise;
  deleteManyPurchases: (where?: PurchaseWhereInput) => BatchPayloadPromise;
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
  purchase: (
    where?: PurchaseSubscriptionWhereInput
  ) => PurchaseSubscriptionPayloadSubscription;
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

export type PurchaseOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "description_ASC"
  | "description_DESC"
  | "change_ASC"
  | "change_DESC"
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

export interface UserUpdateWithoutLogDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  parentEmail?: Maybe<String>;
  password?: Maybe<String>;
  balance?: Maybe<Int>;
  class?: Maybe<String>;
}

export type EntryWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface EntryUpdateManyWithoutPostedByInput {
  create?: Maybe<
    EntryCreateWithoutPostedByInput[] | EntryCreateWithoutPostedByInput
  >;
  delete?: Maybe<EntryWhereUniqueInput[] | EntryWhereUniqueInput>;
  connect?: Maybe<EntryWhereUniqueInput[] | EntryWhereUniqueInput>;
  set?: Maybe<EntryWhereUniqueInput[] | EntryWhereUniqueInput>;
  disconnect?: Maybe<EntryWhereUniqueInput[] | EntryWhereUniqueInput>;
  update?: Maybe<
    | EntryUpdateWithWhereUniqueWithoutPostedByInput[]
    | EntryUpdateWithWhereUniqueWithoutPostedByInput
  >;
  upsert?: Maybe<
    | EntryUpsertWithWhereUniqueWithoutPostedByInput[]
    | EntryUpsertWithWhereUniqueWithoutPostedByInput
  >;
  deleteMany?: Maybe<EntryScalarWhereInput[] | EntryScalarWhereInput>;
  updateMany?: Maybe<
    EntryUpdateManyWithWhereNestedInput[] | EntryUpdateManyWithWhereNestedInput
  >;
}

export interface EntryCreateManyWithoutPostedByInput {
  create?: Maybe<
    EntryCreateWithoutPostedByInput[] | EntryCreateWithoutPostedByInput
  >;
  connect?: Maybe<EntryWhereUniqueInput[] | EntryWhereUniqueInput>;
}

export interface UserUpdateDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  parentEmail?: Maybe<String>;
  password?: Maybe<String>;
  balance?: Maybe<Int>;
  log?: Maybe<EntryUpdateManyWithoutPostedByInput>;
  class?: Maybe<String>;
}

export interface EntryWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  change?: Maybe<String>;
  change_not?: Maybe<String>;
  change_in?: Maybe<String[] | String>;
  change_not_in?: Maybe<String[] | String>;
  change_lt?: Maybe<String>;
  change_lte?: Maybe<String>;
  change_gt?: Maybe<String>;
  change_gte?: Maybe<String>;
  change_contains?: Maybe<String>;
  change_not_contains?: Maybe<String>;
  change_starts_with?: Maybe<String>;
  change_not_starts_with?: Maybe<String>;
  change_ends_with?: Maybe<String>;
  change_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  postedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<EntryWhereInput[] | EntryWhereInput>;
  OR?: Maybe<EntryWhereInput[] | EntryWhereInput>;
  NOT?: Maybe<EntryWhereInput[] | EntryWhereInput>;
}

export interface UserUpdateOneInput {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface PurchaseSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PurchaseWhereInput>;
  AND?: Maybe<
    PurchaseSubscriptionWhereInput[] | PurchaseSubscriptionWhereInput
  >;
  OR?: Maybe<PurchaseSubscriptionWhereInput[] | PurchaseSubscriptionWhereInput>;
  NOT?: Maybe<
    PurchaseSubscriptionWhereInput[] | PurchaseSubscriptionWhereInput
  >;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  parentEmail?: Maybe<String>;
  password?: Maybe<String>;
  balance?: Maybe<Int>;
  class?: Maybe<String>;
}

export interface PurchaseUpdateManyMutationInput {
  description?: Maybe<String>;
  change?: Maybe<String>;
}

export interface EntryCreateInput {
  id?: Maybe<ID_Input>;
  change: String;
  description: String;
  postedBy?: Maybe<UserCreateOneWithoutLogInput>;
}

export type PurchaseWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface UserCreateOneWithoutLogInput {
  create?: Maybe<UserCreateWithoutLogInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface PurchaseWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  change?: Maybe<String>;
  change_not?: Maybe<String>;
  change_in?: Maybe<String[] | String>;
  change_not_in?: Maybe<String[] | String>;
  change_lt?: Maybe<String>;
  change_lte?: Maybe<String>;
  change_gt?: Maybe<String>;
  change_gte?: Maybe<String>;
  change_contains?: Maybe<String>;
  change_not_contains?: Maybe<String>;
  change_starts_with?: Maybe<String>;
  change_not_starts_with?: Maybe<String>;
  change_ends_with?: Maybe<String>;
  change_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  postedBy?: Maybe<UserWhereInput>;
  AND?: Maybe<PurchaseWhereInput[] | PurchaseWhereInput>;
  OR?: Maybe<PurchaseWhereInput[] | PurchaseWhereInput>;
  NOT?: Maybe<PurchaseWhereInput[] | PurchaseWhereInput>;
}

export interface UserCreateWithoutLogInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  parentEmail?: Maybe<String>;
  password: String;
  balance?: Maybe<Int>;
  class?: Maybe<String>;
}

export interface EntryScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  change?: Maybe<String>;
  change_not?: Maybe<String>;
  change_in?: Maybe<String[] | String>;
  change_not_in?: Maybe<String[] | String>;
  change_lt?: Maybe<String>;
  change_lte?: Maybe<String>;
  change_gt?: Maybe<String>;
  change_gte?: Maybe<String>;
  change_contains?: Maybe<String>;
  change_not_contains?: Maybe<String>;
  change_starts_with?: Maybe<String>;
  change_not_starts_with?: Maybe<String>;
  change_ends_with?: Maybe<String>;
  change_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<EntryScalarWhereInput[] | EntryScalarWhereInput>;
  OR?: Maybe<EntryScalarWhereInput[] | EntryScalarWhereInput>;
  NOT?: Maybe<EntryScalarWhereInput[] | EntryScalarWhereInput>;
}

export interface EntryUpdateInput {
  change?: Maybe<String>;
  description?: Maybe<String>;
  postedBy?: Maybe<UserUpdateOneWithoutLogInput>;
}

export interface EntryUpdateWithoutPostedByDataInput {
  change?: Maybe<String>;
  description?: Maybe<String>;
}

export interface UserUpdateOneWithoutLogInput {
  create?: Maybe<UserCreateWithoutLogInput>;
  update?: Maybe<UserUpdateWithoutLogDataInput>;
  upsert?: Maybe<UserUpsertWithoutLogInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface EntryUpdateWithWhereUniqueWithoutPostedByInput {
  where: EntryWhereUniqueInput;
  data: EntryUpdateWithoutPostedByDataInput;
}

export interface PurchaseUpdateInput {
  description?: Maybe<String>;
  change?: Maybe<String>;
  postedBy?: Maybe<UserUpdateOneInput>;
}

export interface EntrySubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<EntryWhereInput>;
  AND?: Maybe<EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput>;
  OR?: Maybe<EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput>;
  NOT?: Maybe<EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput>;
}

export interface UserUpsertWithoutLogInput {
  update: UserUpdateWithoutLogDataInput;
  create: UserCreateWithoutLogInput;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface EntryUpdateManyMutationInput {
  change?: Maybe<String>;
  description?: Maybe<String>;
}

export interface EntryUpdateManyWithWhereNestedInput {
  where: EntryScalarWhereInput;
  data: EntryUpdateManyDataInput;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  parentEmail?: Maybe<String>;
  parentEmail_not?: Maybe<String>;
  parentEmail_in?: Maybe<String[] | String>;
  parentEmail_not_in?: Maybe<String[] | String>;
  parentEmail_lt?: Maybe<String>;
  parentEmail_lte?: Maybe<String>;
  parentEmail_gt?: Maybe<String>;
  parentEmail_gte?: Maybe<String>;
  parentEmail_contains?: Maybe<String>;
  parentEmail_not_contains?: Maybe<String>;
  parentEmail_starts_with?: Maybe<String>;
  parentEmail_not_starts_with?: Maybe<String>;
  parentEmail_ends_with?: Maybe<String>;
  parentEmail_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  balance?: Maybe<Int>;
  balance_not?: Maybe<Int>;
  balance_in?: Maybe<Int[] | Int>;
  balance_not_in?: Maybe<Int[] | Int>;
  balance_lt?: Maybe<Int>;
  balance_lte?: Maybe<Int>;
  balance_gt?: Maybe<Int>;
  balance_gte?: Maybe<Int>;
  log_every?: Maybe<EntryWhereInput>;
  log_some?: Maybe<EntryWhereInput>;
  log_none?: Maybe<EntryWhereInput>;
  class?: Maybe<String>;
  class_not?: Maybe<String>;
  class_in?: Maybe<String[] | String>;
  class_not_in?: Maybe<String[] | String>;
  class_lt?: Maybe<String>;
  class_lte?: Maybe<String>;
  class_gt?: Maybe<String>;
  class_gte?: Maybe<String>;
  class_contains?: Maybe<String>;
  class_not_contains?: Maybe<String>;
  class_starts_with?: Maybe<String>;
  class_not_starts_with?: Maybe<String>;
  class_ends_with?: Maybe<String>;
  class_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  parentEmail?: Maybe<String>;
  password: String;
  balance?: Maybe<Int>;
  log?: Maybe<EntryCreateManyWithoutPostedByInput>;
  class?: Maybe<String>;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface PurchaseCreateInput {
  id?: Maybe<ID_Input>;
  description: String;
  change: String;
  postedBy?: Maybe<UserCreateOneInput>;
}

export interface EntryCreateWithoutPostedByInput {
  id?: Maybe<ID_Input>;
  change: String;
  description: String;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface EntryUpsertWithWhereUniqueWithoutPostedByInput {
  where: EntryWhereUniqueInput;
  update: EntryUpdateWithoutPostedByDataInput;
  create: EntryCreateWithoutPostedByInput;
}

export interface EntryUpdateManyDataInput {
  change?: Maybe<String>;
  description?: Maybe<String>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  parentEmail?: Maybe<String>;
  password?: Maybe<String>;
  balance?: Maybe<Int>;
  log?: Maybe<EntryUpdateManyWithoutPostedByInput>;
  class?: Maybe<String>;
}

export interface NodeNode {
  id: ID_Output;
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

export interface PurchaseSubscriptionPayload {
  mutation: MutationType;
  node: Purchase;
  updatedFields: String[];
  previousValues: PurchasePreviousValues;
}

export interface PurchaseSubscriptionPayloadPromise
  extends Promise<PurchaseSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PurchasePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PurchasePreviousValuesPromise>() => T;
}

export interface PurchaseSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PurchaseSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PurchaseSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PurchasePreviousValuesSubscription>() => T;
}

export interface PurchasePreviousValues {
  id: ID_Output;
  description: String;
  change: String;
  createdAt: DateTimeOutput;
}

export interface PurchasePreviousValuesPromise
  extends Promise<PurchasePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  description: () => Promise<String>;
  change: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface PurchasePreviousValuesSubscription
  extends Promise<AsyncIterator<PurchasePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  description: () => Promise<AsyncIterator<String>>;
  change: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
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

export interface PurchaseEdge {
  node: Purchase;
  cursor: String;
}

export interface PurchaseEdgePromise
  extends Promise<PurchaseEdge>,
    Fragmentable {
  node: <T = PurchasePromise>() => T;
  cursor: () => Promise<String>;
}

export interface PurchaseEdgeSubscription
  extends Promise<AsyncIterator<PurchaseEdge>>,
    Fragmentable {
  node: <T = PurchaseSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
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

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
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

export interface EntryNullablePromise
  extends Promise<Entry | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  change: () => Promise<String>;
  description: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
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

export interface Purchase {
  id: ID_Output;
  description: String;
  change: String;
  createdAt: DateTimeOutput;
}

export interface PurchasePromise extends Promise<Purchase>, Fragmentable {
  id: () => Promise<ID_Output>;
  description: () => Promise<String>;
  change: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  postedBy: <T = UserPromise>() => T;
}

export interface PurchaseSubscription
  extends Promise<AsyncIterator<Purchase>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  description: () => Promise<AsyncIterator<String>>;
  change: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  postedBy: <T = UserSubscription>() => T;
}

export interface PurchaseNullablePromise
  extends Promise<Purchase | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  description: () => Promise<String>;
  change: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  postedBy: <T = UserPromise>() => T;
}

export interface PurchaseConnection {
  pageInfo: PageInfo;
  edges: PurchaseEdge[];
}

export interface PurchaseConnectionPromise
  extends Promise<PurchaseConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PurchaseEdge>>() => T;
  aggregate: <T = AggregatePurchasePromise>() => T;
}

export interface PurchaseConnectionSubscription
  extends Promise<AsyncIterator<PurchaseConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PurchaseEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePurchaseSubscription>() => T;
}

export interface AggregatePurchase {
  count: Int;
}

export interface AggregatePurchasePromise
  extends Promise<AggregatePurchase>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePurchaseSubscription
  extends Promise<AsyncIterator<AggregatePurchase>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
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

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

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
  },
  {
    name: "Purchase",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
