import axiosInstance from '../../axiosInstance';
import {HackerNewsResponse} from '../../entities/hnApiResponses';
import {MOBILE_NEWS_QUERY} from '../../utils/api';
import IArticleRemoteDataSource from './IArticleRemoteDataSource';

class ArticleRemoteDataSource implements IArticleRemoteDataSource {
  async getArticles(): Promise<HackerNewsResponse> {
    const response = await axiosInstance.get<HackerNewsResponse>(
      MOBILE_NEWS_QUERY,
    );
    return response.data;
  }
}

export const articleRemoteDataSource = new ArticleRemoteDataSource();
export type ArticleRemoteDataSourceType = InstanceType<
  typeof ArticleRemoteDataSource
>;
