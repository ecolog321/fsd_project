import Select, { SelectOptions } from "shared/ui/Select/Select";
import cls from "./ArticleSortSelector.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useMemo } from "react";
import {
  ArticleSortFeild,
  SortOrder,
} from "../../model/types/sortArticles";

interface ArticleSortSelectorProps {
  className?: string;
  sort?: ArticleSortFeild;
  order?: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortFeild) => void;
}

const ArticleSortSelector = ({
  className,
  sort,
  order,
  onChangeOrder,
  onChangeSort,
}: ArticleSortSelectorProps) => {
  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: "возрастанию",
      },
      {
        value: "desc",
        content: "убыванию",
      },
    ],
    []
  );
  const sortFieldOptions = useMemo<SelectOptions<ArticleSortFeild>[]>(
    () => [
      {
        value: ArticleSortFeild.CREATED,
        content: "дате создания",
      },
      {
        value: ArticleSortFeild.TITLE,
        content: "названию",
      },
      {
        value: ArticleSortFeild.VIEWS,
        content: "просмотрам",
      },
    ],
    []
  );


  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select
        value={sort}
        onChange={onChangeSort}
        options={sortFieldOptions}
        label="Сортировать по"
      />
      <Select
        value={order}
        onChange={onChangeOrder}
        options={orderOptions}
        label="по"
      />
    </div>
  );
};

export default ArticleSortSelector;
