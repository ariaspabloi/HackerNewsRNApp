import {HackerNewsResponse} from '../../entities/hnApiResponses';

interface IArticleRemoteDataSource {
  getArticles(): Promise<HackerNewsResponse>;
}

export default IArticleRemoteDataSource;
