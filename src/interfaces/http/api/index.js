import { router as projectsRouter } from '@app/modules/user/routes';
import { router as jobsRouter } from '@app/modules/jobs/routes';

/**
 * @param {express.Application} app
 */
export function init(app) {
  projectsRouter(app);
  jobsRouter(app);
}
