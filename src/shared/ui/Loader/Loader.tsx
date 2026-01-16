import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Loader.module.scss'
import { FC } from 'react';

interface LoaderProps {
    className?:string;
}

const Loader:FC<LoaderProps> = ({className}) => {
    return (
      <span className={classNames(cls.loader, {}, [className])}></span>
    );
};

export default Loader;