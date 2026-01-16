import { FC } from 'react';
import cls from './PageError.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames';
import Button from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface PageErrorProps {
    className?:string;
}
const PageError:FC<PageErrorProps> = ({className}) => {

    const {t}=useTranslation('common')

    const realodPage = ()=>{
        location.reload()
    }
    return (
      <div className={classNames(cls.pageError, {}, [className])}>
        <p>{t('Произошла ошибка')}</p>
        <Button onClick={realodPage}>
          {t('Обновить страницу')}
        </Button>
      </div>
    );
};

export default PageError;