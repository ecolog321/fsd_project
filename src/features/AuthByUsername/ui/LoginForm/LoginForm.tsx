import { useTranslation } from "react-i18next";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import Text, { TextTheme } from "shared/ui/Text/Text";

interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && <Text theme={TextTheme.ERROR} text={error} />}
      <Input
        autoFocus
        placeholder={t("Введите логин")}
        className={cls.input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t("Введите пароль")}
        className={cls.input}
        onChange={onChangePassword}
        value={password}
        disabled={isLoading}
      />
      <Button className={cls.loginBtn} onClick={onLoginClick}>
        {t("Войти")}
      </Button>
    </div>
  );
});

export default LoginForm;
