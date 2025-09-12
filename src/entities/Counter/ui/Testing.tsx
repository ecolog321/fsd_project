import cls from "./Testing.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';

interface TestingProps {
  className?: string;
}

const Testing = ({ className }: TestingProps) => {
  return (
      <div className={classNames(cls.Testing, {}, [className])}>
      
      </div>
  );
};

export default Testing;