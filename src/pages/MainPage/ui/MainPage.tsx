import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";


const MainPage = () => {
  const {t}=useTranslation()
  return (
    <Page>
      <div>{t('Главеая страница')}</div>;
    </Page>
  );
};

export default MainPage;
