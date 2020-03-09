export class NotFoundResourceError extends Error {
  constructor() {
    super();
    this.message = 'Resource not found';
  }
}
