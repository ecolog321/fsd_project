import { useTranslation } from "react-i18next";
import cls from "./ProfilePage.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { fetchProfileData, ProfileCard, profileReducers } from "entities/Profile";
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

interface ProfilePageProps {
  className?: string;
}

const reducers:ReducersList= {
    profile:profileReducers
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const{ t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchProfileData())
    },[dispatch])

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUmnount>
          <div className={classNames(cls.ProfilePage, {}, [className])}>
              <ProfileCard/>
          </div>
      </DynamicModuleLoader>
      
  );
};

export default ProfilePage;