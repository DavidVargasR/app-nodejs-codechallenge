import { UseCase } from "../interfaces";

export enum TransactionStatus {
  APRROVED = 2,
  REJECTED,
}

export type IAntiFraudUseCaseInput = {
  transactionExternalId: string;
  transactionType: {
    name: string;
  };
  transactionStatus: {
    name: string;
  };
  value: number;
  createdAt: string;
};

export type IAntiFraudMessage = {
  transaction: IAntiFraudUseCaseInput;
  statusId: TransactionStatus;
  inconsistencies: string[];
};

export interface IAntiFraudUseCase
  extends UseCase<IAntiFraudUseCaseInput, void> {}
