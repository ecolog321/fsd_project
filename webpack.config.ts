import path from 'path'
import { buildWebpackConfig } from './config/buildOptions/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/buildOptions/types/config'



export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }
    const mode = env.mode || 'development'
    const PORT = env.port || 3001
    const isDev = mode === 'development'
    const apiUrl = env.apiUrl || 'http://localhost:8000'

    const config =
        module.exports = buildWebpackConfig({
            mode,
            paths,
            isDev,
            PORT,
            apiUrl,
            project:'frontend'
        })

    return config;
};