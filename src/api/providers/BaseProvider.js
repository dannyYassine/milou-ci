import {ioc} from './ioc';

export class BaseProvider {
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