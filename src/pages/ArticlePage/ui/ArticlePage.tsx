import { memo, useCallback, useEffect } from "react";
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
import { useSelector } from "react-redux";
import {
  getArticlesPageError,
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../model/selectors/articlesPageSelectors";
import Page from "shared/ui/Page/Page";
import { fetchNextArticlesPage } from "../model/services/fetchNextArticlesPage";
import { initArticlesPage } from "../model/services/initArticlesPage";

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
  const inited = useSelector(getArticlesPageInited);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(initArticlesPage())
  }, [dispatch, inited, view]);

  return (
    <DynamicModuleLoader reducers={reducers} i18nIsDynamicList={false}>
      <Page
        className={classNames(cls.articlePage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} articles={articles} view={view} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
