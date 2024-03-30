import { UseCase } from "../interfaces";

export type INewTransactionUseCaseInput = {
  accountExternalIdDebit: string;
  accountExternalIdCredit: string;
  tranferTypeId: number;
  value: number;
  createdAt: string;
};

export type INewTransactionUseCaseOutput = {
  message: string;
  data: INewTransactionUseCaseInput;
};

export interface INewTransactionUseCase
  extends UseCase<INewTransactionUseCaseInput, INewTransactionUseCaseOutput> {}
