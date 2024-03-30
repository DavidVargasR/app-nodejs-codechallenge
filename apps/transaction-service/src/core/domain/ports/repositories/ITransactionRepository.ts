import { ITransaction } from "../../entities";
import { ICreateTransactionUseCaseInput } from "../../useCases";

export interface ITransactionRepository {
  getTransaction(transaction_external_id: string): Promise<ITransaction | null>;
  createTransaction(
    input: ICreateTransactionUseCaseInput
  ): Promise<ITransaction>;
  updateTransaction(input: ITransaction): Promise<ITransaction>;
}
