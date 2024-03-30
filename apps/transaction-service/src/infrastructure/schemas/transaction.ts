import { SchemaCompiler } from "./schema";

export const newTransactionSchemaInput: SchemaCompiler = {
  schema: {
    body: {
      type: "object",
      properties: {
        accountExternalIdDebit: { type: "string" },
        accountExternalIdCredit: { type: "string" },
        tranferTypeId: { type: "integer", minimum: 1 },
        value: { type: "number", minimum: 1 },
      },
    },
  },
};
