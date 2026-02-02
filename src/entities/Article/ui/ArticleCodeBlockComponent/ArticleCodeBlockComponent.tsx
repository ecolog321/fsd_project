import { memo } from "react";
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
        className={classNames('', {}, [className])}
      >
        <Code text={block.code}/>
      </div>
    );
  }
);

export default ArticleCodeBlockComponent;
