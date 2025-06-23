import { BuildOptions } from "./types/config";
import type { Configuration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): Configuration {
    return {
        port: options.PORT,
        open:true
    }
}