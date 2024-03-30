import {
  NewTransactionUseCase,
  CreateTransactionUseCase,
  UpdateTransactionUseCase,
} from "../../../core";
import { transactionRepository } from "../repositories";
import { kafkaService } from "../services";

export const newTransactionUseCase = new NewTransactionUseCase(kafkaService);
export const createTransactionUseCase = new CreateTransactionUseCase(
  transactionRepository,
  kafkaService
);
export const updateTransactionUseCase = new UpdateTransactionUseCase(
  transactionRepository
);
