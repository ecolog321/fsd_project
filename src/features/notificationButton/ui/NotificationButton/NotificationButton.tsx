import { Popover } from "shared/ui/Popups";
import cls from "./NotificationButton.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Icon from "shared/ui/Icon/Icon";
import { NotificationsList } from "entities/Notifications";
import NoticeImg from "shared/assets/icons/notice.svg";
import { useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Drawer } from "shared/ui/Drawer/Drawer";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = ({ className }: NotificationButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={onOpen} theme={ButtonTheme.CLEAR}>
      <Icon Svg={NoticeImg} />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover
          className={className}
          direction={"bottom left"}
          trigger={trigger}
        >
          <NotificationsList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer onClose={onClose} isOpen={isOpen}>
          <NotificationsList />
        </Drawer>
      </MobileView>
    </div>
  );
};
