import { ReduxStoreWithManager, StateSchemaKey } from "@/app/providers/StoreProvider";
import { FC, ReactNode, useEffect } from "react";

import { Reducer } from "@reduxjs/toolkit";
import { useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};


interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  children:ReactNode;
  removeAfterUmnount?: boolean;
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUmnount = true } = props;
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
    });

    return () => {
      if (removeAfterUmnount) {
        Object.entries(reducers).forEach(
          ([name]) => {
            store.reducerManager.remove(name as StateSchemaKey);
          }
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};

export default DynamicModuleLoader;
