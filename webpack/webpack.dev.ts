import 'webpack-dev-server';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import * as webpack from 'webpack';
import { merge } from 'webpack-merge';

import common from './webpack.common';

const config: webpack.Configuration = merge(common, {
	devServer: {
		hot: 'only',
		historyApiFallback: true,
	},
	mode: 'development',
	plugins: [...(common.plugins ?? []), new ReactRefreshWebpackPlugin()],
});

export default config;
