import {
  ArticleRepositoryType,
  articleRepository,
} from '../../data/repositories/ArticleRepository';

class RemoveArticleUseCase {
  constructor(private readonly repository: ArticleRepositoryType) {}

  async execute(id: string) {
    this.repository.addRemovedId(id);
  }
}

export const removeArticlesUseCase = new RemoveArticleUseCase(
  articleRepository,
);
