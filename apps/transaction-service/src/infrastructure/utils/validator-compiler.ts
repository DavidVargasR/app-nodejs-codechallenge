import Ajv from 'ajv';
import { FastifySchema } from 'fastify';
import { FastifyRouteSchemaDef } from 'fastify/types/schema';
import addFormats from 'ajv-formats';

const ajv = new Ajv({
  removeAdditional: 'all',
  useDefaults: true,
  coerceTypes: 'array'
});

addFormats(ajv);

export const validatorCompiler = ({ schema }: FastifyRouteSchemaDef<FastifySchema>) =>
  ajv.compile(schema);
