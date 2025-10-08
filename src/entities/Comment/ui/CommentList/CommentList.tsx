import Text from "shared/ui/Text/Text";
import { Comment } from "../../model/types/comment";
import cls from "./CommentList.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import CommentCard from "../CommentCard/CommentCard";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList = ({ className, comments, isLoading }: CommentListProps) => {

  if (isLoading) {
    <div className={classNames(cls.commentList, {}, [className])}>
      <CommentCard isLoading />
      <CommentCard isLoading />
      <CommentCard isLoading />
    </div>
  }
  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            className={cls.comment}
            comment={comment}
            key={comment.id}
          />
        ))
      ) : (
        <Text text="Комментарии отсутствуют" />
      )}
    </div>
  );
};

export default CommentList;
