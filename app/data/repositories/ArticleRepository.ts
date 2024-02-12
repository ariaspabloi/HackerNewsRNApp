import {
  ArticleLocalDataSourceType,
  articleLocalDataSource,
} from '../dataSources/ArticleLocalDataSource';
import {
  ArticleRemoteDataSourceType,
  articleRemoteDataSource,
} from '../dataSources/ArticleRemoteDataSource';
import {ArticleResponse} from '../entities/hnApiResponses';

class ArticleRepository {
  constructor(
    private remote: ArticleRemoteDataSourceType,
    private local: ArticleLocalDataSourceType,
  ) {}

  async getArticles(): Promise<ArticleResponse[]> {
    let articles: ArticleResponse[];
    try {
      const remoteData = await this.remote.getArticles();
      articles = remoteData.hits;
      this.local.setArticles(articles);
    } catch (error) {
      articles = await this.local.getArticles();
    }
    return articles;
  }
}

export const articleRepository = new ArticleRepository(
  articleRemoteDataSource,
  articleLocalDataSource,
);
