import { ITransactionMessage, TransactionStatus } from "../entities";
import { UseCase } from "../interfaces";

export type IUpdateTransactionUseCaseInput = {
  transaction: ITransactionMessage;
  statusId: TransactionStatus;
};
export interface IUpdateTransactionUseCase
  extends UseCase<IUpdateTransactionUseCaseInput, void> {}
