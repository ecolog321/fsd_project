import Input from "@/shared/ui/Input/Input";
import cls from "./AddCommentForm.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import Button from "@/shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import { useCallback } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import {
  addCommentFormActions,
  addCommentFormReducers,
} from "../../model/slice/addCommentFormSlice";
import DynamicModuleLoader, {
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useTranslation } from "react-i18next";
import HStack from "@/shared/ui/Stack/HStack/HStack";

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
  const {t} =useTranslation('article')
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();
  const reducers: ReducersList = {
    addCommentForm: addCommentFormReducers,
  };

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    onCommentTextChange("");
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack max gap={'8'} className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder="Введите текст комментария"
          value={text}
          onChange={onCommentTextChange}
        />
        <Button onClick={onSendHandler}>{t('Отправить')}</Button>
      </HStack>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
