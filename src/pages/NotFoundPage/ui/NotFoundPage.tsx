import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from "./NotFoundPage.module.scss";
import { FC } from "react";

interface NotFoundPagePrps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPagePrps> = ({ className }) => {
    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            Страница не найдена
        </div>
    );
};

export default NotFoundPage;
