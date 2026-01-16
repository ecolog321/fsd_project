import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const AdminPanelPage = () => {
    const {t}=useTranslation('about')
    return (
      <Page>
        {t('Панель администратора')}
      </Page>
    );
};

export default AdminPanelPage;