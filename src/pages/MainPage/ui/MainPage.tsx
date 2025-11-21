import { useTranslation } from "react-i18next";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Listbox } from "shared/ui/ListBox/ListBox";
import { Page } from "widgets/Page";


const MainPage = () => {
  const {t}=useTranslation('common')
  return (
    <Page>
      <div>{t('Главная')}</div>
      <Listbox defaultValue="ВЫберите значение" value={undefined} onChange={(value:string)=>{}} items={[
        {value:'1', content:'1'},
        {value:'2', content:'2', disabled:true},
        {value:'3', content:'3'}
      ]}/>
    </Page>
  )
};

export default MainPage;
