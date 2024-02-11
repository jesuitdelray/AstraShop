module.exports = {
    verbose: true,
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    transformIgnorePatterns: ["/node_modules/(?!(swiper|ssr-window|dom7)/)"],
}
