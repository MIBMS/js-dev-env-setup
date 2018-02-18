/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle'));

webpack(webpackConfig).run((err) => {
    if (err){
        console.log(chalk.red(err));
        return 1;
    }
    return 0;
})