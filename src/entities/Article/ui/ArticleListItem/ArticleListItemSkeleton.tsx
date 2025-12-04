
import { ArticleView } from "../../model/consts/const";
import cls from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Card from "shared/ui/Card/Card";
import Skeleton from "shared/ui/Skeleton/Skeleton";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

const ArticleListItemSkeleton = ({
  className,
  view,
}: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.LIST) {
    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton height={30} width={30} border="50%" />
            <Skeleton width={150} height={16} />
            <Skeleton width={150} height={16} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={200} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }
  return (
    <div
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imgWrapper}>
          <Skeleton width={200} height={200} className={cls.img} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} />
      </Card>
    </div>
  );
};

export default ArticleListItemSkeleton;
