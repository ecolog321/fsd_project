import Page from "./ui/Page";

export {Page}
export {getScrollByPath, getScrollSaved} from './model/selectors/scrollSaveSeletors'
export {scrollSaveActions, scrollSaveReducers} from './model/slices/scrollSaveSlice'
export type {ScrollSaveSchema} from './model/types/ScrollSaveSchema'