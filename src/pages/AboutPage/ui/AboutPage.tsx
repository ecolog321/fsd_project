import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const AboutPage = () => {
    const {t}=useTranslation('about')
    return (
      <Page data-testid={'AboutPage'}>
        {t('О сайтe')}
      </Page>
    );
};

export default AboutPage;