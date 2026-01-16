import { FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ArticleRecommendationsList.module.scss";
import Text from "@/shared/ui/Text/Text";
import { ArticleList } from "@/entities/Article";
import VStack from "@/shared/ui/Stack/VStack/VStack";
import { useArticleRecommendationsList } from "../api/articleRecommendationsApi";

export interface IArticleRecommendationsListProps {
  className?: string;
}



const ArticleRecommendationsList: FC<IArticleRecommendationsListProps> = memo(
  ({ className }) => {
    const { t } = useTranslation();
    const { data: articles, isLoading } = useArticleRecommendationsList(3);

    if (!articles) {
      return (<Text text={'Нет статей'}/>)
    }

    return ( 
      <VStack
        gap="8"
        className={classNames(cls.articleRecommendationsList, {}, [className])}
      >
        <Text className={cls.title} title={t("Рекомендации")} />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          className={cls.recommendations}
          target="_blank"
        />
      </VStack>
    );
  }
);

export default ArticleRecommendationsList;
