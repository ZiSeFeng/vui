const isInitIconList = false;
const fs = require("fs");
const path = require("path");
const request = require("request");
const postcss = require("postcss");

module.exports = function (source) {
  if (!isInitIconList) {
    const iconPath = path.resolve(__dirname, "../../packages/theme-chalk/src/fonts/icon.scss");
    fs.readFile(iconPath, "utf8", (err, data) => {
      if (err) throw err;
      const matchs = data.match(/\/\/[^\s]*\.css/);
      if (!matchs || matchs.length < 1) return;
      request(`http:${matchs[0]}`, (_error, _response, body) => {
        const classList = [];
        postcss.parse(body).nodes.forEach(node => {
          const { selector } = node;
          if (!selector) return;
          if (!/\.m-icon-([^:]+):before/.test(selector)) return;
          classList.push(selector.replace(/\.|:before/g, ""));
        });
        fs.writeFile(
          path.resolve(__dirname, "../../examples/icon.json"),
          `export default ${JSON.stringify(classList)};`,
          () => { }
        );
      });
    });
  }
  return source;
};
