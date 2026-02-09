import Card from "@/shared/ui/Card/Card";
import cls from "./RatingCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import VStack from "@/shared/ui/Stack/VStack/VStack";
import Text from "@/shared/ui/Text/Text";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { memo, useCallback, useState } from "react";
import Modal from "@/shared/ui/Modal/Modal";
import Input from "@/shared/ui/Input/Input";
import HStack from "@/shared/ui/Stack/HStack/HStack";
import Button from "@/shared/ui/Button/Button";
import { BrowserView, MobileView } from "react-device-detect";
import { Drawer } from "@/shared/ui/Drawer/Drawer";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?:number;
}

export const RatingCard = memo(
  ({
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onAccept,
    onCancel,
    rate
  }: RatingCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate ? rate : 0);
    const [feedback, setFeedback] = useState("");


    const onSelectStars = useCallback(
      (selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
          setIsModalOpen(true);
        } else {
          onAccept?.(selectedStarsCount);
        }
        setIsModalOpen(true);
      },
      [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
      setIsModalOpen(false);
      onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
      setIsModalOpen(false);
      setStarsCount(0)
      onCancel?.(starsCount)
    }, [onCancel, starsCount]);

    const modalContent = (
      <VStack max gap="32">
        <Text title={starsCount ? 'Спасибо за оценку!': title} />
        <Text text={feedbackTitle} />
        <Input value={feedback} onChange={setFeedback} placeholder="Ваш отзыв" />
        <HStack max gap="16" justify="end">
          <Button onClick={cancelHandle}>{"Закрыть"}</Button>
          <Button onClick={acceptHandle}>{"Отправить"}</Button>
        </HStack>
      </VStack>
    );

    return (
      <Card max className={classNames(cls.Rating, {}, [className])}>
        <VStack align="center" gap="8">
          <Text title={title} />
          <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
        </VStack>
        <BrowserView>
          <Modal isOpen={isModalOpen} lazy>
            {modalContent}
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
            {modalContent}
          </Drawer>
        </MobileView>
      </Card>
    );
  },
);
