import {AppError} from './AppError';

export class RetrieveArticlesError extends AppError {
  constructor(message: string = 'Unable to retrieve articles') {
    super(message);
  }
}
