import { ContentfulStatusCode } from "hono/utils/http-status";

export class ApplicationError extends Error {
  baseName = "ApplicationError";
  code: ContentfulStatusCode;

  constructor(message: string, code: ContentfulStatusCode = 500) {
    super(message);
    this.name = "ApplicationError";
    this.code = code;
  }

  getResponseMessage = () => {
    return {
      message: this.message,
    };
  };

  static isApplicationError = (error: any): error is ApplicationError => {
    return (
      error instanceof ApplicationError || error.baseName === "ApplicationError"
    );
  };
}
