import { ConfigProvider } from '@app/providers/ConfigProvider';
import { UserProvider } from '@app/providers/UserProvider';
import { EventProvider } from '@app/providers/EventProvider';
import { JobProvider } from '@app/providers/JobProvider';
import { MailProvider } from '@app/providers/MailProvider';
import { BaseProvider } from '@app/core/BaseProvider';

export const setup = () => {
  const providers: Array<BaseProvider> = [
    new ConfigProvider(),
    new EventProvider(),
    new UserProvider(),
    new JobProvider(),
    new MailProvider(),
  ];

  providers.forEach((providerClass: BaseProvider) => {
    providerClass.register();
  });

  providers.forEach((providerClass: BaseProvider) => {
    providerClass.boot();
  });
};
