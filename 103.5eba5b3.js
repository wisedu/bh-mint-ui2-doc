webpackJsonp([103],{176:function(t,d){t.exports="<section><h1>Cell Swipe</h1> <blockquote> <p>可滑动的单元格，用法同 cell。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { CellSwipe } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n\nVue.component(CellSwipe.name, CellSwipe);\n</code></pre> <h2>例子</h2> <p>增加右滑动按钮</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-cell-swipe</span>\n  <span class=hljs-attr>title</span>=<span class=hljs-string>\"标题文字\"</span>\n  <span class=hljs-attr>:right</span>=<span class=hljs-string>\"[\n    {\n      content: 'Delete',\n      style: { background: 'red', color: '#fff' },\n      handler: () =&gt; this.$messagebox('delete')\n    }\n  ]\"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell-swipe</span>&gt;</span>\n</code></pre> <p><code>content</code> 可以是 HTML 或者纯文本。</p> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>icon</td> <td>图标</td> <td>String</td> <td>back, more</td> <td></td> </tr> <tr> <td>title</td> <td>标题</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>value</td> <td>内容</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>label</td> <td>备注信息，显示在标题下方</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>is-link</td> <td>链接，会显示箭头图标。搭配 href 属性使用</td> <td>Boolean</td> <td></td> <td></td> </tr> <tr> <td>left</td> <td>按钮组, <code>{ content, style, handler }</code></td> <td>Object[]</td> <td></td> <td></td> </tr> <tr> <td>right</td> <td>按钮组, <code>{ content, style, handler }</code></td> <td>Object[]</td> <td></td> <td></td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>自定义显示内容</td> </tr> <tr> <td>title</td> <td>自定义标题</td> </tr> <tr> <td>icon</td> <td>自定义图标</td> </tr> </tbody> </table></div></section>"},303:function(t,d,e){var s,n,a={};n=e(176),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default);var l="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(l.template=n),l.computed||(l.computed={}),Object.keys(a).forEach(function(t){var d=a[t];l.computed[t]=function(){return d}})},90:function(t,d,e){t.exports=e(303)}});