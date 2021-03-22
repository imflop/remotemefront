import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';


const config: webpack.Configuration = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    devtool: 'inline-source-map',
    watchOptions: {
        ignored: /node_modules/,
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
    ],
    module: {
        rules: [
            {
                // JS
                test: /\.([jt])sx?$/,
                include: path.resolve(__dirname, 'src'),
                use: "babel-loader",
            },
            {
                // Styles
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', "sass-loader"],
            },
            {
                // Images
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                // Fonts
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        publicPath: '/'
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                },
            },
        },
    },
};

export default config;