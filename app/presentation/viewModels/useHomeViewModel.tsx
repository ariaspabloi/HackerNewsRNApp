import {useEffect, useState} from 'react';
import {Article} from '../../domain/entities/article';
import {getArticlesUseCase} from '../../domain/useCases/GetArticleUseCase';
import {removeArticlesUseCase} from '../../domain/useCases/RemoveArticleUseCase';

export const useHomeViewModel = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getArticles = async () => {
    setIsLoading(true);
    const data = await getArticlesUseCase.execute();
    setArticles(data);
    setIsLoading(false);
  };

  const removeArticleById = async (id: string) => {
    await removeArticlesUseCase.execute(id);
    setArticles(prevArticles => {
      const index = prevArticles.findIndex(article => article.objectID === id);
      if (index === -1) {
        return prevArticles;
      }
      const articlesCopy = [...prevArticles];
      articlesCopy.splice(index, 1);
      return articlesCopy;
    });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return {getArticles, articles, isLoading, removeArticleById};
};
