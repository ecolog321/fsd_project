import { useTranslation } from "react-i18next";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { useDispatch, useSelector, useStore } from "react-redux";
import { memo, useCallback, useEffect } from "react";
import {
  loginActions,
  loginReducer,
} from "features/AuthByUsername/model/slice/loginSlice";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import Text, { TextTheme } from "shared/ui/Text/Text";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { getLoginUsername } from "features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginLoading } from "features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading";
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError/getLoginError";
import DynamicMudleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;
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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

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
