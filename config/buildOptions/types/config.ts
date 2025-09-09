export type BuildMode = "production" | "development"
export type BuildPaths = {
    entry: string;
    build:string,
    html:string,
    src:string
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev:boolean;
    PORT:number
}

export interface BuildEnv {
    mode:BuildMode;
    port:number;
}