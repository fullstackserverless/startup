import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Job {
  readonly id: string;
  readonly position: string;
  readonly rate: string;
  readonly description: string;
  readonly owner?: string;
  constructor(init: ModelInit<Job>);
  static copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}