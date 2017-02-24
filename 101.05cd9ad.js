webpackJsonp([101],{123:function(s,a,t){s.exports=t(305)},178:function(s,a){s.exports="<section><h1>Checklist</h1> <blockquote> <p>复选框列表，依赖 <a v-link=\"{path:'/' + $route.language + '/cell'}\">cell</a> 组件。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Checklist } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n\nVue.component(Checklist.name, Checklist);\n</code></pre> <h2>例子</h2> <p>基本用法</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-checklist</span>\n  <span class=hljs-attr>title</span>=<span class=hljs-string>\"复选框列表\"</span>\n  <span class=hljs-attr>v-model</span>=<span class=hljs-string>\"value\"</span>\n  <span class=hljs-attr>:options</span>=<span class=hljs-string>\"['选项A', '选项B', '选项C']\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-checklist</span>&gt;</span>\n</code></pre> <p>设置禁用选项</p> <pre><code class=language-javascript><span class=hljs-keyword>this</span>.options = [\n  {\n    <span class=hljs-attr>label</span>: <span class=hljs-string>'被禁用'</span>,\n    <span class=hljs-attr>value</span>: <span class=hljs-string>'值F'</span>,\n    <span class=hljs-attr>disabled</span>: <span class=hljs-literal>true</span>\n  },\n  {\n    <span class=hljs-attr>label</span>: <span class=hljs-string>'选中禁用'</span>,\n    <span class=hljs-attr>value</span>: <span class=hljs-string>'选中禁用的值'</span>,\n    <span class=hljs-attr>disabled</span>: <span class=hljs-literal>true</span>\n  },\n  {\n    <span class=hljs-attr>label</span>: <span class=hljs-string>'选项A'</span>,\n    <span class=hljs-attr>value</span>: <span class=hljs-string>'值A'</span>\n  },\n  {\n    <span class=hljs-attr>label</span>: <span class=hljs-string>'选项B'</span>,\n    <span class=hljs-attr>value</span>: <span class=hljs-string>'值B'</span>\n  }\n];\n</code></pre> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-checklist</span>\n  <span class=hljs-attr>v-model</span>=<span class=hljs-string>\"value\"</span>\n  <span class=hljs-attr>:options</span>=<span class=hljs-string>\"options\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-checklist</span>&gt;</span>\n</code></pre> <p>设置最大可选数</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-checklist</span>\n  <span class=hljs-attr>:max</span>=<span class=hljs-string>\"2\"</span>\n  <span class=hljs-attr>v-model</span>=<span class=hljs-string>\"value\"</span>\n  <span class=hljs-attr>:options</span>=<span class=hljs-string>\"options\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-checklist</span>&gt;</span>\n</code></pre> <p>选择框右对齐</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-checklist</span>\n  <span class=hljs-attr>align</span>=<span class=hljs-string>\"right\"</span>\n  <span class=hljs-attr>title</span>=<span class=hljs-string>\"右对齐\"</span>\n  <span class=hljs-attr>v-model</span>=<span class=hljs-string>\"value\"</span>\n  <span class=hljs-attr>:options</span>=<span class=hljs-string>\"options\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-checklist</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>options</td> <td>选择项，可直接传字符串数组或者对象数组</td> <td>Array</td> <td></td> <td></td> </tr> <tr> <td>value</td> <td>绑定值</td> <td>Array</td> <td></td> <td></td> </tr> <tr> <td>title</td> <td>标题，显示在列表上方</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>max</td> <td>最多可选个数，超过后其他未选择的选项变成禁用状态</td> <td>Number</td> <td></td> <td></td> </tr> <tr> <td>align</td> <td>复选框对其位置</td> <td>String</td> <td>left, right</td> <td>left</td> </tr> </tbody> </table></div></section>"},305:function(s,a,t){var n,l,p={};l=t(178),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports.default);var c="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(c.template=l),c.computed||(c.computed={}),Object.keys(p).forEach(function(s){var a=p[s];c.computed[s]=function(){return a}})}});