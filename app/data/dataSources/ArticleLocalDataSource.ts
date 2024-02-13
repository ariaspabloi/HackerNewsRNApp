import AsyncStorage from '@react-native-async-storage/async-storage';
import {Article} from '../../domain/entities/article';

class ArticleLocalDataSource {
  async setArticles(articles: Article[]) {
    try {
      await AsyncStorage.setItem('articles', JSON.stringify(articles));
    } catch (error) {
      console.log('error saving articles in local datasource', error);
    }
  }

  async getArticles(): Promise<Article[]> {
    try {
      const articles = await AsyncStorage.getItem('articles');
      if (!articles) {
        return [] as Article[];
      }
      return JSON.parse(articles) as Article[];
    } catch (error) {
      console.log('error fetching articles from local datasource', error);
      return [] as Article[];
    }
  }

  async saveRemovedArticleIds(removedArticleIds: Set<string>) {
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

  async getRemovedArticlesIds(): Promise<Set<string>> {
    try {
      const removed = await AsyncStorage.getItem('removedArticles');
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
