//var webpack = require('webpack');
const path = require('path');
module.exports = {
    //入口
    entry: './src/app.js',
    //出口
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出文件的保存路径
        filename: 'bundle.js' // 输出文件的名称
    },
    module: {
        rules: [

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }


        ]
    }
}