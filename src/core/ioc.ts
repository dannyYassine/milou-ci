import * as path from 'path';
import * as iocFn from 'ioc-node';

export const ioc = iocFn(path.resolve());
const _ioc = ioc;

export class IOC {
  public use(type: any) {
    return _ioc.use(String(type));
  }

  public bind(type: any) {
    return _ioc.bind(String(type));
  }

  public singleton(type: any) {
    return _ioc.singleton(String(type));
  }
}

// export const ioc = new IOC();
