const { defineConfig } = require("@vue/cli-service");
const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  chainWebpack: (config) => {
    // 配置SVG雪碧图
    config.module.rule("svg").exclude.add(resolve("src/assets/icons")).end(); // url-loader不处理
    config.module
      .rule("svg-icon")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })
      .end();
  },
});
