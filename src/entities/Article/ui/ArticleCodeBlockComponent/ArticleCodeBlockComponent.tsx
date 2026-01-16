import { memo } from "react";
import cls from "./ArticleCodeBlockComponent.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleCodeBlock } from "../../model/types/article";
import Code from "@/shared/ui/Code/Code";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.articleImageBlockComponent, {}, [className])}
      >
        <Code text={block.code}/>
      </div>
    );
  }
);

export default ArticleCodeBlockComponent;
