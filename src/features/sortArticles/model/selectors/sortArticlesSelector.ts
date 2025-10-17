import { StateSchema } from "app/providers/StoreProvider";
import { ArticleType } from "entities/Article";

export const getOrderArticles = (state:StateSchema)=>state.sortArticles?.order
export const getSortArticles = (state:StateSchema)=>state.sortArticles?.sort
export const getSearchArticles = (state:StateSchema)=>state.sortArticles?.search
export const getTypeArticles = (state:StateSchema)=>state.sortArticles?.type ?? ArticleType.ALL