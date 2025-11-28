export type BuildMode = "production" | "development"
export type BuildPaths = {
    entry: string;
    build:string,
    html:string,
    src:string,
    locales:string,
    buildLocales:string
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev:boolean;
    PORT:number;
    apiUrl:string;
    project : 'storybook' | 'dev' | 'jest'
}

export interface BuildEnv {
    mode:BuildMode;
    port:number;
    apiUrl:string;
  
}