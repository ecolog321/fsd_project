import { Decorator, StoryFn } from "@storybook/react-webpack5";
import "../../../../app/styles/index.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n/i18n";
import { Suspense } from "react";

export const TranslationDecorator: Decorator = (Story, context) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="">
        <Story />
      </Suspense>
    </I18nextProvider>
  );
};
