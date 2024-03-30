import { UseCase } from "../interfaces";

export type ICreateTransactionUseCaseInput = {
  accountExternalIdDebit: string;
  accountExternalIdCredit: string;
  tranferTypeId: number;
  value: number;
  createdAt: string;
  transactionExternalId: string;
  transactionStatusId: number;
};

export interface ICreateTransactionUseCase
  extends UseCase<ICreateTransactionUseCaseInput, void> {}
