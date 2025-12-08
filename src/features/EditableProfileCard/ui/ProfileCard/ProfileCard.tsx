import { useTranslation } from "react-i18next";
import cls from "./ProfileCard.module.scss";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import Text, { TextAlign, TextTheme } from "shared/ui/Text/Text";
import Input from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import Loader from "shared/ui/Loader/Loader";
import Avatar from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country } from "entities/Country";
import CountrySelect from "entities/Country/ui/CountrySelect/CountrySelect";
import VStack from "shared/ui/Stack/VStack/VStack";
import HStack from "shared/ui/Stack/HStack/HStack";
import { ValidateProfileError } from "../../model/consts/const";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  validateErrors?:ValidateProfileError[];
  readonly?: boolean;
  onChangeFistname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFistname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
  onChangeCountry,
  onChangeCurrency,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editing]: !readonly,
  };
  if (isLoading) {
    return (
      <HStack
        max
        justify={'center'}
        className={classNames(cls.profileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
    );
  }
  if (error) {
    return (
      <HStack justify={'center'} gap={'8'} max className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t("Произошла ошибка")}
          text={t("Попробуйте обновить страницу")}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  return (
    <VStack max className={classNames(cls.profileCard, mods, [className])}>
      {data?.avatar && (
        <div className={cls.avatarWraper}>
          <Avatar src={data?.avatar} />
        </div>
      )}
      <div>
        <Input
          value={data?.firstname}
          placeholder={t("Имя")}
          className={cls.input}
          onChange={onChangeFistname}
          readonly={readonly}
          data-testid={'ProfileCard.firstname'}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Фамилия")}
          className={cls.input}
          onChange={onChangeLastname}
          readonly={readonly}
          data-testid={'ProfileCard.lastname'}
        />
        <Input
          value={data?.age}
          placeholder={t("Возраст")}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
          numeric
          data-testid={'ProfileCard.age'}
        />
        <Input
          value={data?.city}
          placeholder={t("Город")}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
          data-testid={'ProfileCard.city'}
        />
        <Input
          value={data?.username}
          placeholder={t("Никнэйм")}
          className={cls.input}
          onChange={onChangeUsername}
          readonly={readonly}
          data-testid={'ProfileCard.nickname'}
        />
        <Input
          value={data?.avatar}
          placeholder={t("Аватар")}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
          data-testid={'ProfileCard.avatar'}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </VStack>
  );
};

export default ProfileCard;
