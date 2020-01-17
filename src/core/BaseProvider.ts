import { ioc } from './ioc';

export class BaseProvider {
  public ioc: any;

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
