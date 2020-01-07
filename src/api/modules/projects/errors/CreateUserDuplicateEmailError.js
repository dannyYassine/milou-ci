export class CreateUserDuplicateEmailError extends Error {
  constructor() {
    super();
    this.message = 'There is already an email.';
  }
}