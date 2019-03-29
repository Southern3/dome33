let path = require('path');
// 处理css文件分离
let miniCssExtractPlugin = require('mini-css-extract-plugin');

//处理html文件
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//环境模式
	// mode: 'development', //开发环境
	mode: 'production', //生产环境

	entry: {
		app: './app/app.js',
		home: './app/home.js'
	},

	output: {
		path: path.resolve(__dirname, '../public'),
		filename: '[name].js'
	},

	module: {
		//配置loader
		rules: [
			//css-loader
			{
				//匹配文件后缀
				test: /\.css$/,
				//使用 css-loader
				use: [
					//css和js混合时，需要 style-loader
					// {loader: 'style-loader'},
					//分离css loader
					{loader: miniCssExtractPlugin.loader},
					{loader: 'css-loader'}
				]
			},
			//less-loader
			{
				//匹配文件后缀
				test: /\.less$/,
				//less-loader
				use: [
					//css和js混合时，需要 style-loader
					// {loader: 'style-loader'},
					//分离less编译后的css文件
//					{loader: miniCssExtractPlugin.loader},
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'less-loader'}
				]
			},
			
			// 图片
			{
				test:/\.(png|gif|jpg|jpeg)/,
				use:[
					{
						loader:'url-loader',
						options:{
							//将图片转换为base64大小范围, 单位B
							limit:10000
						}
					}
				]
			},

			{
				test:/\.html?$/,
				use:[
					{loader:'html-withimg-loader'}
				]
			}

// rules
		]
		
// module
	},
	
	// 配置插件
	plugins:[
		new miniCssExtractPlugin({
			filename: '[name].min.css'
		})
		
		// 处理html文件插件
//		new htmlWebpackPlugin({
//			// html文件路径
//			template:'./index.html',
//			//将打包后的脚本注入在 head 或者 body 或者 移除脚本
//			inject: true,
//			// html压缩配置
//			minify:{
//				//移除注释
//				removeComments: true,
//				//移除标签属性的引号
//				removeAttributeQuotes: true,
//				//合并空白字符
//				collapseWhitespace: true
//			}
////			filename:'production_app.html'
//		})
		
	]
	
// module.export	
}
