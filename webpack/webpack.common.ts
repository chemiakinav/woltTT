// import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import miniCss from 'mini-css-extract-plugin';
import * as path from 'path';
import * as webpack from 'webpack';

const root = path.resolve(__dirname, '../');
const source = path.resolve(root, 'src');
const styles = path.resolve(source, 'styles');

const config: webpack.Configuration = {
	entry: path.resolve(source, 'index.tsx'),
	output: {
		path: path.resolve(root, 'dist'),
		filename: 'main.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.svg$/,
				type: 'asset/source',
			},
			{
				test: /\.(s*)css$/,
				exclude: [/node_modules/, [path.resolve(styles, 'global.scss')]],
				use: [
					{
						loader: miniCss.loader,
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: { localIdentName: '[path][local]' },
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							sassOptions: {
								includePaths: [styles],
							},
						},
					},
				],
			},
			{
				test: /\.s?css$/,
				include: [path.resolve(styles, 'global.scss')],
				use: [
					{
						loader: miniCss.loader,
						options: {
							esModule: false,
						},
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: false,
							importLoaders: 1,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: [styles],
							},
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.scss'],
		modules: [path.resolve(root, 'src'), 'node_modules'],
		preferRelative: true,
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(root, 'public/index.html'),
		}),
		new miniCss({
			filename: 'style.css',
		}),
	],
};

export default config;
