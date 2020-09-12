/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const JS_RULES = {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    options: {
        presets: [
            '@babel/preset-react',
            '@babel/preset-env',
        ],
        plugins: [
            [
                '@babel/plugin-transform-runtime',
                {
                    corejs: 2,
                },
            ],
            '@babel/plugin-proposal-object-rest-spread',
        ],
    },
    exclude: {
        test: /node_modules\/(?!@cdg.*)/,
    },
};

const SCSS_RULES = {
    test: /\.scss$/,
    use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'postcss-loader', options: { sourceMap: true } },
        { loader: 'sass-loader', options: { sourceMap: true } },
    ],
};

const IMAGES_RULES = {
    test: /\.(png|gif|jpg)/,
    use: {
        loader: 'url-loader',
        options: {
            limit: 10000,
            name: '[name].[ext]',
        },
    },
};

const SVG_RULES = {
    test: /\.(svg)/,
    use: [
        {
            loader: 'babel-loader',
        },
        {
            loader: '@svgr/webpack',
        },
    ],
};

module.exports = {
    module: {
        rules: [
            JS_RULES,
            SCSS_RULES,
            IMAGES_RULES,
            SVG_RULES,
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new DuplicatePackageCheckerPlugin(),
    ],
    devtool: 'source-map',
};
