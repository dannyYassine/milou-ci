import { router as projectsRouter } from '@app/api/modules/projects/routes';
import { router as jobsRouter } from '@app/api/modules/jobs/routes';

/**
 * @param {express.Application} app
 */
export function init(app) {
  projectsRouter(app);
  jobsRouter(app);
}
