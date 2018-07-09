module.exports = {
   entry: './src/app.js',
   output: {
       path: __dirname + '/.././dist',
       filename: 'bundle.js'
   },
   mode: "development",
   devServer: {
       contentBase: './dist'
   },
   module: {
      rules: [{
         test: /\.scss$/,
         use:[
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
         ]
      },{
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
   }
}