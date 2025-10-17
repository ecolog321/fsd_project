/* eslint-disable no-unused-vars */
import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleType} from "entities/Article";


export interface SortArticlesSchema extends EntityState<Article> {
    order:SortOrder;
    sort:ArticleSortFeild;
    search:string;
    type?:ArticleType
}

export type SortOrder = 'asc' | 'desc';

export enum ArticleSortFeild {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt'
}