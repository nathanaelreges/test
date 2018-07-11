const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry: './src/app.js',
   output: {
      path: __dirname + '/.././dist',
      filename: 'bundle.js'
   },
   mode: 'production',
   module: {
      rules: [{
         test: /\.scss$/,
         use:[{
            loader: MiniCssExtractPlugin.loader
         },
         {
            loader: 'css-loader'// translates CSS into CommonJS
         },
         { 
            loader: 'sass-loader',// compiles Sass to CSS
            options: {
               outputStyle: 'compressed'
            } 
         }]
      }]
   },
   plugins: [
      new MiniCssExtractPlugin({
         // Options similar to the same options in webpackOptions.output
         // both options are optional
         path: __dirname + '/.././dist',
         filename: "styles.css"
      })
   ]
}