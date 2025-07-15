import { FC } from 'react';
import cls from './PageError.module.scss'
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import Button from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?:string;
}
const PageError:FC<PageErrorProps> = ({className}) => {

    const realodPage = ()=>{
        location.reload()
    }
    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>Произошла непредвиденная ошибка</p>
            <Button onClick={realodPage}>
                Обновить страницу
            </Button>
        </div>
    );
};

export default PageError;