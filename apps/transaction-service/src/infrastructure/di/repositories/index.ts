import { PrismaClient } from "@prisma/client";
import { getEnvVariableValue } from "../../utils";
import { TransactionRepository } from "../../adapters";

const prismaClient = new PrismaClient({
  datasources: { db: { url: getEnvVariableValue("DATABASE_URL") } },
});

export const transactionRepository = new TransactionRepository(prismaClient);
