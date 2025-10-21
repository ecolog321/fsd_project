import { Page } from "widgets/Page";
import cls from "./ArticleEditPage.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from "react-router-dom";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const {id}=useParams<{id:string}>()
    const isEdit = Boolean(id);
  return (
      <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? 'Редактирование' : 'Создание'}
      </Page>
  );
};

export default ArticleEditPage;