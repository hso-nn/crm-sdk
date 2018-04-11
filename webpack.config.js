var path = require("path"),
    webpack = require("webpack"),
    DEBUG = process.env.NODE_ENV !== "production",
    dir_build = path.resolve(__dirname, "dist"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    WebpackAutoInject = require("webpack-auto-inject-version");

module.exports = {
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
        library: "[name]",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    resolve: {
        extensions: [".js", ".json"]
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
                path.resolve(__dirname, "./src"),
                path.resolve(__dirname, "./tests")
            ]
        },{
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
        new webpack.BannerPlugin("crm-sdk [AIV]{version}[/AIV] | (c) Dynamics Software | MIT license - https://github.com/dys-solutions/crm-sdk/blob/develop/LICENSE")
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
