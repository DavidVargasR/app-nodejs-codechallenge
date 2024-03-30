import {
  IKafkaService,
  INewTransactionUseCase,
  INewTransactionUseCaseInput,
  INewTransactionUseCaseOutput,
  MessageTopic,
} from "../domain";

export class NewTransactionUseCase implements INewTransactionUseCase {
  constructor(private readonly kafkaService: IKafkaService) {}

  async execute(
    port: INewTransactionUseCaseInput
  ): Promise<INewTransactionUseCaseOutput> {
    await this.kafkaService.sendMessage<INewTransactionUseCaseInput>({
      topic: MessageTopic.CREATE,
      message: port,
    });
    return {
      data: port,
      message: "The transaction has been received successfully",
    };
  }
}
