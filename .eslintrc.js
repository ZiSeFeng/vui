module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true
  },
  "extends": [
    "plugin:vue/recommended",
    "eslint:recommended",
    "standard"
  ],
  rules: {
    "accessor-pairs": 2,
    "array-bracket-spacing": 0,
    "brace-style": [2, "1tbs", { allowSingleLine: true }],
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, { before: false, after: true }],
    "comma-style": [2, "last"],
    complexity: 0,
    "computed-property-spacing": 0,
    "consistent-this": 0,
    "constructor-super": 2,
    curly: [2, "multi-line"],
    "dot-location": [2, "property"],
    "dot-notation": 0,
    "eol-last": 2,
    "for-direction": 2,
    "func-style": 0,
    "getter-return": 2,
    "yield-star-spacing": [2, { before: true, after: false }],
    indent: [1, 2, { SwitchCase: 1 }],
    "key-spacing": [2, { beforeColon: false, afterColon: true }],
    "linebreak-style": 0,
    "lines-around-comment": 0,
    "max-nested-callbacks": 0,
    "new-cap": [2, { newIsCap: false, capIsNew: false }],
    "new-parens": 2,
    "newline-after-var": 0,
    "no-alert": 0,
    "no-caller": 2,
    "no-catch-shadow": 0,
    "no-cond-assign": 2,
    "no-constant-condition": 0,
    "no-delete-var": 2,
    "no-div-regex": 0,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-else-return": 0,
    "no-empty": 0,
    "no-empty-character-class": 2,
    "no-eq-null": 0,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 0,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-lone-blocks": 2,
    "no-mixed-requires": 0,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 1,
    "no-multi-str": 0,
    "no-multiple-empty-lines": [1, { max: 1 }],
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-new": 2,
    "no-new-func": 0,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-path-concat": 0,
    "no-process-env": 0,
    "no-process-exit": 0,
    "no-proto": 0,
    "no-regex-spaces": 2,
    "no-restricted-modules": 0,
    "no-script-url": 0,
    "no-self-compare": 0,
    "no-sequences": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 0,
    "no-ternary": 0,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 1,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-unexpected-multiline": 2,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-void": 0,
    "no-warning-comments": 0,
    "no-with": 2,
    "object-curly-spacing": 0,
    "one-var": [2, { initialized: "never" }],
    "operator-assignment": 0,
    "operator-linebreak": [
      2,
      "after",
      { overrides: { "?": "before", ":": "before" } }
    ],
    "padded-blocks": 0,
    "quote-props": 0,
    quotes: [2, "double", "avoid-escape"],
    semi: [2, "always"],
    "semi-spacing": 0,
    "sort-vars": 0,
    "keyword-spacing": 2,
    "space-before-blocks": [2, "always"],
    // "space-before-function-paren": [2, "never"],
    "space-before-function-paren": [
      'error', {
        "anonymous": "ignore",
        "named": "never"
      }
    ],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": [2, { words: true, nonwords: false }],
    "spaced-comment": [
      2,
      "always",
      {
        markers: [
          "global",
          "globals",
          "eslint",
          "eslint-disable",
          "*package",
          "!"
        ]
      }
    ],
    strict: 0,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,
    "wrap-iife": [2, "any"],
    "wrap-regex": 0,
    yoda: [2, "never"],
    "no-undef": 2, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到. e.g. /* global Stomp SockJS */ in .vue file's <scrpit>
    "no-extend-native": 2, // 禁止扩展原生类型
    "no-return-assign": 2, // 禁止在 return 语句中使用赋值语句
    "import/order": 0, // Enforce a convention in module import order
    "import/no-extraneous-dependencies": 0, // 禁止导入未在package.json的依赖项，devDependencies，optionalDependencies或peerDependencies中声明的外部模块。将使用最接近的父package.json。
    "import/no-dynamic-require": 1, // CommonJS的require方法用于从不同文件导入模块。与ES6导入语法不同，可以为其提供将在运行时解析的表达式。虽然这有时是必要且有用的，但在大多数情况下并非如此。使用表达式（例如，连接路径和变量）作为参数使得工具更难以进行静态代码分析，或者在代码库中找到使用模块的位置。
    "import/extensions": 0, // 某些文件解析算法允许您在导入源路径中省略文件扩展名。例如，节点解析器可以将./foo/bar解析为绝对路径/User/someone/foo/bar.js，因为默认情况下会自动解析.js扩展名。根据解析程序，您可以配置更多扩展程序以自动解决。
    "import/no-unresolved": 0, // 确保导入的模块可以解析为本地文件系统上的模块，如标准Node require.resolve行为所定义。
    "import/prefer-default-export": 1, // 当模块中只有一个导出时，更喜欢使用默认导出而不是命名导出。
    "vue/no-async-in-computed-properties": 1, // 计算属性应该是同步的。其中的异步操作可能无法按预期工作，并可能导致意外行为，这就是您应该避免它们的原因。如果您需要异步计算属性，可能需要考虑使用其他插件[vue-async-computed]
    "vue/no-side-effects-in-computed-properties": 1, // 在计算属性中引入副作用被认为是一种非常糟糕的做法。它使代码无法预测且难以理解。
    "vue/no-reserved-keys": 1, // 此规则阻止使用保留名称以避免冲突和意外行为。
    "vue/require-v-for-key": 2, // 当v-for写在自定义组件上时，它需要同时使用v-bind：key。在其他元素上，v-bind：key也最好写。
    "vue/require-valid-default-prop": 1, // 此规则检查每个prop的默认值是否对给定类型有效。当使用函数未返回类型Array或Object的默认值时，它应报告错误。
    "no-unused-vars": 1, // 禁止出现未使用过的变量
    "generator-star-spacing": [2, { before: true, after: false }], //
    "no-plusplus": 0, // 禁用一元操作符 ++ 和 --
    "func-names": 0, // 要求或禁止使用命名的 function 表达式
    "no-console": 0, // no-console
    radix: 0, // 强制在parseInt()使用基数参数
    "no-control-regex": 0, // 禁止在正则表达式中使用控制字符
    "no-continue": 0, // 禁用 continue 语句
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-param-reassign": 0, // 禁止对 function 的参数进行重新赋值
    "no-underscore-dangle": 1, // 禁止标识符中有悬空下划线"_"
    "no-var": 1, // 要求使用 let 或 const 而不是 var
    "vars-on-top": 1, // 要求所有的 var 声明出现在它们所在的作用域顶部
    // "prefer-destructuring": 1, // 优先使用数组和对象解构
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
        "object": true
      },
      "AssignmentExpression": {
        "array": true,
        "object": true
      }
    }, {
        "enforceForRenamedProperties": false
      }],
    "no-useless-concat": 1, // 禁止不必要的字符串字面量或模板字面量的连接
    "no-shadow": 1, // 禁止变量声明与外层作用域的变量同名
    "guard-for-in": 1, // 要求 for-in 循环中有一个 if 语句,旨在防止使用for in循环而不过滤循环中的结果时可能出现的意外行为。
    "no-restricted-syntax": 1, // 禁用特定的语法
    "global-require": 0, //  require() 
    "consistent-return": 0, // 要求 return 语句要么总是指定返回的值，要么不指定
    eqeqeq: 1, // 要求使用 === 和 !==
    "no-unused-expressions": 1, // 禁止出现未使用过的表达式
    camelcase: 0, // 使用骆驼拼写法命名约定
    "block-scoped-var": 1, // 强制把变量的使用限制在其定义的作用域范围内,旨在减少绑定上下文之外的变量的使用，并从其他语言模拟传统的块范围。这是为了帮助语言新手避免变量提升的难题。
    "no-redeclare": 1, // 禁止多次声明同一变量
    "prefer-arrow-callback": 1, // 要求回调函数使用箭头函数
    "array-callback-return": 1, // 强制数组方法的回调函数中有 return 语句,Array有几种过滤，映射和折叠的方法。如果我们忘记return在这些回调中写入语句，那可能是一个错误。
    "default-case": 1, // 要求 switch 语句中有 default 分支
    "no-loop-func": 1, // 禁止在循环中出现 function 声明和表达式
    "no-fallthrough": 1, // 禁止 case 语句落空
    "no-multi-assign": 1, // 禁止连续赋值
    "no-lonely-if": 1, // 禁止 if 作为唯一的语句出现在 else 语句中.如果一个if陈述是该else块中唯一的陈述，那么使用一个else if表格通常会更清晰。
    "no-irregular-whitespace": 1, // 禁止在字符串和注释之外不规则的空白
    "prefer-const": 1, // 要求使用 const 声明那些声明后不再被修改的变量.如果一个变量从不重新分配，使用const声明更好。const 声明告诉读者，“这个变量永远不会被重新分配，”减少认知负荷并提高可维护性。
    "no-use-before-define": 1, // 禁止在变量定义之前使用它们
    "no-useless-escape": 1, // 禁用不必要的转义字符
    "no-array-constructor": 1, // 禁用 Array 构造函数,由于单参数的缺陷以及Array全局可能被重新定义，所以通常不鼓励使用构造函数来构造新Array数组，而是倾向于使用数组文字符号。例外情况是Array构造函数用于通过给构造函数一个数字参数有意创建指定大小的稀疏数组。
    "object-shorthand": 1, // 要求或禁止对象字面量中方法和属性使用简写语法
    "no-prototype-builtins": 0, // 禁止直接调用 Object.prototypes 的内置属性.当假定对象将具有属性时，这可能导致错误Object.prototype。此规则可防止Object.prototype直接从对象调用方法。
    "no-nested-ternary": 0, // 禁用嵌套的三元表达式.嵌套三元表达式会使代码更难理解。
    "no-new-wrappers": 1, // 禁止对 String，Number 和 Boolean 使用 new 操作符.没有任何理由将这些基本包装用作构造函数
    "prefer-promise-reject-errors": 1, // 要求使用 Error 对象作为 Promise 拒绝的原因
    "no-labels": 0, // 禁用标签语句

    // //// vue 规范 //////////
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: true
        }
      }
    ],
    "vue/require-default-prop": "off",
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never"
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
