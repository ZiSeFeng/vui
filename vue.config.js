const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = {
  lintOnSave: false, // 关闭eslint规范
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("examples"),
        "src": resolve("src")
      }
    },
    output: {
      libraryExport: "default",
      library: "VUI"
    }
  },
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use("./build/md-loader/index.js")
      .loader("./build/md-loader/index.js");

    // config.module
    //   .rule("scss")
    //   .oneOf("normal")
    //   .use("css-loader")
    //   .end()
    //   .use("icon-loader")
    //   .loader(require("path").resolve(__dirname, "./build/bin/iconInit.js"))
    //   .end();
  }
};
