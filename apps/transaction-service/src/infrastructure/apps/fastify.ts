import fastify from "fastify";
import registerAppRoutes from "../presentation/routes";
import {
  errorFormatter,
  schemaErrorFormatter,
  validatorCompiler,
} from "../utils";

export function fastifyApp() {
  const app = fastify();

  app.register(registerAppRoutes);

  app.setErrorHandler(errorFormatter);
  app.setSchemaErrorFormatter(schemaErrorFormatter);
  app.setValidatorCompiler(validatorCompiler);

  const port = 3000;
  app.listen({ port }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`app listening at ${address}`);
  });
}
