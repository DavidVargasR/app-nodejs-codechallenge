import { Kafka } from "kafkajs";
import { KafkaService } from "../../adapters";
import { getEnvVariableValue } from "../../utils";

const kafka = new Kafka({
  clientId: "transaction-service",
  brokers: [getEnvVariableValue("KAFKA_URL")],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "transaction-service" });
producer.connect();
consumer.connect();

export const kafkaService = new KafkaService(producer, consumer);
