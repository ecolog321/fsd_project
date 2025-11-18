import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import Text from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "features/editableProfileCard";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getUserAuthData } from "entities/User";
import HStack from "shared/ui/Stack/HStack/HStack";

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack justify={'between'} max className={classNames('', {}, [className])}>
      <Text title={t("Профиль")} />
      {canEdit && (
        <>
          {readonly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
            >
              {t("Редактировать")}
            </Button>
          ) : (
            <HStack gap={'16'}>
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onCancelEdit}
              >
                {t("Отменить")}
              </Button>
              <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onSave}
              >
                {t("Сохранить")}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  );
};

export default ProfilePageHeader;
