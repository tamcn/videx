module.exports = {
  mode: 'development',
  entry: '',
  output: {
    filename: "client.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          "awesome-typescript-loader"
        ]
      }
    ]
  },
  plugins: [

  ]
}
