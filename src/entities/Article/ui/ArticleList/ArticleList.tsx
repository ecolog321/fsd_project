import { HTMLAttributeAnchorTarget, memo } from "react";
import { Article } from "../../model/types/article";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import ArticleListItemSkeleton from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleView } from "../../model/consts/const";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?:HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.PLATE ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

const ArticleList = memo(({
  className,
  articles,
  view = ArticleView.PLATE,
  isLoading,
  target
}: ArticleListProps) => {

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
        className={cls.card}
        target={target}
      />
    );
  };

  return (
    <div className={classNames(cls.card, {}, [className, cls[view]])}>
      {articles?.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});

export default ArticleList;
