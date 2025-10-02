import cls from "./ProfilePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ProfileCard } from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducers,
  ValidateProfileError,
} from "features/EditableProfileCard";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import Text from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducers,
};

const ProfilePage = ({ className }: ProfilePageProps) =>{
  const {t}=useTranslation();
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const validateErrors = useSelector(getProfileValidateErrors);
  const readonly = useSelector(getProfileReadonly);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка при сохранении'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.INCORRECT_AGE]: t('Возраст должен быть числом'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректно указана страна'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
  }

  useEffect(() => {
    if (__PROJECT__!=='storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || "" }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch]
  );
  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );
  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );
  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUmnount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length &&
          validateErrors.map((error) => (
            <Text text={validateErrorTranslates[error]} key={error} />
          ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFistname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
