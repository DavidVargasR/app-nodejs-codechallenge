import {
  ITransactionRepository,
  IUpdateTransactionUseCase,
  IUpdateTransactionUseCaseInput,
} from "../domain";
import { TransactionStatus } from "../domain/entities";

export class UpdateTransactionUseCase implements IUpdateTransactionUseCase {
  constructor(private readonly transactionRepository: ITransactionRepository) {}

  private validate(port: IUpdateTransactionUseCaseInput) {
    if (!port.transaction.transactionExternalId)
      throw new Error("The transaction external id is required");
    if (!port.statusId) throw new Error("status ID is required");
    if (
      ![TransactionStatus.APRROVED, TransactionStatus.REJECTED].includes(
        port.statusId
      )
    )
      throw new Error(
        `statusId should be ${TransactionStatus.APRROVED} or ${TransactionStatus.REJECTED}`
      );
  }

  async execute(port: IUpdateTransactionUseCaseInput): Promise<void> {
    this.validate(port);

    const transaction = await this.transactionRepository.getTransaction(
      port.transaction.transactionExternalId
    );

    if (!transaction) throw new Error("Transaction not found");

    await this.transactionRepository.updateTransaction({
      ...transaction,
      transaction_status_id: port.statusId,
    });

    //Maybe call a service here to send a notification to the user? Well, it's no neccesary for this challenge :D
  }
}
