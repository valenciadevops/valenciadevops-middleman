module.exports = {
  entry: {
    site: [
      "./source/javascripts/all.js"
    ],
  },
  resolve: {
    root: __dirname + "/source/javascripts",
  },
  output: {
    path: __dirname + "/.tmp/dist",
    filename: "javascripts/[name].bundle.js",
  }
};
