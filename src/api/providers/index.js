import { ConfigProvider } from '@app/api/providers/ConfigProvider';
import { UserProvider } from '@app/api/providers/UserProvider';
import { EventProvider } from '@app/api/providers/EventProvider';
import { JobProvider } from '@app/api/modules/jobs/providers';

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
