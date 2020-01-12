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
