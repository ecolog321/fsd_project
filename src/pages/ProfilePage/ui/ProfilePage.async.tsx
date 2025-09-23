import { lazy } from "react";

export const ProfilePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-expect-error
                resolve(import ("./ProfilePage"));
            }, 1000);
        })
);
