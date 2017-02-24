webpackJsonp([66],{213:function(t,e){t.exports="<section><h1>Message box</h1> <blockquote> <p>A popup message box with multiple interacting forms.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { MessageBox } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n</code></pre> <h2>Example</h2> <p>Open a message box with its <code>title</code> and <code>message</code></p> <pre><code class=language-javascript>MessageBox(<span class=hljs-string>'Notice'</span>, <span class=hljs-string>'You clicked the button'</span>);\n</code></pre> <p>Or pass an object as its configuration</p> <pre><code class=language-javascript>MessageBox({\n  <span class=hljs-attr>title</span>: <span class=hljs-string>'Notice'</span>,\n  <span class=hljs-attr>message</span>: <span class=hljs-string>'Are you sure?'</span>,\n  <span class=hljs-attr>showCancelButton</span>: <span class=hljs-literal>true</span>\n});\n</code></pre> <p>Besides, <code>MessageBox</code> has three methods: <code>alert</code>, <code>confirm</code> and <code>prompt</code>. They all return a Promise</p> <pre><code class=language-javascript>MessageBox.alert(message, title);\n</code></pre> <pre><code class=language-javascript>MessageBox.alert(<span class=hljs-string>'Success!'</span>).then(<span class=hljs-function><span class=hljs-params>action</span> =&gt;</span> {\n  ...\n});\n</code></pre> <pre><code class=language-javascript>MessageBox.confirm(message, title);\n</code></pre> <pre><code class=language-javascript>MessageBox.confirm(<span class=hljs-string>'Are you sure?'</span>).then(<span class=hljs-function><span class=hljs-params>action</span> =&gt;</span> {\n  ...\n});\n</code></pre> <pre><code class=language-javascript>MessageBox.prompt(message, title);\n</code></pre> <pre><code class=language-javascript>MessageBox.prompt(<span class=hljs-string>'Please tell me your name'</span>).then(<span class=hljs-function>(<span class=hljs-params>{ value, action }</span>) =&gt;</span> {\n  ...\n});\n</code></pre> <p>If the user clicks the cancel button in prompt, the returned Promise will be rejected</p> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>title</td> <td>title of the message box</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>message</td> <td>message of the message box</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>showConfirmButton</td> <td>if a confirm button is displayed</td> <td>Boolean</td> <td></td> <td>true</td> </tr> <tr> <td>showCancelButton</td> <td>if a cancel button is displayed</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>confirmButtonText</td> <td>text of the confirm button</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>confirmButtonHighlight</td> <td>if the text of the confirm button is highlighted</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>confirmButtonClass</td> <td>class name of the confirm button</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>cancelButtonText</td> <td>text of the cancel button</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>cancelButtonHighlight</td> <td>if the text of the cancel button is highlighted</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>cancelButtonClass</td> <td>class name of the cancel button</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>showInput</td> <td>if an input is displayed</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>inputValue</td> <td>value of the input</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>inputPlaceholder</td> <td>place holder for the input</td> <td>String</td> <td></td> <td></td> </tr> </tbody> </table></div></section>"},340:function(t,e,s){var a,d,n={};d=s(213),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default);var o="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;d&&(o.template=d),o.computed||(o.computed={}),Object.keys(n).forEach(function(t){var e=n[t];o.computed[t]=function(){return e}})},38:function(t,e,s){t.exports=s(340)}});