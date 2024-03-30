import { IAntiFraudUseCase, IAntiFraudUseCaseInput } from "../../../../core";

export interface IAntiFraudUseCaseDependencies {
  antiFraudUseCase: IAntiFraudUseCase;
}

export interface IAntiFraudController {
  antiFraudValidate(input: IAntiFraudUseCaseInput): Promise<void> | void;
}
