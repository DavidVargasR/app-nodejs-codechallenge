import { Kafka } from "kafkajs";
import { KafkaService } from "../../adapters";
import { getEnvironmentData } from "worker_threads";
import { getEnvVariableValue } from "../../utils";

const kafka = new Kafka({
  clientId: "antifraud-service",
  brokers: [getEnvVariableValue("KAFKA_URL")],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "antifraud-service" });
producer.connect();
consumer.connect();

export const kafkaService = new KafkaService(producer, consumer);
