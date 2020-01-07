import {ioc} from './ioc';

export class BaseProvider {
  constructor() {
    this.ioc = ioc;
  }

  /**
   * @abstract
   */
  register() {}

  static bootstrap() {
    const provider = new this();
    provider.register();
  }
}