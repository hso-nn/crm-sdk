var path = require("path"),
    webpack = require("webpack"),
    DEBUG = process.env.NODE_ENV !== "production",
    mode = DEBUG ? "development" : "production",
    dir_build = path.resolve(__dirname, "dist"),
    WebpackAutoInject = require("webpack-auto-inject-version"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

const postcssLoader = {
        loader: "postcss-loader",
        options: {
            plugins: function () {
                return [
                    require("autoprefixer")({
                        browsers: ["Android > 0","last 3 versions", "> 1%"]
                    }),
                    require("cssnano")({zindex: false})
                ];
            }
        }
    },
    scssLoaders = [DEBUG ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", postcssLoader, "sass-loader"],
    cssLoaders = [DEBUG ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", postcssLoader];

module.exports = {
    mode: mode,
    entry: {
        CRMSDK: [
            path.resolve(__dirname, "src/CRM-SDK.js")
        ],
        WebAPI: [
            path.resolve(__dirname, "src/webapi/WebAPI.js")
        ]
    },
    output: {
        path: dir_build,
        filename: "[name].js",
        // library: "[name]",
        libraryTarget: "this",
        // umdNamedDefine: true
    },
    resolve: {
        extensions: [".js", ".json", ".ts"]
    },
    devServer: {
        contentBase: dir_build,
        outputPath: dir_build
    },
    module: {
        rules: [{
            enforce: "pre",
            test: /\.js?$/,
            loader: "eslint-loader",
            options: {
                failOnWarning: false,
                failOnError: true
            },
            include: [
                path.resolve(__dirname, "./src")
            ],
            exclude: [
                path.resolve(__dirname, "./src/libs")
            ]
        },{
            loader: "babel-loader",
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "./src"),
                path.resolve(__dirname, "./tests")
            ],
            exclude: [
                path.resolve(__dirname, "./src/libs")
            ]
        }, {
            test: /\.json$/, loader: "json"
        }, {
            test: /\.scss$/, loader: scssLoaders
        }, {
            test: /\.css$/, loader: cssLoaders
        }, {
            test: /\.ts$/,
            enforce: "pre",
            use: [
                {
                    loader: "tslint-loader",
                    options: {
                        failOnWarning: false,
                        failOnError: true
                    }
                }
            ]
        }, {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/
        }]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: "locales/*", to: dir_build, context: "src/translation"}
        ]),
        new webpack.NoEmitOnErrorsPlugin(),
        new WebpackAutoInject({
            components: {
                AutoIncreaseVersion: false,
                InjectAsComment: false
            }
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.BannerPlugin("Customer Location [AIV]{version}[/AIV] | (c) HSO Innovation"),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name]/[name].css",
            chunkFilename: "[id].css",
        })
    ].concat(DEBUG ? [] : []),
    stats: {
        colors: true
    },
    devtool: mode === "development" ? "source-map" : false
};
