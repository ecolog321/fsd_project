

import { Decorator } from "@storybook/react";
import "../../../../app/styles/index.scss";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { articleDetailsReducers } from "@/entities/Article/testing";
import { addCommentFormReducers } from "@/features/addCommentForm/testing";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/testing";
import { loginReducer } from "@/features/authByUsername/testing";
import { profileReducers } from "@/features/editableProfileCard/testing";


const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducers,
  articleDetails: articleDetailsReducers,
  addCommentForm: addCommentFormReducers,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator: Decorator = (Story, context) => {
  const { initialState, asyncReducers } = context.parameters?.store || {};
  
  return (
    <StoreProvider
      initialState={initialState as StateSchema}
      asyncReducers={{ ...defaultReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
};