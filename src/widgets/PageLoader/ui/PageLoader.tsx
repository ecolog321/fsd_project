import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss'
import { FC } from 'react';
import Loader from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
    className?:string;
}

const PageLoader:FC<PageLoaderProps> = ({className}) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
          <Loader/>
        </div>
    );
};

export default PageLoader;