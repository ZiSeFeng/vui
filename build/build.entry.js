// /** @format **/

// const path = require('path');
// const fs = require('fs');
// const render = require('json-templater/string');
// const pack = require('../packages.json');
// const fileSave = require('file-save');
// const componentsList = fs.readdirSync(path.resolve(__dirname, '../packages'));

// const MAIN_TEMPLATE = `/** @format */`;

// /* Automatically generated by './build/build-entry.js' */

// { { include } }
// import locale from '../src/locale'
// import CollapseTransition from '../src/transitions/collapse-transition';

// const components = [
//   {{ install }},
// CollapseTransition
// ]

// const install = function (Vue, opts = {}) {
//   locale.use(opts.locale)
//   locale.i18n(opts.i18n)

//   components.forEach(component => {
//     Vue.component(component.name, component)
//   })

//   Vue.use(InfiniteScroll)
//   Vue.use(Loading.directive)

//   Vue.prototype.$ELEMENT = {
//     size: opts.size || '',
//     zIndex: opts.zIndex || 2000
//   }

//   Vue.prototype.$loading = Loading.service
//   Vue.prototype.$msgbox = MessageBox
//   Vue.prototype.$alert = MessageBox.alert
//   Vue.prototype.$confirm = MessageBox.confirm
//   Vue.prototype.$prompt = MessageBox.prompt
//   Vue.prototype.$notify = Notification
//   Vue.prototype.$message = Message
// }

// /* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

// export default {
//   version: '{{version}}',
//   locale: locale.use,
//   i18n: locale.i18n,
//   install,
//   CollapseTransition,
//   Loading,
// { { list } }
// }
// `
// //var IMPORT_TEMPLATE = "import {{name}} from './components/{{package}}/index.js'"
// const IMPORT_TEMPLATE = "import {{name}} from  '../packages/{{package}}/index.js'"
// var INSTALL_COMPONENT_TEMPLATE = '  {{name}}'

// function buildViewName(str) {
//   var viewName = str.split('-')
//   return viewName
//     .map(function(item, index) {
//       return item.charAt(0).toUpperCase() + item.substr(1)
//     })
//     .join('')
// }

// var dirs = []

// componentsList.forEach(function(key) {
//   var data = fs.statSync(path.resolve(__dirname, `../ packages / ${ key } `))
//   if (data.isDirectory()) {
//     dirs.push(key)
//   }
// })

// var components = {}
// dirs.forEach(function(componentname) {
//   components[componentname] = `./ packages / ${ componentname } /index.js`
// })

// fileSave(path.resolve(__dirname, '../components.json'))
//   .write(JSON.stringify(components, null, '  '), 'utf8')
//   .end('\n')

// var includeComponentTemplate = []
// var installTemplate = []
// var listTemplate = []

// dirs.forEach(function (name) {
//   var componentName = buildViewName(name)
//   includeComponentTemplate.push(
//     render(IMPORT_TEMPLATE, {
//       name: componentName,
//       package: name
//     })
//   )

//   if (['Loading', 'MessageBox', 'Notification', 'Message'].indexOf(componentName) === -1) {
//     installTemplate.push(
//       render(INSTALL_COMPONENT_TEMPLATE, {
//         name: componentName,
//         component: name
//       })
//     )
//   }

//   if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`)
// })

// var template = render(MAIN_TEMPLATE, {
//   include: includeComponentTemplate.join('\n'),
//   install: installTemplate.join(',\n'),
//   version: process.env.VERSION || pack.version,
//   list: listTemplate.join(',\n')
// })

// fileSave(path.resolve(__dirname, '../src/index.js'))
//   .write(template, 'utf8')
//   .end('')

// // 生成assets索引
// var assets = fs.readdirSync(path.resolve(__dirname, '../examples/assets/images/'))
// let imgs = {}
// assets.forEach((key, index) => {
//   var data = fs.statSync(path.resolve(__dirname, `../examples/assets/images/${key}`))
//   if (data.isFile()) {
//     if (key === '.DS_Store') return
//     imgs[`'${key.substr(0, key.lastIndexOf('.'))}': assets_${index}`] = `import assets_${index} from './assets/images/${key}'`
//   }
// })

// fileSave(path.resolve(__dirname, '../examples/assets.js'))
//   .write('/** @format */\n', 'utf8')
//   .write("import Vue from 'vue'\n", 'utf8')
//   .write(Object.values(imgs).join('\n'), 'utf8')
//   .write('\n\n', 'utf8')
//   .write('Vue.prototype.$assets = {\n ', 'utf8')
//   .write(Object.keys(imgs).join(',\n '), 'utf8')
//   .end('}\n')
