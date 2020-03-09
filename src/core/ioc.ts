import * as path from 'path';
import * as iocFn from 'ioc-node';

// const ioc = iocFn(path.resolve());
const _ioc = iocFn(path.resolve());

export class IOC {
  public use<T>(type: any): T {
    return _ioc.use(String(type));
  }

  public bind<T>(type: any, cb): T {
    return _ioc.bind(String(type), cb);
  }

  public singleton<T>(type: any, cb): T {
    return _ioc.singleton(String(type), cb);
  }
}

export const ioc = new IOC();
