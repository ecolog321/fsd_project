import { FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useNotifications } from "../../api/notificationsApi";
import VStack from "@/shared/ui/Stack/VStack/VStack";
import NotificationsItem from "../NotificationsItem/NotificationsItem";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";

export interface INotificationsListProps {
  className?: string;
}

export const NotificationsList: FC<INotificationsListProps> = memo(
  ({ className }) => {
    const { data, isLoading } = useNotifications(null, {
      pollingInterval:5000,
    });

    if (isLoading) {
      return (
        <VStack
          max
          gap={"8"}
          //className={classNames(cls.notificationsList, {}, [className])}
        >
          <Skeleton width={"100%"} border={"8px"} height={"80px"} />
          <Skeleton width={"100%"} border={"8px"} height={"80px"} />
          <Skeleton width={"100%"} border={"8px"} height={"80px"} />
        </VStack>
      );
    }
    return (
      <VStack
        gap={"8"}
        //className={classNames(cls.notificationsList, {}, [className])}
      >
        {data?.map((item) => (
          <NotificationsItem key={item.id} item={item} />
        ))}
      </VStack>
    );
  }
);
