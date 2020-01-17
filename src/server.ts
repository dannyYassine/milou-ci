import './bootstrap';
import { Application } from '@app/interfaces/http/app';

const cleanExit = function() {
  process.exit();
};

process.on('SIGINT', cleanExit); // catch ctrl-c
process.on('SIGTERM', cleanExit); // catch kill

new Application().bootstrap().run();
