import { ioc } from '@app/providers/ioc';

import { UserProvider } from "@app/api/providers/UserProvider";

UserProvider.bootstrap();

export const ioc = ioc;