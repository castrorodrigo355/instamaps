module.exports = {
    entry: './src/app/index.js',
    output: {
      path: __dirname + '/src/public/js',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          use: ['style-loader', 'css-loader'],
          test: /\.css$/
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        } 
      ]
    }
  };