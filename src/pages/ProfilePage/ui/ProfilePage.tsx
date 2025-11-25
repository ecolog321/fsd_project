import cls from "./ProfilePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "widgets/Page";
import EditableProfileCard from "features/editableProfileCard/ui/EditableProfileCard/EditableProfileCard";
import { useParams } from "react-router-dom";
import Text from "shared/ui/Text/Text";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <Text text={`Профиль не найден`} />;
  }
  return (
    <Page className={classNames(cls.ProfilePage, {}, [className])}>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
