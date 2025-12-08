import { Popover } from "shared/ui/Popups";
import cls from "./NotificationButton.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Icon from "shared/ui/Icon/Icon";
import { NotificationsList } from "entities/Notifications";
import NoticeImg from "shared/assets/icons/notice.svg";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = ({ className }: NotificationButtonProps) => {
  return (
    <Popover
      className={className}
      direction={"bottom left"}
      trigger={
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NoticeImg} />
        </Button>
      }
    >
      <NotificationsList className={cls.notifications} />
    </Popover>
  );
};
