import { ArticleType, ArticleView, ArticleViewSelector } from "@/entities/Article";
import cls from "./ArticlesPageFilters.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useCallback, useMemo } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import Card from "@/shared/ui/Card/Card";
import Input from "@/shared/ui/Input/Input";
import ArticleSortSelector from "../ArticleSortSelector/ArticleSortSelector";
import {
  getOrderArticles,
  getSearchArticles,
  getSortArticles,
  getTypeArticles,
} from "../../model/selectors/sortArticlesSelector";
import {
  sortArticlesActions,
  sortArticlesReducers,
} from "../../model/slice/sortArticlesSlice";
import { ArticleSortFeild, SortOrder } from "../../model/types/sortArticles";
import DynamicModuleLoader, {
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import Tabs, { TabItem } from "@/shared/ui/Tabs/Tabs";
// eslint-disable-next-line ormina-plugin/layer-imports
import { articlesPageActions, fetchArticlesList, getArticlesPageView } from "@/pages/ArticlePage";

interface ArticlesPageFiltersProps {
  className?: string;
}

const initialReducers: ReducersList = {
  sortArticles: sortArticlesReducers,
};

const ArticlesPageFilters = ({ className }: ArticlesPageFiltersProps) => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getSortArticles);
  const order = useSelector(getOrderArticles);
  const search = useSelector(getSearchArticles);
  const type = useSelector(getTypeArticles);
  const typeTabs = useMemo<TabItem[]>(()=>[
    {
      value:ArticleType.ALL,
      content:('Все')
    },
    {
      value:ArticleType.IT,
      content:('IT')
    },
    {
      value:ArticleType.ECONOMICS,
      content:('Экономика')
    },
    {
      value:ArticleType.SCIENCE,
      content:('Наука')
    }
  ],[]) 

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({replace:true}));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );
  const onChangeSort = useCallback(
    (newSort: ArticleSortFeild) => {
      dispatch(sortArticlesActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );
  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(sortArticlesActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );
  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(sortArticlesActions.setSearch(search));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData]
  );
  const onChangeType = useCallback(
    (tab: TabItem) => {
      dispatch(sortArticlesActions.setType(tab.value as ArticleType));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData]
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUmnount={false}>
      <div className={classNames(cls.articlesPageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            order={order}
            sort={sort}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
          />
          <ArticleViewSelector view={view} onViewClick={onChangeView} />
        </div>
        <Card className={cls.search}>
          <Input value={search} onChange={onChangeSearch} placeholder="Поиск" />
        </Card>
        <Tabs tabs={typeTabs} value={type} onTabClick={onChangeType} className={cls.tabs}/>
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPageFilters;
