import {
  newTransactionUseCase,
  createTransactionUseCase,
  updateTransactionUseCase,
} from "../use-cases";
import { TransactionController } from "../../presentation/controllers";

export const transactionController = TransactionController({
  newTransactionUseCase,
  createTransactionUseCase,
  updateTransactionUseCase,
});
