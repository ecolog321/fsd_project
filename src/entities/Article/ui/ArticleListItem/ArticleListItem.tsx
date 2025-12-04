import Text from "shared/ui/Text/Text";
import {
  Article
} from "../../model/types/article";
import cls from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Icon from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eye.svg";
import Card from "shared/ui/Card/Card";
import Avatar from "shared/ui/Avatar/Avatar";
import Button from "shared/ui/Button/Button";
import ArticleTextBlockComponent from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { HTMLAttributeAnchorTarget, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import AppLink from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { ArticleBlockType, ArticleView } from "../../model/consts/const";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListItem = ({
  className,
  view,
  article,
  target,
}: ArticleListItemProps) => {
  const {t}=useTranslation('article')
  const navigate = useNavigate();
  const onOpenArticle = useCallback(() => {
    navigate(RouterPath.article_details + article.id);
  }, [article.id, navigate]);

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    );
    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          <Text text={article.type.join(", ")} className={cls.types} />
          <img src={article.img} className={cls.pic} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink
              target={target}
              to={RouterPath.article_details + article.id}
            >
              <Button onClick={onOpenArticle}>{t('Читать далее')}</Button>
            </AppLink>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
          </div>
        </Card>
      </div>
    );
  }
  return (
    <AppLink
      target={target}
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      to={RouterPath.article_details + article.id}
    >
      <Card className={cls.card}>
        <div className={cls.imgWrapper}>
          <img alt={article.title} src={article.img} className={cls.pic} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          <Text text={article.type.join(", ")} className={cls.types} />
          <Text text={String(article.views)} className={cls.views} />
          <Icon Svg={EyeIcon} />
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
};

export default ArticleListItem;
