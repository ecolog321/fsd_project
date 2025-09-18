import { StoryFn } from "@storybook/react-webpack5";
import "../../../../app/styles/index.scss";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const defualtReducers :DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm:loginReducer
}

export const StoreDecorator = (
  state:DeepPartial<StateSchema>, 
  asyncReducers?:DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: StoryFn) => {
  return (
      <StoreProvider initialState={state as StateSchema} asyncReducers={{...defualtReducers, ...asyncReducers}}>
          <StoryComponent />
      </StoreProvider>
  );
};
