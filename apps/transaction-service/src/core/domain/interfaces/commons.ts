export abstract class UseCase<TUseCasePort, TUseCaseResult> {
  abstract execute(
    port: TUseCasePort
  ): Promise<TUseCaseResult> | TUseCaseResult;
}

export enum MessageTopic {
  CREATE = "transaction.create",
  UPDATE = "transaction.update",
  VALIDATE = "transaction.validate",
}
