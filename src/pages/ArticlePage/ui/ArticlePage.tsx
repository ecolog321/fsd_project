import { memo, useCallback } from "react";
import cls from "./ArticlePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from "entities/Article";
import {
  articlesPageActions,
  articlesPageReducers,
  getArticles,
} from "../model/slice/articlesPageSlice";
import DynamicModuleLoader from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { fetchArticlesList } from "../model/services/fetchArticlesList";
import { useSelector } from "react-redux";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../model/selectors/articlesPageSelectors";

interface ArticlePageProps {
  className?: string;
}

const reducers = {
  articlesPage: articlesPageReducers,
};

const ArticlePage = ({ className }: ArticlePageProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState)
  });
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.articlePage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} articles={articles} view={view} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
