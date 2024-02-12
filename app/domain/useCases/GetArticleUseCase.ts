import {
  ArticleRepositoryType,
  articleRepository,
} from '../../data/repositories/ArticleRepository';

class GetArticlesUseCase {
  constructor(private readonly repository: ArticleRepositoryType) {}

  async execute() {
    const articles = await this.repository.getArticles();
    return articles;
  }
}

export const getArticlesUseCase = new GetArticlesUseCase(articleRepository);
