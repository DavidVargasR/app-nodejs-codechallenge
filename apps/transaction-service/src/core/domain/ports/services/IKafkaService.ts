export interface IKafkaService {
  sendMessage<IMessageType>(input: {
    topic: string;
    message: IMessageType;
  }): Promise<void>;
  receiveMessage(topics: string[], callback: () => void): Promise<void>;
}
