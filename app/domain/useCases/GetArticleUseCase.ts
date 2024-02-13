import {
  ArticleRepositoryType,
  articleRepository,
} from '../../data/repositories/ArticleRepository';
import {RetrieveArticlesError} from '../errors/RetrieveArticleError';

class GetArticlesUseCase {
  constructor(private readonly repository: ArticleRepositoryType) {}

  async execute() {
    try {
      const articles = await this.repository.getArticles();
      return articles;
    } catch (error) {
      console.error('Error retrieving articles:', error);
      throw new RetrieveArticlesError('Failed to retrieve articles.');
    }
  }
}

export const getArticlesUseCase = new GetArticlesUseCase(articleRepository);
