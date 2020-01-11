import { router as projectsRouter } from '@app/src/modules/projects/routes';
import { router as jobsrouter } from '@app/src/modules/jobs/routes';

/**
 * @param {express.Application} app
 */
export function init(app) {
  projectsRouter(app);
  jobsrouter(app);
}
