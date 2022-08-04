const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about-me.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "about-me.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/kids.html",
      inject: true,
      chunks: ["index"],
      filename: "kids.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/offer.html",
      inject: true,
      chunks: ["index"],
      filename: "offer.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/start.html",
      inject: true,
      chunks: ["index"],
      filename: "start.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/more-to-know.html",
      inject: true,
      chunks: ["index"],
      filename: "more-to-know.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/new-life.html",
      inject: true,
      chunks: ["index"],
      filename: "new-life.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/opinions.html",
      inject: true,
      chunks: ["index"],
      filename: "opinions.html",
    }),    
    new HtmlWebpackPlugin({
      template: "./src/pages/outside.html",
      inject: true,
      chunks: ["index"],
      filename: "outside.html",
    }),   
      new HtmlWebpackPlugin({
      template: "./src/pages/portfolio.html",
      inject: true,
      chunks: ["index"],
      filename: "portfolio.html",
    }),    
    new HtmlWebpackPlugin({
      template: "./src/pages/artistic.html",
      inject: true,
      chunks: ["index"],
      filename: "artistic.html",
    }),   
     new HtmlWebpackPlugin({
      template: "./src/pages/waiting.html",
      inject: true,
      chunks: ["index"],
      filename: "waiting.html",
    }),   
     new HtmlWebpackPlugin({
      template: "./src/pages/women.html",
      inject: true,
      chunks: ["index"],
      filename: "women.html",
    }),    
    new HtmlWebpackPlugin({
      template: "./src/pages/prepare.html",
      inject: true,
      chunks: ["index"],
      filename: "prepare.html",
    }),
      new HtmlWebpackPlugin({
      template: "./src/pages/contact.html",
      inject: true,
      chunks: ["index"],
      filename: "contact.html",
    }),
        // new HtmlWebpackPlugin({
    //   template: "./src/pages/aboutme.html",
    //   inject: true,
    //   chunks: ["index"],
    //   filename: "aboutme.html",
    // }),
  ],
};
