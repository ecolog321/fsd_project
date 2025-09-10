import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ButtonTheme } from "shared/ui/Button/Button";


interface LangSwitcher {
    className?:string;
    short?:boolean;
}

function LangSwitcher({className, short}: LangSwitcher) {
    const {t, i18n} = useTranslation()

    const toogle = async ()=>{
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

   return (
    <Button
      type="button"
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toogle}
    >
      {t(short ? 'Короткий язык' : 'Длинный язык')}
    </Button>
  );
};

export default LangSwitcher;
