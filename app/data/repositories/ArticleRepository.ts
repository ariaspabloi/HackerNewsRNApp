import {Article} from '../../domain/entities/article';
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
    private readonly remote: ArticleRemoteDataSourceType,
    private readonly local: ArticleLocalDataSourceType,
  ) {}

  async getArticles(): Promise<Article[]> {
    let articles: Article[];
    try {
      const {hits} = await this.remote.getArticles();
      const removedIds = await this.local.getRemovedArticlesIds();
      const articlesResponse = hits.filter(
        article => !removedIds.has(article.objectID),
      );
      articles = articlesResponse.map(article => this.transform(article));
      this.local.setArticles(articles);
    } catch (error) {
      articles = await this.local.getArticles();
    }
    return articles;
  }

  async addRemovedId(id: string) {
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
