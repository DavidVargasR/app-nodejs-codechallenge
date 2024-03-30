import {
  IKafkaService,
  IAntiFraudUseCase,
  IAntiFraudUseCaseInput,
  IAntiFraudMessage,
  TransactionStatus,
  MessageTopic,
} from "../domain";

export class AntiFraudUseCase implements IAntiFraudUseCase {
  constructor(private readonly kafkaService: IKafkaService) {}

  async execute(port: IAntiFraudUseCaseInput): Promise<void> {
    const transactionInconsistencies: string[] = [];

    if (port.value > 1000) {
      transactionInconsistencies.push(
        "The transaction cannot be greater than 1000"
      );
    }

    await this.kafkaService.sendMessage<IAntiFraudMessage>({
      topic: MessageTopic.UPDATE,
      message: {
        statusId: transactionInconsistencies.length
          ? TransactionStatus.REJECTED
          : TransactionStatus.APRROVED,
        transaction: port,
        inconsistencies: transactionInconsistencies,
      },
    });
  }
}
