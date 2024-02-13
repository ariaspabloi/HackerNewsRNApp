import {AppError} from './AppError';

export class DeleteArticleError extends AppError {
  constructor(message: string = 'Unable to delete article') {
    super(message);
  }
}
