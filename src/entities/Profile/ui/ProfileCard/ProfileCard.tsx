import { useTranslation } from "react-i18next";
import cls from "./ProfileCard.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { getProfileData } from "entities/Profile/modal/selectors/getProfileData/getProfileData";
import { useSelector } from "react-redux";
import { getProfileLoading } from "entities/Profile/modal/selectors/getProfileLoading/getProfileLoading";
import Text from "shared/ui/Text/Text";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;
}

const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileLoading);

  return (
      <div className={classNames(cls.ProfileCard, {}, [className])}>
          <div className={cls.header}>
              <Text title={t("Профиль")} />
              <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>{t("Редактировать")}</Button>
          </div>
          <div className={cls.data}>
              <Input
          value={data?.firstname}
          placeholder={t("Ваше имя")}
          className={cls.input}
               />
              <Input
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
          className={cls.input}
                />
          </div>
      </div>
  );
};

export default ProfileCard;
