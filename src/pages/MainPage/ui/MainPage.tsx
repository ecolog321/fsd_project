import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";
import { Rating } from "@/entities/Rating";

const MainPage = () => {
  const { t } = useTranslation("common");
  return (
    <Page>
      <div>{t("Главная")}</div>
      <Rating
        title="Оцените статью"
        feedbackTitle="Оставьте отзыв"
        hasFeedback
      />
    </Page>
  );
};

export default MainPage;
