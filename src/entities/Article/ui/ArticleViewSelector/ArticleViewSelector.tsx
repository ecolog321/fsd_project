import { ArticleView } from "entities/Article/model/types/article";
import cls from "./ArticleViewSelector.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import ListIcon from "shared/assets/icons/list.svg";
import PlateIcon from "shared/assets/icons/plate.svg";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Icon from "shared/ui/Icon/Icon";

interface ArticleViewSelectorProps {
  className?: string;
  view?: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.PLATE,
    icon: PlateIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

const ArticleViewSelector = ({
  className,
  view,
  onViewClick,
}: ArticleViewSelectorProps) => {
  const onClick = (newView: ArticleView) => {
    return () => {
      onViewClick?.(newView);
    };
  };

  return (
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames("", {
              [cls.notSelected]: viewType.view !== view,
            })}
          />
        </Button>
      ))}
    </div>
  );
};

export default ArticleViewSelector;
