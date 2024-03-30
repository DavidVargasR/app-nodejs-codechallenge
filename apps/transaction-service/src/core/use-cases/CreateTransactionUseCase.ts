import {
  IKafkaService,
  ITransactionRepository,
  ICreateTransactionUseCase,
  ICreateTransactionUseCaseInput,
  ITransactionMessage,
  MessageTopic,
  TransactionStatus,
} from "../domain";
import { v4 as uuidv4 } from "uuid";

export class CreateTransactionUseCase implements ICreateTransactionUseCase {
  constructor(
    private readonly transactionRepository: ITransactionRepository,
    private readonly kafkaService: IKafkaService
  ) {}

  async execute(port: ICreateTransactionUseCaseInput): Promise<void> {
    const transactionExternalId = uuidv4();

    const transaction = await this.transactionRepository.createTransaction({
      ...port,
      transactionExternalId: transactionExternalId,
      createdAt: new Date().toISOString(),
      transactionStatusId: TransactionStatus.PENDING,
    });

    this.kafkaService.sendMessage<ITransactionMessage>({
      topic: MessageTopic.VALIDATE,
      message: {
        createdAt: transaction.created_at.toDateString(),
        transactionExternalId: transactionExternalId,
        transactionStatus: {
          name: transaction.transaction_status?.name ?? "",
        },
        transactionType: {
          name: transaction.transaction_type?.name ?? "",
        },
        value: transaction.value,
      },
    });
  }
}
