import cls from "./StarRating.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import StarIcon from "@/shared/assets/icons/star.svg";
import Icon from "../Icon/Icon";
import { useState } from "react";

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = ({
  className,
  onSelect,
  size = 30,
  selectedStars = 0,
}: StarRatingProps) => {
  const [currentStarCount, setCurrentStarCount] = useState(0);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarCount(starsCount);
      setIsSelected(true);
    }
  };

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarCount(starsCount);
    }
  };
  const onLeave = () => () => {
    if (!isSelected) {
      setCurrentStarCount(0);
    }
  };

  return (
    <div className={classNames(cls.starRating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          className={classNames(
            cls.startIcon,
            {
              [cls.selected]: isSelected,
            },
            [currentStarCount>=starNumber ? cls.hovered : cls.normal],
          )}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
};
