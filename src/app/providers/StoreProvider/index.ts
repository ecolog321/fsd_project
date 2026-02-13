import StoreProvider from "./ui/StoreProvider";
import {createReduxStore, AppDispatch} from "./config/store";
import type {StateSchema, StateSchemaKey} from './config/StateSchema'
import { ReduxStoreWithManager, ThunkExtraArg, ThunkConfig } from "./config/StateSchema";


export {StoreProvider, createReduxStore}
export type {AppDispatch, ReduxStoreWithManager, ThunkConfig, ThunkExtraArg,StateSchema,StateSchemaKey}

