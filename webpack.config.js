const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = (env, argv) => {

    return {
        mode: 'development',
        entry: {
            app: './src/index.tsx',
        },
        output: {
            path: path.resolve(__dirname, 'build'),
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.sass'],
        },
        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', {
                        loader: 'css-loader', options: {
                            modules: true
                        }
                    }, {loader: 'sass-loader'
                    }]
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new CleanWebpackPlugin()
        ],
        devServer: {
            port: 8080,
        }
    };
};