import { useEffect, useState } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import Button from "shared/ui/Button/Button";
import cls from "./ButButton.module.scss";

interface ButButtonPropsProps {
  className?: string;
}

function BugButton({ className }: ButButtonPropsProps) {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      className={classNames(cls.ButButton, {}, [className])}
      onClick={onThrow}
    >
      throw error
    </Button>
  );
}

export default BugButton;
