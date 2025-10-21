import Button from "shared/ui/Button/Button";
import cls from "./ArticleDetailsPageHeader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import { useSelector } from "react-redux";
import { getCanEditArticle } from "pages/ArticleDetailsPage/model/selectors/article";
import { getArticleDetailsData } from "entities/Article";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

const ArticleDetailsPageHeader = ({
  className,
}: ArticleDetailsPageHeaderProps) => {
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RouterPath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RouterPath.article_details}${article?.id}/edit `);
  }, [article?.id, navigate]);

  return (
    <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
      <Button onClick={onBackToList}>Назад к списку</Button>
      {canEdit && (
        <Button className={cls.editBtn} onClick={onEditArticle}>
          Редактировать
        </Button>
      )}
    </div>
  );
};

export default ArticleDetailsPageHeader;
