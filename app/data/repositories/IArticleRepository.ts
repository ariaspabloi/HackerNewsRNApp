import {Article} from '../../domain/entities/article';

interface IArticleRepository {
  getArticles(): Promise<Article[]>;
  addRemovedId(id: string): Promise<void>;
}

export default IArticleRepository;
