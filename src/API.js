/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {|
  id?: ?string,
  role: string,
  firstName: string,
  lastName: string,
|};

export type ModelUserConditionInput = {|
  role?: ?ModelStringInput,
  firstName?: ?ModelStringInput,
  lastName?: ?ModelStringInput,
  and?: ?Array< ?ModelUserConditionInput >,
  or?: ?Array< ?ModelUserConditionInput >,
  not?: ?ModelUserConditionInput,
|};

export type ModelStringInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelAttributeTypes =
  "binary" |
  "binarySet" |
  "bool" |
  "list" |
  "map" |
  "number" |
  "numberSet" |
  "string" |
  "stringSet" |
  "_null";


export type ModelSizeInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
|};

export type UpdateUserInput = {|
  id: string,
  role?: ?string,
  firstName?: ?string,
  lastName?: ?string,
|};

export type DeleteUserInput = {|
  id?: ?string,
|};

export type ModelUserFilterInput = {|
  id?: ?ModelIDInput,
  role?: ?ModelStringInput,
  firstName?: ?ModelStringInput,
  lastName?: ?ModelStringInput,
  and?: ?Array< ?ModelUserFilterInput >,
  or?: ?Array< ?ModelUserFilterInput >,
  not?: ?ModelUserFilterInput,
|};

export type ModelIDInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type CreateUserMutationVariables = {|
  input: CreateUserInput,
  condition?: ?ModelUserConditionInput,
|};

export type CreateUserMutation = {|
  createUser: ? {|
    __typename: "User",
    id: string,
    role: string,
    firstName: string,
    lastName: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateUserMutationVariables = {|
  input: UpdateUserInput,
  condition?: ?ModelUserConditionInput,
|};

export type UpdateUserMutation = {|
  updateUser: ? {|
    __typename: "User",
    id: string,
    role: string,
    firstName: string,
    lastName: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteUserMutationVariables = {|
  input: DeleteUserInput,
  condition?: ?ModelUserConditionInput,
|};

export type DeleteUserMutation = {|
  deleteUser: ? {|
    __typename: "User",
    id: string,
    role: string,
    firstName: string,
    lastName: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type GetUserQueryVariables = {|
  id: string,
|};

export type GetUserQuery = {|
  getUser: ? {|
    __typename: "User",
    id: string,
    role: string,
    firstName: string,
    lastName: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListUsersQueryVariables = {|
  filter?: ?ModelUserFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListUsersQuery = {|
  listUsers: ? {|
    __typename: "ModelUserConnection",
    items: ? Array<? {|
      __typename: "User",
      id: string,
      role: string,
      firstName: string,
      lastName: string,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateUserSubscriptionVariables = {|
  owner: string,
|};

export type OnCreateUserSubscription = {|
  onCreateUser: ? {|
    __typename: "User",
    id: string,
    role: string,
    firstName: string,
    lastName: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateUserSubscriptionVariables = {|
  owner: string,
|};

export type OnUpdateUserSubscription = {|
  onUpdateUser: ? {|
    __typename: "User",
    id: string,
    role: string,
    firstName: string,
    lastName: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteUserSubscriptionVariables = {|
  owner: string,
|};

export type OnDeleteUserSubscription = {|
  onDeleteUser: ? {|
    __typename: "User",
    id: string,
    role: string,
    firstName: string,
    lastName: string,
    createdAt: any,
    updatedAt: any,
  |},
|};