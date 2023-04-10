import { BuildOptions } from "../types/config"

interface buildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean
}

export function buildBabelLoader({ isDev, isTsx }: buildBabelLoaderProps) {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["en", "ru"],
                            keyAsDefaultValue: true,
                            outputPath: "public/locales/{{locale}}/{{ns}}.json",
                        },
                    ],
                    ["@babel/plugin-transform-typescript", { isTsx }],
                    "@babel/plugin-transform-runtime",
                    isDev && require.resolve("react-refresh/babel"),
                ].filter(Boolean),
            },
        },
    }
}
