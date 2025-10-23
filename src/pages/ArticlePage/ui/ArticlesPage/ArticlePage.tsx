import { memo, useCallback, useEffect } from "react";
import cls from "./ArticlePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleList } from "entities/Article";
import {
  articlesPageReducers,
  getArticles,
} from "../../model/slice/articlesPageSlice";
import DynamicModuleLoader from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import {
  getArticlesPageError,
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage";
import { Page } from "widgets/Page";
import { ArticlesPageFilters } from "features/sortArticles";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ArticlePageProps {
  className?: string;
}

const reducers = {
  articlesPage: articlesPageReducers,
};

const ArticlePage = ({ className }: ArticlePageProps) => {
  const {t}=useTranslation()
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const inited = useSelector(getArticlesPageInited);
  const [searchParams]= useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, [dispatch, inited, view, searchParams]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUmnount={false}>
      <Page
        className={classNames(cls.articlePage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        {error ? (
          <div>{t('Ошибка')}</div>
        ) : (
          <>
            <ArticlesPageFilters />
            <ArticleList
              isLoading={isLoading}
              articles={articles}
              view={view}
              className={cls.list}
            />
          </>
        )}
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
