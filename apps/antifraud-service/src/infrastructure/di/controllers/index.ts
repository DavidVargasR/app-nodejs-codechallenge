import { antiFraudUseCase } from "../use-cases";
import { AntiFraudController } from "../../presentation/controllers";

export const antiFraudController = AntiFraudController({
  antiFraudUseCase,
});
