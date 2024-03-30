import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

export function errorFormatter(
  error: FastifyError,
  _: FastifyRequest,
  reply: FastifyReply
) {
  reply.status(500).send({ error: error });
}
