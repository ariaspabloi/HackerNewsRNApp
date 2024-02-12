import AsyncStorage from '@react-native-async-storage/async-storage';
import {ArticleId, ArticleResponse} from '../entities/hnApiResponses';

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

  async saveRemovedArticleIds(removedArticleIds: Set<ArticleId>) {
    try {
      const removedArticleIdsArray = Array.from(removedArticleIds);
      await AsyncStorage.setItem(
        'removedArticleIds',
        JSON.stringify(removedArticleIdsArray),
      );
    } catch (error) {
      console.error('error saving removed article IDs to local storage', error);
    }
  }

  async getRemovedArticlesIds(): Promise<Set<ArticleId>> {
    try {
      const removed = await AsyncStorage.getItem('removedArticles');
      if (!removed) {
        return new Set<ArticleId>();
      }
      return new Set<ArticleId>(JSON.parse(removed));
    } catch (error) {
      console.error(
        'error fetching removed articles from local datasource',
        error,
      );
      return new Set<ArticleId>();
    }
  }
}

export const articleLocalDataSource = new ArticleLocalDataSource();
export type ArticleLocalDataSourceType = InstanceType<
  typeof ArticleLocalDataSource
>;
