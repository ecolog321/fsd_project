import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";
import { FC } from "react";
import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";

interface NotFoundPagePrps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPagePrps> = ({ className }) => {
  const {t}=useTranslation('common')
  return (
    <Page className={classNames(cls.notFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </Page>
  );
};

export default NotFoundPage;
