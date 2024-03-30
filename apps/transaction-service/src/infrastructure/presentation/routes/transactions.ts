import { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import { transactionController } from "../../di";
import { newTransactionSchemaInput } from "../../schemas";

export default function transactionRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  _opts: { prefix: string },
  next: (err?: Error) => void
) {
  fastify.post(
    "/",
    newTransactionSchemaInput,
    transactionController.newTransaction
  );

  next();
}
