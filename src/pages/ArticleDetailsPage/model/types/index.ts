import { ArticleDetailsCommentsSchema } from "./ArticleDetailsCommentSchema";
import { ArticleDetailsRecommendsSchema } from "./ArticleDetailsRecommendations";

export interface ArticleDetailsPageSchema {
    comments:ArticleDetailsCommentsSchema;
    recommendations:ArticleDetailsRecommendsSchema;
}