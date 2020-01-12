// import path from 'path';
// import fs from 'fs';

// const providersPath = path.join(path.resolve(), '/providers');

// fs.readdirSync(providersPath).forEach(file => {
//   console.log(file);
// });

// var normalizedPath = require('path').join(__dirname, 'routes');

// fs.readdirSync(normalizedPath).forEach(function(file) {
//   require('./routes/' + file);
// });

import { ConfigProvider } from '@app/providers/ConfigProvider';
import { UserProvider } from '@app/providers/UserProvider';
import { EventProvider } from '@app/providers/EventProvider';
import { JobProvider } from '@app/modules/jobs/providers';

export const setup = () => {
  ConfigProvider.bootstrap();
  EventProvider.bootstrap();
  UserProvider.bootstrap();
  JobProvider.bootstrap();

  ConfigProvider.init();
  EventProvider.init();
  UserProvider.init();
  JobProvider.init();
};
