import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NotificationsItem.module.scss";
import { Notification } from "../../model/types/notifications";
import Card, { CardTheme } from "@/shared/ui/Card/Card";
import Text, { TextSize } from "@/shared/ui/Text/Text";

export interface INotificationsItemProps {
  className?: string;
  item: Notification;
}

const NotificationsItem: FC<INotificationsItemProps> =
  ({ className, item }) => {
    const content = (
      <Card
        theme={CardTheme.OUTLINED}
        className={classNames(cls.notificationsItem, {}, [className])}
      >
        <Text size={TextSize.S} title={item.title} text={item.description} />
      </Card>
    );

    if (item.href) {
      return <a target="_blank" className={cls.link} href={item.href}>{content}</a>;
    }
    return content;
  }

export default NotificationsItem;
