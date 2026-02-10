import { getArticlesPageView } from "./model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "./model/services/fetchArticlesList";
import { articlesPageActions } from "./model/slice/articlesPageSlice";

export { ArticlePageAsync as ArticlePage } from "./ui/ArticlesPage/ArticlePage.async";

export { articlesPageActions, getArticlesPageView, fetchArticlesList };

export type { ArticlesPageSchema } from "./model/types/articlesPageSchema";
