import AsyncStorage from '@react-native-async-storage/async-storage';
import {ArticleResponse} from '../entities/hnApiResponses';

class ArticleLocalDataSource {
  async setArticles(articles: ArticleResponse[]) {
    try {
      await AsyncStorage.setItem('articles', JSON.stringify(articles));
    } catch (error) {
      console.log('error saving articles in local datasource', error);
    }
  }

  async getArticles(): Promise<ArticleResponse[]> {
    try {
      const articles = await AsyncStorage.getItem('articles');
      if (!articles) {
        return [] as ArticleResponse[];
      }
      return JSON.parse(articles) as ArticleResponse[];
    } catch (error) {
      console.log('error fetching articles from local datasource', error);
      return [] as ArticleResponse[];
    }
  }
}

export const articleLocalDataSource = new ArticleLocalDataSource();
export type ArticleLocalDataSourceType = InstanceType<
  typeof ArticleLocalDataSource
>;
