import { Decorator } from "@storybook/react";
import "../../../../app/styles/index.scss";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { loginReducer } from "@/features/authByUsername/model/slice/loginSlice";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducers } from "@/features/editableProfileCard";
import { articleDetailsReducers } from "@/entities/Article/model/slice/articleDetailsSlice";
import { addCommentFormReducers } from "@/features/addCommentForm/model/slice/addCommentFormSlice";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/model/slice";

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