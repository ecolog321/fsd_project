import { StoryFn } from "@storybook/react-webpack5";
import "../../../../app/styles/index.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18n";
import { Suspense } from "react";

export const TranslationDecorator = (StoryComponent: StoryFn) => {
  return (
      <I18nextProvider i18n={i18n}>
          <Suspense fallback="">
              <StoryComponent />
          </Suspense>
      </I18nextProvider>
  );
};
