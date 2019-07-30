const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const DashboardPlugin = require('webpack-dashboard/plugin');


const ENTRY_POINTS = {
    index: ['./example'],
    option: ['./src/project_option/project_option.js'], // just to compile styles
    alternate: ['./src/project_alternate/project_alternate.js'] // just to compile styles
};
// Output config
const OUTPUT_CONFIG = {
    // A filename pattern for the output files
    filename: '[name].js',
    // An absolute path to the desired output directory.
    path: path.resolve(__dirname, 'example/__dist__'),
    publicPath: '/__dist__/'
};

module.exports = merge(common, {
    mode: 'development',
    entry: ENTRY_POINTS,
    output: OUTPUT_CONFIG,
    plugins: [
        new DashboardPlugin()
    ],
    devServer: {
        contentBase: './example',
        port: 8080,
        open: true
    }
});
