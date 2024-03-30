import { FastifyRequest } from "fastify";
import {
  ICreateTransactionUseCase,
  ICreateTransactionUseCaseInput,
  INewTransactionUseCase,
  INewTransactionUseCaseOutput,
  IUpdateTransactionUseCase,
  IUpdateTransactionUseCaseInput,
} from "../../../../core";

export interface ITransactionUseCaseDependencies {
  newTransactionUseCase: INewTransactionUseCase;
  createTransactionUseCase: ICreateTransactionUseCase;
  updateTransactionUseCase: IUpdateTransactionUseCase;
}

export interface ITransactionController {
  newTransaction(
    req: FastifyRequest
  ): Promise<INewTransactionUseCaseOutput> | INewTransactionUseCaseOutput;
  createTransaction(
    input: ICreateTransactionUseCaseInput
  ): Promise<void> | void;
  updateTransaction(
    input: IUpdateTransactionUseCaseInput
  ): Promise<void> | void;
}
