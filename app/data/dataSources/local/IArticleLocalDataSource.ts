import {Article} from '../../../domain/entities/article';

interface IArticleLocalDataSource {
  setArticles(articles: Article[]): Promise<void>;
  getArticles(): Promise<Article[]>;
  saveRemovedArticlesIds(removedArticleIds: Set<string>): Promise<void>;
  getRemovedArticlesIds(): Promise<Set<string>>;
}

export default IArticleLocalDataSource;
