import { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import transactionRoutes from "./transactions";

export default function registerAppRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  _opts: { prefix: string },
  next: (err?: Error) => void
) {
  fastify.register(transactionRoutes, { prefix: "/transactions" });
  next();
}
