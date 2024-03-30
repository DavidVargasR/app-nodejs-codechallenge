import { AntiFraudUseCase } from "../../../core";
import { kafkaService } from "../services";

export const antiFraudUseCase = new AntiFraudUseCase(kafkaService);
