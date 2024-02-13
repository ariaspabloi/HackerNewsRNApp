import AsyncStorage from '@react-native-async-storage/async-storage';
import {Article} from '../../domain/entities/article';
import {STORAGE_KEYS} from '../constants/storageKeys';

class ArticleLocalDataSource {
  async setArticles(articles: Article[]) {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.ARTICLES,
        JSON.stringify(articles),
      );
    } catch (error) {
      console.log('error saving articles in local datasource', error);
    }
  }

  async getArticles(): Promise<Article[]> {
    try {
      const articles = await AsyncStorage.getItem(STORAGE_KEYS.ARTICLES);
      if (!articles) {
        return [] as Article[];
      }
      return JSON.parse(articles) as Article[];
    } catch (error) {
      console.log('error fetching articles from local datasource', error);
      throw error;
    }
  }

  async saveRemovedArticlesIds(removedArticleIds: Set<string>) {
    try {
      const removedArticleIdsArray = Array.from(removedArticleIds);
      await AsyncStorage.setItem(
        STORAGE_KEYS.REMOVED_ARTICLE_IDS,
        JSON.stringify(removedArticleIdsArray),
      );
    } catch (error) {
      console.error('error saving removed article IDs to local storage', error);
      throw error;
    }
  }

  async getRemovedArticlesIds(): Promise<Set<string>> {
    try {
      const removed = await AsyncStorage.getItem(
        STORAGE_KEYS.REMOVED_ARTICLE_IDS,
      );
      if (!removed) {
        return new Set<string>();
      }
      return new Set<string>(JSON.parse(removed));
    } catch (error) {
      console.error(
        'error fetching removed articles from local datasource',
        error,
      );
      return new Set<string>();
    }
  }
}

export const articleLocalDataSource = new ArticleLocalDataSource();
export type ArticleLocalDataSourceType = InstanceType<
  typeof ArticleLocalDataSource
>;
