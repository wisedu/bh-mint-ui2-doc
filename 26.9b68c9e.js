webpackJsonp([26],{255:function(s,a){s.exports='<section><h1>Spinner</h1> <blockquote> <p>A loading spinner with custom type, size and color.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Spinner } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Spinner.name, Spinner);\n</code></pre> <h2>Example</h2> <p>Custom type</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"snake"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"double-bounce"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"triple-bounce"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"fading-circle"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- accepts a 0-3 number --&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>:type</span>=<span class=hljs-string>"0"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>:type</span>=<span class=hljs-string>"1"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>:type</span>=<span class=hljs-string>"2"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>:type</span>=<span class=hljs-string>"3"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n</code></pre> <p>Custom color</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>color</span>=<span class=hljs-string>"#26a2ff"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>color</span>=<span class=hljs-string>"rgb(100, 100, 100)"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>color</span>=<span class=hljs-string>"yellow"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n</code></pre> <p>Custom size</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>:size</span>=<span class=hljs-string>"60"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>type</td> <td>type of the spinner. Accepts a name(String) or an index(Number)</td> <td>String, Number</td> <td>snake <br> double-bounce <br> triple-bounce <br> fading-circle</td> <td>snake</td> </tr> <tr> <td>color</td> <td>color of the spinner. Hex and RGB format accepted</td> <td>String</td> <td></td> <td>#ccc</td> </tr> <tr> <td>size</td> <td>size of the spinner(in pixel)</td> <td>Number</td> <td></td> <td>28</td> </tr> </tbody> </table></div></section>'},382:function(s,a,n){var t,p,l={};p=n(255),s.exports=t||{},s.exports.__esModule&&(s.exports=s.exports.default);var e="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;p&&(e.template=p),e.computed||(e.computed={}),Object.keys(l).forEach(function(s){var a=l[s];e.computed[s]=function(){return a}})},48:function(s,a,n){s.exports=n(382)}});