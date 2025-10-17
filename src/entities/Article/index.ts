import ArticleDetails from "./ui/ArticleDetails/ArticleDetails";
import ArticleList from "./ui/ArticleList/ArticleList";
import {ArticleDetailsSchema} from './model/types/articleDetailsSchema'
import {Article, ArticleView, ArticleType} from './model/types/article'
import ArticleViewSelector from "./ui/ArticleViewSelector/ArticleViewSelector";

export {getArticleDetailsData} from './model/selectors/articleDetails'
export {ArticleDetails, Article,ArticleView, ArticleType, ArticleDetailsSchema, ArticleList, ArticleViewSelector}