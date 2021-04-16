const path = require('path');
// importando o path do node para lidar com caminhos de arquivos que podem ser diferentes dependendo do SO
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                // basicamente que dizendo que toda vez que for usar um arquivo .js que não esteja na pasta node_modules, usa o babel-loader
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};