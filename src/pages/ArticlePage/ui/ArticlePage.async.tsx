import { lazy } from "react";

export const ArticlePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-expect-error
                resolve(import ("./ArticlePage"));
            }, 1000);
        })
);
