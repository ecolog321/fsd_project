import { ArticleList } from "@/entities/Article";
import {
  getArticlesPageError,
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors'
import { initArticlesPage } from "../../model/services/initArticlesPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import Text from "@/shared/ui/Text/Text";
import { getArticles } from "@/features/sortArticles";

interface ArticleInfiniteListProps {
  className?: string;
}

const ArticleInfiniteList = ({ className }: ArticleInfiniteListProps) => {
  const error = useSelector(getArticlesPageError);
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const inited = useSelector(getArticlesPageInited);
  const [searchParams] = useSearchParams();



  useEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, [dispatch, inited, view, searchParams]);

  if (error) {
    return <Text text={`Ошибка ${error}`} />
  }

  return (
    <ArticleList
      isLoading={isLoading}
      articles={articles}
      view={view}
      className={className}
      />
  );
};

export default ArticleInfiniteList;
