/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJobInput = {|
  id?: ?string,
  position: string,
  rate: string,
  description: string,
  owner?: ?string,
  _version?: ?number,
|};

export type ModelJobConditionInput = {|
  position?: ?ModelStringInput,
  rate?: ?ModelStringInput,
  description?: ?ModelStringInput,
  and?: ?Array< ?ModelJobConditionInput >,
  or?: ?Array< ?ModelJobConditionInput >,
  not?: ?ModelJobConditionInput,
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

export type UpdateJobInput = {|
  id: string,
  position?: ?string,
  rate?: ?string,
  description?: ?string,
  owner?: ?string,
  _version?: ?number,
|};

export type DeleteJobInput = {|
  id?: ?string,
  _version?: ?number,
|};

export type ModelJobFilterInput = {|
  id?: ?ModelIDInput,
  position?: ?ModelStringInput,
  rate?: ?ModelStringInput,
  description?: ?ModelStringInput,
  owner?: ?ModelStringInput,
  and?: ?Array< ?ModelJobFilterInput >,
  or?: ?Array< ?ModelJobFilterInput >,
  not?: ?ModelJobFilterInput,
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

export type CreateJobMutationVariables = {|
  input: CreateJobInput,
  condition?: ?ModelJobConditionInput,
|};

export type CreateJobMutation = {|
  createJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: string,
    description: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateJobMutationVariables = {|
  input: UpdateJobInput,
  condition?: ?ModelJobConditionInput,
|};

export type UpdateJobMutation = {|
  updateJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: string,
    description: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteJobMutationVariables = {|
  input: DeleteJobInput,
  condition?: ?ModelJobConditionInput,
|};

export type DeleteJobMutation = {|
  deleteJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: string,
    description: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type SyncJobsQueryVariables = {|
  filter?: ?ModelJobFilterInput,
  limit?: ?number,
  nextToken?: ?string,
  lastSync?: ?number,
|};

export type SyncJobsQuery = {|
  syncJobs: ? {|
    __typename: "ModelJobConnection",
    items: ? Array<? {|
      __typename: "Job",
      id: string,
      position: string,
      rate: string,
      description: string,
      owner: ?string,
      _version: number,
      _deleted: ?boolean,
      _lastChangedAt: number,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
    startedAt: ?number,
  |},
|};

export type GetJobQueryVariables = {|
  id: string,
|};

export type GetJobQuery = {|
  getJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: string,
    description: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListJobsQueryVariables = {|
  filter?: ?ModelJobFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListJobsQuery = {|
  listJobs: ? {|
    __typename: "ModelJobConnection",
    items: ? Array<? {|
      __typename: "Job",
      id: string,
      position: string,
      rate: string,
      description: string,
      owner: ?string,
      _version: number,
      _deleted: ?boolean,
      _lastChangedAt: number,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
    startedAt: ?number,
  |},
|};

export type OnCreateJobSubscriptionVariables = {|
  owner: string,
|};

export type OnCreateJobSubscription = {|
  onCreateJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: string,
    description: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateJobSubscriptionVariables = {|
  owner: string,
|};

export type OnUpdateJobSubscription = {|
  onUpdateJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: string,
    description: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteJobSubscriptionVariables = {|
  owner: string,
|};

export type OnDeleteJobSubscription = {|
  onDeleteJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: string,
    description: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};