import {
  transaction,
  transaction_status,
  transaction_type,
} from "@prisma/client";

export type ITransaction = transaction & {
  transaction_status: transaction_status | null;
  transaction_type: transaction_type | null;
};

export enum TransactionStatus {
  PENDING = 1,
  APRROVED,
  REJECTED,
}

export interface ITransactionMessage {
  transactionExternalId: string;
  transactionType: {
    name: string;
  };
  transactionStatus: {
    name: string;
  };
  value: number;
  createdAt: string;
}
