import {
  ArticleRepositoryType,
  articleRepository,
} from '../../data/repositories/ArticleRepository';
import {DeleteArticleError} from '../errors/DeleteArticleError';

class RemoveArticleUseCase {
  constructor(private readonly repository: ArticleRepositoryType) {}

  async execute(id: string) {
    try {
      await this.repository.addRemovedId(id);
    } catch (error) {
      console.error('Error removing article:', error);
      throw new DeleteArticleError('Failed to remove article.');
    }
  }
}

export const removeArticlesUseCase = new RemoveArticleUseCase(
  articleRepository,
);
