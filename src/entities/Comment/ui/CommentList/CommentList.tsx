import Text from "shared/ui/Text/Text";
import { Comment } from "../../model/types/comment";
import cls from "./CommentList.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import CommentCard from "../CommentCard/CommentCard";
import VStack from "shared/ui/Stack/VStack/VStack";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList = ({ className, comments, isLoading }: CommentListProps) => {

  if (isLoading) {
    <VStack gap={'16'} className={classNames(cls.commentList, {}, [className])}>
      <CommentCard isLoading />
      <CommentCard isLoading />
      <CommentCard isLoading />
    </VStack>
  }
  return (
    <VStack max gap={'16'} className={classNames(cls.commentList, {}, [className])}>
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
    </VStack>
  );
};

export default CommentList;
