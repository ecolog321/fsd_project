import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileLoading } from "../../model/selectors/getProfileLoading/getProfileLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { fetchProfileData } from "../../model/services/fetchUserProfileData/fetchUserProfileData";
import { profileActions, profileReducers } from "../../model/slice/profileSlice";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import VStack from "shared/ui/Stack/VStack/VStack";
import ProfilePageHeader from "../../ui/ProfilePageHeader/ProfilePageHeader";
import Text from "shared/ui/Text/Text";
import ProfileCard from "../ProfileCard/ProfileCard";
import { ValidateProfileError } from "../../model/consts/const";
import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface IEditableProfileCardProps {
  className?: string;
  id: string;
}

const EditableProfileCard: FC<IEditableProfileCardProps> = memo(
  ({ className, id }) => {
    const { t } = useTranslation();

    const validateErrorTranslates = {
      [ValidateProfileError.SERVER_ERROR]: t("Ошибка при сохранении"),
      [ValidateProfileError.INCORRECT_USER_DATA]: t(
        "Имя и фамилия обязательны"
      ),
      [ValidateProfileError.INCORRECT_AGE]: t("Возраст должен быть числом"),
      [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректно указана страна"),
      [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
    };

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileValidateErrors);
    const readonly = useSelector(getProfileReadonly);

    useInitialEffect(() => {
      if (id) {
        dispatch(fetchProfileData(id));
      }
    });

    const initialReducers: ReducersList = {
      profile:profileReducers ,
    };

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
      <DynamicModuleLoader reducers={initialReducers}>
        <VStack className={className} gap={"16"} max>
          <ProfilePageHeader />
          {validateErrors?.length &&
            validateErrors.map((error) => (
              <Text
                data-testid={"EditableProfileCard.Error"}
                text={validateErrorTranslates[error]}
                key={error}
              />
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
        </VStack>
      </DynamicModuleLoader>
    );
  }
);

export default EditableProfileCard;
