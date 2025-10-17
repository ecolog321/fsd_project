import { useTranslation } from "react-i18next";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginByUsername } from "features/authByUsername/model/services/loginByUsername/loginByUsername";
import Text, { TextTheme } from "shared/ui/Text/Text";
import { getLoginUsername } from "features/authByUsername/model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "features/authByUsername/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginLoading } from "features/authByUsername/model/selectors/getLoginLoading/getLoginLoading";
import { getLoginError } from "features/authByUsername/model/selectors/getLoginError/getLoginError";
import DynamicMudleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { loginActions, loginReducer } from "features/authByUsername/model/slice/loginSlice";

export interface LoginFormProps {
  className?: string;
  onSuccess?: (() => void) | undefined;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

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

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess?.();
    }
  }, [onSuccess, dispatch, password, username]);

  return (
      <DynamicMudleLoader reducers={initialReducers} removeAfterUmnount>
          <div className={classNames(cls.loginForm, {}, [className])}>
              <Text title={t("Форма авторизации")} />
              {error && (
              <Text
            theme={TextTheme.ERROR}
            text={t("Вы ввели неверный логин или пароль")}
          />
        )}
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
        />
              <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
                  {t("Войти")}
              </Button>
          </div>
      </DynamicMudleLoader>
  );
});

export default LoginForm;
