import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { FC, useEffect } from "react";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";
import { useStore } from "react-redux";

export type ReducersList = {
  // eslint-disable-next-line no-unused-vars
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUmnount: boolean;
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUmnount } = props;
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
    });

    return () => {
      if (removeAfterUmnount) {
        Object.entries(reducers).forEach(
          ([name]: ReducersListEntry) => {
            store.reducerManager.remove(name);
          }
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};

export default DynamicModuleLoader;
