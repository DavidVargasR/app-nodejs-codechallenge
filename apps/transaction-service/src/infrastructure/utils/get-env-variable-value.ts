import { EnvVariables } from "./env-variables";

export function getEnvVariableValue(envVariableName: keyof EnvVariables) {
  const env = process.env[envVariableName];
  if (!env) throw Error(`env ${envVariableName} is empty`);
  return env;
}
