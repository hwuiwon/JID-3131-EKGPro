export class APIException extends Error {
  code: number;
  message: string;

  constructor(code: number, message: string) {
    super(message);

    Object.setPrototypeOf(this, APIException.prototype);

    this.code = code;
    this.message = message;

    Error.captureStackTrace(this, this.constructor);
  }

  public toJSON() {
    return {
      code: this.code,
      message: this.message,
    };
  }
}

export enum APIExceptionCode {
  INVALID_USER_CREDENTIALS = 4001,
  INVALID_API_REQUEST = 4002,
  FAILED_API_REQUEST = 4101,
  UNKNOWN_ERROR = 9999,
}
