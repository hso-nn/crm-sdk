var path = require("path"),
    webpack = require("webpack"),
    DEBUG = process.env.NODE_ENV !== "production",
    dir_build = path.resolve(__dirname, "dist");

module.exports = {
    entry: {
        CRMSDK: [
            "babel-polyfill",
            path.resolve(__dirname, "src/CRM-SDK.js")
        ],
        "CRMSDK.slim": [
            "babel-polyfill",
            path.resolve(__dirname, "src/webapi/WebAPI.js")
        ]
    },
    output: {
        path: dir_build,
        filename: "[name].js",
        library: "CRMSDK",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    resolve: {
        extensions: ["", ".js", ".json"]
    },
    devServer: {
        contentBase: dir_build,
        outputPath: dir_build
    },
    module: {
        preLoaders: [
            {
                test: /\.js?$/, loader: "eslint",
                exclude: [
                    path.resolve(__dirname, "./src/libs"),
                ],
                include: [
                    path.resolve(__dirname, "./src"),
                    path.resolve(__dirname, "./tests")
                ]
            }
        ],
        loaders: [{
            loader: "babel-loader",
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "./src"),
                path.resolve(__dirname, "./tests")
            ]
        }, {
            test: /\.json$/, loader: "json"
        }]
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ].concat(DEBUG ? [] : [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            minimize: true,
            mangle: {
                keep_fnames: true
            }
        })
    ]),
    stats: {
        colors: true
    },
    devtool: "source-map"
};
