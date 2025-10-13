import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";
import { FC } from "react";
import Page from "shared/ui/Page/Page";

interface NotFoundPagePrps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPagePrps> = ({ className }) => {
  return (
    <Page className={classNames(cls.notFoundPage, {}, [className])}>
      <div>Страница не найдена</div>
    </Page>
  );
};

export default NotFoundPage;
