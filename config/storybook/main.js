module.exports = {
    stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    staticDirs: ["../../public"],
    framework: "@storybook/react",
    core: {
        builder: "webpack5",
    },
    webpackFinal: config => {
        config.resolve.fallback = {
            fs: false,
            tls: false,
            net: false,
            module: false,
            path: require.resolve("path-browserify"),
        }

        return config
    },
}
