import {
  ArticleLocalDataSourceType,
  articleLocalDataSource,
} from '../dataSources/ArticleLocalDataSource';
import {
  ArticleRemoteDataSourceType,
  articleRemoteDataSource,
} from '../dataSources/ArticleRemoteDataSource';
import {Article} from '../../domain/entities/article';
import {ArticleId, ArticleResponse} from '../entities/hnApiResponses';

class ArticleRepository {
  constructor(
    private readonly remote: ArticleRemoteDataSourceType,
    private readonly local: ArticleLocalDataSourceType,
  ) {}

  async getArticles(): Promise<Article[]> {
    let articlesResponse: ArticleResponse[];
    try {
      const {hits} = await this.remote.getArticles();
      const removedIds = await this.local.getRemovedArticlesIds();
      articlesResponse = hits.filter(article =>
        removedIds.has(article.objectID),
      );
      this.local.setArticles(articlesResponse);
    } catch (error) {
      articlesResponse = await this.local.getArticles();
    }
    const articles = articlesResponse.map(article => this.transform(article));
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

  private transform(response: ArticleResponse): Article {
    return {
      author: response.author,
      created_at_i: response.created_at_i,
      objectID: response.objectID,
      story_title: response.story_title,
      title: response.title,
      story_url: response.story_url,
    };
  }
}

export const articleRepository = new ArticleRepository(
  articleRemoteDataSource,
  articleLocalDataSource,
);

export type ArticleRepositoryType = InstanceType<typeof ArticleRepository>;
