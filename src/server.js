import dotenv from 'dotenv';
dotenv.config();
import { Application } from '@app/interfaces/http/app';

new Application().bootstrap().run();
