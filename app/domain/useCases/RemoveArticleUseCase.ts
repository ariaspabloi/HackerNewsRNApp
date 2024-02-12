import {
  ArticleRepositoryType,
  articleRepository,
} from '../../data/repositories/ArticleRepository';
import {ArticleId} from '../entities/article';

class RemoveArticleUseCase {
  constructor(private readonly repository: ArticleRepositoryType) {}

  async execute(id: ArticleId) {
    await this.repository.addRemovedId(id);
  }
}

export const removeArticlesUseCase = new RemoveArticleUseCase(
  articleRepository,
);
