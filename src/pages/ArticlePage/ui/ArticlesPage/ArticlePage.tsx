import { memo, useCallback } from "react";
import cls from "./ArticlePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import {
  articlesPageReducers,
} from "../../model/slice/articlesPageSlice";
import DynamicModuleLoader from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage";
import { Page } from "widgets/Page";
import { ArticlesPageFilters } from "features/sortArticles";
import { useTranslation } from "react-i18next";
import ArticleInfiniteList from "../ArticleInfiniteList/ArticleInfiniteList";

interface ArticlePageProps {
  className?: string;
}

const reducers = {
  articlesPage: articlesPageReducers,
};

const ArticlePage = ({ className }: ArticlePageProps) => {
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUmnount={false}>
      <Page
        className={classNames(cls.articlePage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        <>
          <ArticlesPageFilters />
          <ArticleInfiniteList />
        </>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
