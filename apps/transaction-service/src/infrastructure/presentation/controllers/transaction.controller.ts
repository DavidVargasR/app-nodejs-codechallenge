import { FastifyRequest } from "fastify";
import {
  ICreateTransactionUseCaseInput,
  INewTransactionUseCaseInput,
  IUpdateTransactionUseCaseInput,
} from "../../../core";
import {
  ITransactionController,
  ITransactionUseCaseDependencies,
} from "./interfaces";

export function TransactionController({
  newTransactionUseCase,
  createTransactionUseCase,
  updateTransactionUseCase,
}: ITransactionUseCaseDependencies): ITransactionController {
  function newTransaction(
    req: FastifyRequest<{
      Body: INewTransactionUseCaseInput;
    }>
  ) {
    return newTransactionUseCase.execute(req.body);
  }

  async function createTransaction(
    input: ICreateTransactionUseCaseInput
  ): Promise<void> {
    await createTransactionUseCase.execute(input);
  }

  async function updateTransaction(
    input: IUpdateTransactionUseCaseInput
  ): Promise<void> {
    await updateTransactionUseCase.execute(input);
  }

  return {
    newTransaction,
    createTransaction,
    updateTransaction,
  };
}
