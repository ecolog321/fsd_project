import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import cls from "./ArticleDetails.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { articleDetailsReducers } from "../../model/slice/articleDetailsSlice";
import { memo, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsisLoading,
} from "../../model/selectors/articleDetails";
import Text, { TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import Avatar from "shared/ui/Avatar/Avatar";
import EyeIcon from "shared/assets/icons/eye.svg";
import CalendarIcon from "shared/assets/icons/calendar.svg";
import Icon from "shared/ui/Icon/Icon";
import {
  ArticleBlock,
  ArticleBlockType,
} from "../../model/types/article";
import ArticleCodeBlockComponent from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import ArticleImageBlockComponent from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import ArticleTextBlockComponent from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import HStack from "shared/ui/Stack/HStack/HStack";
import VStack from "shared/ui/Stack/VStack/VStack";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const reducers: ReducersList = {
    articleDetails: articleDetailsReducers,
  };
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsisLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useInitialEffect(()=>{
    dispatch(fetchArticleById(id))
  })

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        );
        break;
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        );
        break;
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        );
        break;

      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width={"100%"} height={200} />
        <Skeleton className={cls.skeleton} width={"100%"} height={200} />
      </div>
    );
  } else if (error) {
    <div>
      <Text
        title={"Произошла ошибка загрузки статьи"}
        theme={TextTheme.ERROR}
        aling={TextAlign.CENTER}
      />
    </div>;
  } else {
    content = (
      <>
        <HStack gap={'8'} justify={"center"} className={cls.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </HStack>

        <Text
          title={article?.title}
          text={article?.subtitle}
          className={cls.title}
          size={TextSize.L}
        />
        <HStack gap={"8"} className={cls.articleInfo}>
          <Icon Svg={EyeIcon} className={cls.icon} />
          <Text text={String(article?.views)} />
        </HStack>
        <HStack gap={'8'} className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} className={cls.icon} />
          <Text text={article?.createdAt} />
        </HStack>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUmnount>
      <VStack gap={'16'} max className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});

export default ArticleDetails;
