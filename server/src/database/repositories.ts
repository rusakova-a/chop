import { Database } from './index';
import { Request } from './models';

export const RequestRepository = Database.getRepository( Request );
