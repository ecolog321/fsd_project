import { ReducersMapObject } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { ReactNode, Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "@/shared/config/i18n/i18nForTest";
import Loader from "@/shared/ui/Loader";

interface componentRednderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export function componentRender(
  component: ReactNode,
  options: componentRednderOptions = {},
) {
  const { route = "/", initialState, asyncReducers } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          <Suspense fallback={<Loader />}>{component}</Suspense>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
}
