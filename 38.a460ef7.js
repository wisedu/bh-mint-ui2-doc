webpackJsonp([38],{243:function(s,t){s.exports='<section><h1>Range</h1> <blockquote> <p>A slide block. Custom step, min value and max value supported.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Range } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Range.name, Range);\n</code></pre> <h2>Example</h2> <p>Sync <code>value</code> with one of your vue instance variables</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-range</span> <span class=hljs-attr>:value.sync</span>=<span class=hljs-string>"rangeValue"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-range</span>&gt;</span>\n</code></pre> <p>More configurable options</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-range</span>\n  <span class=hljs-attr>:value.sync</span>=<span class=hljs-string>"rangeValue"</span>\n  <span class=hljs-attr>:min</span>=<span class=hljs-string>"10"</span>\n  <span class=hljs-attr>:max</span>=<span class=hljs-string>"90"</span>\n  <span class=hljs-attr>:step</span>=<span class=hljs-string>"10"</span>\n  <span class=hljs-attr>:bar-height</span>=<span class=hljs-string>"5"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-range</span>&gt;</span>\n</code></pre> <p>Show texts on both sides of <code>mt-range</code></p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-range</span> <span class=hljs-attr>:value.sync</span>=<span class=hljs-string>"rangeValue"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"start"</span>&gt;</span>0<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"end"</span>&gt;</span>100<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-range</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>value</td> <td>value of the range</td> <td>Number</td> <td></td> <td></td> </tr> <tr> <td>min</td> <td>min possible value</td> <td>Number</td> <td></td> <td>0</td> </tr> <tr> <td>max</td> <td>max possible value</td> <td>Number</td> <td></td> <td>100</td> </tr> <tr> <td>step</td> <td>step of the range</td> <td>Number</td> <td></td> <td>1</td> </tr> <tr> <td>disabled</td> <td>if the range is disabled</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>barHeight</td> <td>height of the slide bar</td> <td>Number</td> <td></td> <td>1</td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>start</td> <td>DOM on the left of the slide block</td> </tr> <tr> <td>end</td> <td>DOM on the right of the slide block</td> </tr> </tbody> </table></div></section>'},370:function(s,t,a){var n,e,l={};e=a(243),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports.default);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;e&&(p.template=e),p.computed||(p.computed={}),Object.keys(l).forEach(function(s){var t=l[s];p.computed[s]=function(){return t}})},45:function(s,t,a){s.exports=a(370)}});