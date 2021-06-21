const path = require("path")

module.exports = [
    {
        output: {
            filename: 'shopify-template-checker.js',
            path: path.resolve(__dirname, 'dist'),
            library: ["ShopifyTemplateChecker"],
        },
        name: 'index',
        entry: './src/index.js',
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    }
];