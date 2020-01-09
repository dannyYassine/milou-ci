console.log('server');
import { Application } from './app';

new Application()
    .bootstrap()
    .run();