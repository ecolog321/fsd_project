import { StoryFn } from "@storybook/react-webpack5";
import "../../../../app/styles/index.scss";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducers } from "features/editableProfileCard";
import { articleDetailsReducers } from "entities/Article/model/slice/articleDetailsSlice";
import { articleDetailsCommentsReducers } from "pages/ArticleDetailsPage/model/slice/articleDetailsCommentSlice";
import { addCommentFormReducers } from "features/addCommentForm/model/slice/addCommentFormSlice";

const defualtReducers :ReducersList = {
  loginForm:loginReducer,
  profile:profileReducers,
  articleDetails:articleDetailsReducers,
  addCommentForm:addCommentFormReducers,
  articleDetailsComments:articleDetailsCommentsReducers
}

export const StoreDecorator = (
  state:DeepPartial<StateSchema>, 
  asyncReducers?:ReducersList
) => (StoryComponent: StoryFn) => {
  return (
      <StoreProvider initialState={state as StateSchema} asyncReducers={{...defualtReducers, ...asyncReducers}}>
          <StoryComponent />
      </StoreProvider>
  );
};
