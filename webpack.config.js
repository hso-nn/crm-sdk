var path = require("path"),
    webpack = require("webpack"),
    DEBUG = process.env.NODE_ENV !== "production",
    dir_build = path.resolve(__dirname, "dist"),
    WebpackAutoInject = require("webpack-auto-inject-version");

module.exports = {
    entry: {
        CRMSDK: [
            "babel-polyfill",
            path.resolve(__dirname, "src/CRM-SDK.js")
        ],
        "CRMSDK.noBabelPolyflll": [
            path.resolve(__dirname, "src/CRM-SDK.js")
        ],
        "CRMSDK.slim": [
            "babel-polyfill",
            path.resolve(__dirname, "src/webapi/WebAPI.js")
        ],
        "CRMSDK.slim.noBabelPolyfill": [
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
