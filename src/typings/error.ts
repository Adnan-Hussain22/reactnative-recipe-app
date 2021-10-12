export class CustomError extends Error {
  public code = "";
  constructor(code: string, message?: string) {
    super(message);
    this.code = code;
  }
}
