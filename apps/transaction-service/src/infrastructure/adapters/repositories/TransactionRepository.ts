import {
  ICreateTransactionUseCaseInput,
  ITransactionRepository,
} from "../../../core";
import { PrismaClient } from "@prisma/client";
import { ITransaction } from "../../../core/domain/entities";

export class TransactionRepository implements ITransactionRepository {
  constructor(private readonly db: PrismaClient) {}
  getTransaction(
    transaction_external_id: string
  ): Promise<ITransaction | null> {
    return this.db.transaction.findUnique({
      where: { transaction_external_id },
      include: {
        transaction_status: true,
        transaction_type: true,
      },
    });
  }
  createTransaction({
    accountExternalIdCredit,
    accountExternalIdDebit,
    tranferTypeId,
    value,
    createdAt,
    transactionExternalId,
    transactionStatusId,
  }: ICreateTransactionUseCaseInput): Promise<ITransaction> {
    return this.db.transaction.create({
      data: {
        account_external_id_credit: accountExternalIdCredit,
        account_external_id_debit: accountExternalIdDebit,
        transaction_type: { connect: { id: tranferTypeId } },
        value: value,
        created_at: createdAt,
        transaction_external_id: transactionExternalId,
        transaction_status: { connect: { id: transactionStatusId } },
      },
      include: {
        transaction_status: true,
        transaction_type: true,
      },
    });
  }
  updateTransaction({
    id,
    transaction_status,
    transaction_type,
    ...rest
  }: ITransaction): Promise<ITransaction> {
    return this.db.transaction.update({
      where: {
        id,
      },
      data: {
        transaction_status: {
          connect: { id: rest.transaction_status_id as number },
        },
      },
      include: {
        transaction_status: true,
        transaction_type: true,
      },
    });
  }
}
