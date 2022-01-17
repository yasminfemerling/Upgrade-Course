const path = require('path');

module.exports = {
    entry:'./src/chart-element.ts',
    module:{
        rules:[
            {
            test: /\.ts$/,
            use:'ts-loader',
            include:[path.resolve(__dirname,'src')]
            }
        ]
    },
    output:{
        filename: 'bundle.js',
        path:path.resolve(__dirname,'public')
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    }
}