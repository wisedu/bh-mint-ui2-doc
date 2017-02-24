webpackJsonp([124],{155:function(s,a){s.exports='<section><h1>Mint UI 使用文档</h1> <p>本文将介绍 Mint UI 的安装方式和基本的用法。</p> <hr> <h3>npm 安装</h3> <p>推荐使用 npm 的方式安装，它能更好地和 <a href=https://webpack.js.org/ >webpack</a> 打包工具配合使用。</p> <pre><code class=language-shell>npm i mint-ui@1 -S\n</code></pre> <h3>CDN</h3> <p>目前可以通过 <a href=https://unpkg.com/mint-ui@1/ >unpkg.com/mint-ui@1</a> 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。</p> <pre><code class=language-html><span class=hljs-comment>&lt;!-- 引入样式 --&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>link</span> <span class=hljs-attr>rel</span>=<span class=hljs-string>"stylesheet"</span> <span class=hljs-attr>href</span>=<span class=hljs-string>"https://unpkg.com/mint-ui@1/lib/style.css"</span>&gt;</span>\n<span class=hljs-comment>&lt;!-- 引入组件库 --&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"https://unpkg.com/mint-ui@1/lib/index.js"</span>&gt;</span><span class=undefined></span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n</code></pre> <h3>Hello world</h3> <p>通过 CDN 的方式我们可以很容易地使用 Mint UI 写出一个 Hello world 页面。</p> <pre><code class=language-html><span class=hljs-meta>&lt;!DOCTYPE html&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>html</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>head</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>meta</span> <span class=hljs-attr>charset</span>=<span class=hljs-string>"UTF-8"</span>&gt;</span>\n  <span class=hljs-comment>&lt;!-- 引入样式 --&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>link</span> <span class=hljs-attr>rel</span>=<span class=hljs-string>"stylesheet"</span> <span class=hljs-attr>href</span>=<span class=hljs-string>"https://unpkg.com/mint-ui@1/lib/style.css"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>head</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>body</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"app"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>@click.native</span>=<span class=hljs-string>"handleClick"</span>&gt;</span>按钮<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>body</span>&gt;</span>\n  <span class=hljs-comment>&lt;!-- 先引入 Vue --&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>script</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"https://unpkg.com/vue@1/dist/vue.js"</span>&gt;</span><span class=undefined></span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n  <span class=hljs-comment>&lt;!-- 引入组件库 --&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>script</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"https://unpkg.com/mint-ui@1/lib/index.js"</span>&gt;</span><span class=undefined></span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=actionscript>\n    <span class=hljs-keyword>new</span> Vue({\n      el: <span class=hljs-string>\'#app\'</span>,\n      methods: {\n        handleClick: <span class=hljs-function><span class=hljs-keyword>function</span><span class=hljs-params>()</span> </span>{\n          <span class=hljs-keyword>this</span>.$toast(<span class=hljs-string>\'Hello world!\'</span>)\n        }\n      }\n    })\n  </span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>html</span>&gt;</span>\n</code></pre> <p>如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：<a v-link="\'/zh-cn2/quickstart\'">快速上手</a>。</p> </section>'},282:function(s,a,n){var p,l,t={};l=n(155),s.exports=p||{},s.exports.__esModule&&(s.exports=s.exports.default);var c="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(c.template=l),c.computed||(c.computed={}),Object.keys(t).forEach(function(s){var a=t[s];c.computed[s]=function(){return a}})},86:function(s,a,n){s.exports=n(282)}});