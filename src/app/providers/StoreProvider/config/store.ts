import {
  configureStore,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducers } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { $api, getApi } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducers,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as unknown as ReducersMapObject<StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: getApi(),
            navigate,
          },
        },
      }),
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
