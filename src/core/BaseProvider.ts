import { ioc, IOC } from './ioc';

export class BaseProvider {
  public ioc: IOC;

  constructor() {
    this.ioc = ioc;
  }

  register() {}

  boot() {}

  static bootstrap() {
    const provider = new this();
    provider.register();
  }

  static init() {
    const provider = new this();
    provider.boot();
  }
}
