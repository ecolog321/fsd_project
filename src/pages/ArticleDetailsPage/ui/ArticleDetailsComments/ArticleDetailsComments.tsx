import Text from "@/shared/ui/Text/Text";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AddCommentForm } from "@/features/addCommentForm";
import { CommentList } from "@/entities/Comment";
import VStack from "@/shared/ui/Stack/VStack/VStack";
import { useSelector } from "react-redux";
import { Suspense, useCallback } from "react";
import { getArticleComments } from "../../model/slice/articleDetailsCommentSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { addCommentForArticle } from "../../model/services/addCommentForArticle";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId";
import Loader from "@/shared/ui/Loader/Loader";

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

const ArticleDetailsComments = ({
  className,
  id,
}: ArticleDetailsCommentsProps) => {
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <VStack gap="8" max className={classNames("", {}, [className])}>
      <Text title={"Коментарии"} />
      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </VStack>
  );
};

export default ArticleDetailsComments;
