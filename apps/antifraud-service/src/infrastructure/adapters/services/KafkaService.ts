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

  async receiveMessage(topic: string, callback: Function): Promise<void> {
    await this.consumer.subscribe({ topic, fromBeginning: true });
    await this.consumer.run({
      eachMessage: async ({ message }) => {
        callback(JSON.parse(message.value?.toString() ?? "{}"));
      },
    });
  }
}
