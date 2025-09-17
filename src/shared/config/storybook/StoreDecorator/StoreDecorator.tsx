import { StoryFn } from "@storybook/react-webpack5";
import "../../../../app/styles/index.scss";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

export const StoreDecorator = (state:DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => {
  return (
      <StoreProvider>
              <StoryComponent />
      </StoreProvider>
  );
};
