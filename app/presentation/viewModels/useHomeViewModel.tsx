import {useEffect, useState} from 'react';
import {Article} from '../../domain/entities/article';
import {AppError} from '../../domain/errors/AppError';
import {getArticlesUseCase} from '../../domain/useCases/GetArticleUseCase';
import {removeArticlesUseCase} from '../../domain/useCases/RemoveArticleUseCase';

export const useHomeViewModel = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getArticles = async () => {
    setIsLoading(true);
    try {
      const data = await getArticlesUseCase.execute();
      setArticles(data);
      setErrorMessage(null);
    } catch (error) {
      if (error instanceof AppError) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const removeArticleById = async (id: string) => {
    try {
      await removeArticlesUseCase.execute(id);
      setArticles(prevArticles => {
        const index = prevArticles.findIndex(
          article => article.objectID === id,
        );
        if (index !== -1) {
          const articlesCopy = [...prevArticles];
          articlesCopy.splice(index, 1);
          return articlesCopy;
        }
        return prevArticles;
      });
      setErrorMessage(null);
    } catch (error) {
      if (error instanceof AppError) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Failed to remove the article.');
      }
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return {getArticles, articles, isLoading, removeArticleById, errorMessage};
};
