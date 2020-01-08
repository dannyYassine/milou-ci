import { ConfigProvider } from "@app/api/providers/ConfigProvider";
import { UserProvider } from "@app/api/providers/UserProvider";
import { EventProvider } from "@app/api/providers/EventProvider";

export const setup = () => {
  ConfigProvider.bootstrap();
  EventProvider.bootstrap();
  UserProvider.bootstrap();

  ConfigProvider.init();
  EventProvider.init();
  UserProvider.init();
};