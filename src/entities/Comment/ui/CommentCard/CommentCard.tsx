import Avatar from "shared/ui/Avatar/Avatar";
import { Comment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Text from "shared/ui/Text/Text";
import Skeleton from "shared/ui/Skeleton/Skeleton";

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {

  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton
            width={30}
            height={30}
            border="50%"
            className={cls.username}
          />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton width={"100%"} height={50} />
      </div>
    );
  }
  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar ? (
          <Avatar src={comment.user.avatar} size={40} />
        ) : null}
        <Text className={cls.username} text={comment.user.username} />
      </div>
      <Text className={cls.text} text={comment.text} />
    </div>
  );
};

export default CommentCard;
