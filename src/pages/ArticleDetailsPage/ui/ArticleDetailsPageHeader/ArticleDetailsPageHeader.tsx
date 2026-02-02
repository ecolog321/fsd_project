import Button from "@/shared/ui/Button/Button";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { RouterPath } from "@/shared/config/routeConfig/routeConfig";
import { useSelector } from "react-redux";
import { getCanEditArticle } from "../../model/selectors/article";
import { getArticleDetailsData } from "@/entities/Article";
import { useTranslation } from "react-i18next";
import HStack from "@/shared/ui/Stack/HStack/HStack";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

const ArticleDetailsPageHeader = ({
  className,
}: ArticleDetailsPageHeaderProps) => {
  const {t}=useTranslation('article')
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
    <HStack gap={'8'} justify={"between"} className={classNames('', {}, [className])}>
      <Button onClick={onBackToList}>{t('Назад к списку')}</Button>
      {canEdit && (
        <Button className={''} onClick={onEditArticle}>
          {t('Редактировать')}
        </Button>
      )}
    </HStack>
  );
};

export default ArticleDetailsPageHeader;
