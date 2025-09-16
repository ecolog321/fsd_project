import { useTranslation } from "react-i18next";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
      <div className={classNames(cls.loginForm, {}, [className])}>
          <Input
        autoFocus
        placeholder={t("Введите логин")}
        className={cls.input}
      />
          <Input
        placeholder={t("Введите пароль")}
        className={cls.input}
      />
          <Button className={cls.loginBtn}>{t("Войти")}</Button>
      </div>
  );
};

export default LoginForm;
