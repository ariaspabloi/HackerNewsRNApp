import {
  ArticleLocalDataSourceType,
  articleLocalDataSource,
} from '../dataSources/ArticleLocalDataSource';
import {
  ArticleRemoteDataSourceType,
  articleRemoteDataSource,
} from '../dataSources/ArticleRemoteDataSource';
import {ArticleId, ArticleResponse} from '../entities/hnApiResponses';

class ArticleRepository {
  constructor(
    private remote: ArticleRemoteDataSourceType,
    private local: ArticleLocalDataSourceType,
  ) {}

  async getArticles(): Promise<ArticleResponse[]> {
    let articles: ArticleResponse[];
    try {
      const {hits} = await this.remote.getArticles();
      const removedIds = await this.local.getRemovedArticlesIds();
      articles = hits.filter(article => removedIds.has(article.objectID));
      this.local.setArticles(articles);
    } catch (error) {
      articles = await this.local.getArticles();
    }
    return articles;
  }

  async addRemovedId(id: ArticleId) {
    try {
      const removedIds = await this.local.getRemovedArticlesIds();
      removedIds.add(id);
      this.local.saveRemovedArticleIds(removedIds);

      let articles = await this.local.getArticles();

      const indexToRemove = articles.findIndex(
        article => article.objectID === id,
      );
      if (indexToRemove !== -1) {
        articles.splice(indexToRemove, 1);
        await this.local.setArticles(articles);
      }
    } catch (error) {
      console.log('error adding removing id', error);
    }
  }
}

export const articleRepository = new ArticleRepository(
  articleRemoteDataSource,
  articleLocalDataSource,
);
