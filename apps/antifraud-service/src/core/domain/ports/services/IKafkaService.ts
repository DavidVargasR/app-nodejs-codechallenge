export interface IKafkaService {
  sendMessage<IMessageType>(input: {
    topic: string;
    message: IMessageType;
  }): Promise<void>;
  receiveMessage(topic: string, callback: Function): Promise<void>;
}
