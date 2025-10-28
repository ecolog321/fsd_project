import { memo } from "react";
import cls from "./ArticleTextBlockComponent.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleTextBlock } from "../../model/types/article";
import Text from "shared/ui/Text/Text";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      >
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text key={paragraph} text={paragraph} className={cls.paragraph}/>
        ))}
      </div>
    );
  }
);

export default ArticleTextBlockComponent;
