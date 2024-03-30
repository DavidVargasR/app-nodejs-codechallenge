import { MessageTopic } from "../../core";
import { antiFraudController, kafkaService } from "../di";

export function kafkaApp() {
  kafkaService.receiveMessage(
    MessageTopic.VALIDATE,
    antiFraudController.antiFraudValidate
  );
}
