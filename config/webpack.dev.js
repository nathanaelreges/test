module.exports = {
   entry: './src/app.js',
   output: {
       path: __dirname + '/.././dist',
       filename: 'bundle.js'
   },
   mode: "development",
   module: {
      rules: [{
         test: /\.scss$/,
         use:[
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
         ]
      }]
   }
}