export class NoJobFoundError extends Error {
  constructor(pid) {
    super();
    this.message = `There was no job with ${pid} pid.`;
  }
}
