// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Job } = initSchema(schema);

export {
  Job
};