import {
  ICreateTransactionUseCaseInput,
  IUpdateTransactionUseCaseInput,
  MessageTopic,
} from "../../core";
import { transactionController, kafkaService } from "../di";

export function kafkaApp() {
  kafkaService.receiveMessage(
    [MessageTopic.CREATE, MessageTopic.UPDATE],
    async (topic: string, value: unknown) => {
      console.log(topic);
      console.log(MessageTopic.CREATE);
      console.log(topic === MessageTopic.CREATE);

      if (topic === MessageTopic.CREATE) {
        await transactionController.createTransaction(
          value as ICreateTransactionUseCaseInput
        );
      }
      if (topic === MessageTopic.UPDATE) {
        await transactionController.updateTransaction(
          value as IUpdateTransactionUseCaseInput
        );
      }
    }
  );
}
