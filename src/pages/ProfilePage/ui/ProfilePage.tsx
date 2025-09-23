import { useTranslation } from "react-i18next";
import cls from "./ProfilePage.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducers } from "entities/Profile";

interface ProfilePageProps {
  className?: string;
}

const reducers:ReducersList= {
    profile:profileReducers
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const{ t } = useTranslation();
  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUmnount>
          <div className={classNames(cls.ProfilePage, {}, [className])}>
              {t('Страница пользователя')}
          </div>
      </DynamicModuleLoader>
      
  );
};

export default ProfilePage;