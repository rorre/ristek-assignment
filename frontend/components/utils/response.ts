import { ErrorData } from "types/responses";

function formatRequestError(errors: ErrorData[]): string[] {
  let convertedErrors: string[] = [];

  for (let err of errors) {
    let source = err.loc[err.loc.length - 1];
    let message = err.msg;

    convertedErrors.push(`${source}: ${message}`);
  }

  return convertedErrors;
}

export { formatRequestError };
