/**
 * Created by kanamars on 24/08/19.
 */
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
      filename: "main.js",
      path:path.resolve(__dirname, 'dist')
  }
};