import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducers } from "entities/User";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(initialState?: StateSchema, asyncReducers?:ReducersMapObject<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducers,
  
  };

  const reducerManager = createReducerManager(rootReducers);

  const store=configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

// @ts-expect-error 1233
  store.reducerManager= reducerManager;

  return store;
}


export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];