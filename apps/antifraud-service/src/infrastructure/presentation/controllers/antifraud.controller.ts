import {
  IAntiFraudController,
  IAntiFraudUseCaseDependencies,
} from "./interfaces";
import { IAntiFraudUseCaseInput } from "../../../core";

export function AntiFraudController({
  antiFraudUseCase,
}: IAntiFraudUseCaseDependencies): IAntiFraudController {
  function antiFraudValidate(
    input: IAntiFraudUseCaseInput
  ): Promise<void> | void {
    antiFraudUseCase.execute(input);
  }

  return {
    antiFraudValidate,
  };
}
