import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,g as e,o as l}from"./app-CGK1SAKn.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>小练习-通过脚本读取/写入文件</p><h2 id="details" tabindex="-1"><a class="header-anchor" href="#details"><span>Details</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/env node</span></span>
<span class="line"><span>const fs = require(&#39;fs&#39;)</span></span>
<span class="line"><span>// 读取文本文件内容</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fs.writeFile(\`\${__dirname}/write.txt\`, &#39;这是一行文本\\n 这是第二行文本&#39;, (err) =&gt; {</span></span>
<span class="line"><span>if (err) {</span></span>
<span class="line"><span>console.log(&#39;error&#39;, err)</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>console.log(&#39;写入成功，内容是:&#39;, fs.readFileSync(\`\${__dirname}/write.txt\`, &#39;utf8&#39;, (err, data) =&gt; {</span></span>
<span class="line"><span>if (!err) {</span></span>
<span class="line"><span>console.log(data)</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>console.log(&#39;读取失败了&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>fs.appendFile(\`\${__dirname}/write.txt\`, &#39;这是第三行追加的内容&#39;, () =&gt; ({}))</span></span>
<span class="line"><span>// 创建并写入 xlsx 文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const xlsx = require(&#39;xlsx&#39;)</span></span>
<span class="line"><span>const data = [</span></span>
<span class="line"><span>[&#39;哇哈哈&#39;, &#39;页面优化&#39;, &#39;2023/01/01&#39;, &#39;2023/01/09&#39;, &#39;3&#39;],</span></span>
<span class="line"><span>[&#39;哇哈哈 2222&#39;, &#39;页面优化&#39;, &#39;2023/01/01&#39;, &#39;2023/01/09&#39;, &#39;311111&#39;]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>const workbook = xlsx.utils.book_new()</span></span>
<span class="line"><span>const worksheet = xlsx.utils.aoa_to_sheet(data)</span></span>
<span class="line"><span>workbook.SheetNames = [&#39;sheet&#39;]</span></span>
<span class="line"><span>workbook.Sheets.sheet = worksheet</span></span>
<span class="line"><span>workbook.Props = {</span></span>
<span class="line"><span>Creator: &#39;wahwha&#39;,</span></span>
<span class="line"><span>LastModifiedBy: &#39;wahaha&#39;,</span></span>
<span class="line"><span>AppVersion: &#39;1.0.0&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>xlsx.writeFile(workbook, &#39;output.xlsx&#39;)</span></span>
<span class="line"><span>console.log(&#39;文件生成 output.xlsx&#39;)</span></span>
<span class="line"><span>// 读取 xlsx 文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const readBook = xlsx.readFile(\`\${__dirname}/output.xlsx\`)</span></span>
<span class="line"><span>const readSheet = readBook.Sheets[readBook.SheetNames[0]]</span></span>
<span class="line"><span>const range = xlsx.utils.decode_range(readSheet[&#39;!ref&#39;])</span></span>
<span class="line"><span>const readData = []</span></span>
<span class="line"><span>for (let row = range.s.r; row &lt;= range.e.r; row++) {</span></span>
<span class="line"><span>const rowData = []</span></span>
<span class="line"><span>for (let col = range.s.c; col &lt;= range.e.c; col++) {</span></span>
<span class="line"><span>const address = xlsx.utils.encode_cell({ r: row, c: col })</span></span>
<span class="line"><span>const cell = worksheet[address]</span></span>
<span class="line"><span>const cellValue = cell ? cell.v : &#39;&#39;</span></span>
<span class="line"><span>rowData.push(cellValue)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>readData.push(rowData)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(&#39;读取 output.xlsx&#39;, readData)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const r=n(i,[["render",p],["__file","layout.html.vue"]]),o=JSON.parse('{"path":"/demo/layout.html","title":"node-读写文件","lang":"zh-CN","frontmatter":{"title":"node-读写文件","icon":"object-group","order":2,"category":["Guide"],"tag":["Layout"],"description":"Introduction 小练习-通过脚本读取/写入文件 Details","head":[["meta",{"property":"og:url","content":"https://zonahaha.github.io/demo/layout.html"}],["meta",{"property":"og:site_name","content":"hello zona😊"}],["meta",{"property":"og:title","content":"node-读写文件"}],["meta",{"property":"og:description","content":"Introduction 小练习-通过脚本读取/写入文件 Details"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Layout"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"node-读写文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zona\\",\\"url\\":\\"https://github.com/zonahaha/zonahaha.github.io.git\\"}]}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Details","slug":"details","link":"#details","children":[]}],"git":{},"readingTime":{"minutes":0.78,"words":234},"filePathRelative":"demo/layout.md","autoDesc":true}');export{r as comp,o as data};
