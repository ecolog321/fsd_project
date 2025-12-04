import ArticleDetails from "./ui/ArticleDetails/ArticleDetails";
import ArticleList from "./ui/ArticleList/ArticleList";
import { ArticleDetailsSchema } from "./model/types/articleDetailsSchema";
import { Article } from "./model/types/article";
import ArticleViewSelector from "./ui/ArticleViewSelector/ArticleViewSelector";

export { getArticleDetailsData } from "./model/selectors/articleDetails";
export { ArticleDetails, ArticleList, ArticleViewSelector };
export { ArticleView, ArticleType } from "./model/consts/const";
export type { Article, ArticleDetailsSchema };
