import { IKafkaService } from "../../../core";
import { Consumer, Producer } from "kafkajs";

export class KafkaService implements IKafkaService {
  constructor(
    private readonly producer: Producer,
    private readonly consumer: Consumer
  ) {}

  async sendMessage<IMessageType>(input: {
    topic: string;
    message: IMessageType;
  }): Promise<void> {
    await this.producer.send({
      topic: input.topic,
      messages: [
        {
          value: JSON.stringify({ ...input.message }),
        },
      ],
    });
  }

  async receiveMessage(topics: string[], callback: Function): Promise<void> {
    await this.consumer.subscribe({ topics, fromBeginning: true });
    await this.consumer.run({
      eachMessage: async ({ message, topic }) => {
        callback(topic, JSON.parse(message.value?.toString() ?? "{}"));
      },
    });
  }
}
