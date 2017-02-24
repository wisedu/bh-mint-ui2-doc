webpackJsonp([107],{172:function(s,a){s.exports='<section><h1>Cell</h1> <blockquote> <p>单元格，可用作展示列表信息、链接或者表单等。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Cell } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Cell.name, Cell);\n</code></pre> <h2>例子</h2> <p>基础用法</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"标题文字"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"标题文字"</span> <span class=hljs-attr>value</span>=<span class=hljs-string>"说明文字"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n</code></pre> <p>可点击的链接</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span>\n  <span class=hljs-attr>title</span>=<span class=hljs-string>"标题文字"</span>\n  <span class=hljs-attr>href</span>=<span class=hljs-string>"//github.com"</span>\n  <span class=hljs-attr>is-link</span>\n  <span class=hljs-attr>value</span>=<span class=hljs-string>"带链接"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n</code></pre> <p>带图标</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"标题文字"</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"more"</span> <span class=hljs-attr>value</span>=<span class=hljs-string>"带 icon"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n</code></pre> <p>带自定义图标</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"标题文字"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>span</span>&gt;</span>icon 是图片<span class=hljs-tag>&lt;/<span class=hljs-name>span</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"icon"</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"../assets/100x100.png"</span> <span class=hljs-attr>width</span>=<span class=hljs-string>"24"</span> <span class=hljs-attr>height</span>=<span class=hljs-string>"24"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n</code></pre> <p>自定义内容</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"标题文字"</span> <span class=hljs-attr>is-link</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>span</span> <span class=hljs-attr>style</span>=<span class=hljs-string>"color: green"</span>&gt;</span>这里是元素<span class=hljs-tag>&lt;/<span class=hljs-name>span</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n</code></pre> <p>带备注信息</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"标题"</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"描述信息"</span> <span class=hljs-attr>is-link</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>icon</td> <td>图标</td> <td>String</td> <td>back, more</td> <td></td> </tr> <tr> <td>title</td> <td>标题</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>value</td> <td>内容</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>label</td> <td>备注信息，显示在标题下方</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>is-link</td> <td>链接，会显示箭头图标。搭配 href 属性使用</td> <td>Boolean</td> <td></td> <td></td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>自定义显示内容</td> </tr> <tr> <td>title</td> <td>自定义标题</td> </tr> <tr> <td>icon</td> <td>自定义图标</td> </tr> </tbody> </table></div></section>'},299:function(s,a,t){var l,n,p={};n=t(172),s.exports=l||{},s.exports.__esModule&&(s.exports=s.exports.default);var c="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;n&&(c.template=n),c.computed||(c.computed={}),Object.keys(p).forEach(function(s){var a=p[s];c.computed[s]=function(){return a}})},91:function(s,a,t){s.exports=t(299)}});