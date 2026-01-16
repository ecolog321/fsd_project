import {
  configureStore,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducers } from "@/entities/User";
import { createReducerManager } from "./reducerManager";
import { getApi } from "@/shared/api/api";
import { scrollSaveReducers } from "@/widgets/Page";
import { rtkApi } from "@/shared/api/rtkApi";


export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,

) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducers,
    scrollSave:scrollSaveReducers,
    [rtkApi.reducerPath]:rtkApi.reducer,
    ...asyncReducers
  } as ReducersMapObject<StateSchema>;

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
          },
        },
      }).concat(rtkApi.middleware),
  });
   
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
