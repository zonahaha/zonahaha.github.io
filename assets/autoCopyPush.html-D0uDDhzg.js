import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as i,o as e}from"./app-D1imL-V6.js";const l={};function p(t,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>把当前仓库项目进行打包，然后把打包完成的文件复制到另一个仓库，再提交到远程仓库</p><h2 id="步骤拆分" tabindex="-1"><a class="header-anchor" href="#步骤拆分"><span>步骤拆分</span></a></h2><div class="hint-container tip"><p class="hint-container-title">step by step</p><ul><li>指定 node 版本 20</li><li>判断是否已经打包过了，需不需要重新打包</li><li>开始打包/跳过打包</li><li>开始复制文件</li><li>获取 git 提交信息</li><li>开始 git 提交代码</li></ul></div><h2 id="具体代码" tabindex="-1"><a class="header-anchor" href="#具体代码"><span>具体代码</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set -e  # 出现错误时立即退出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>targetPath=&#39;/Users/zhanjingjing/Documents/zonahaha.github.io/&#39;</span></span>
<span class="line"><span>distPath=&#39;src/.vuepress/dist/index.html&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export NVM_DIR=&quot;$HOME/.nvm&quot;</span></span>
<span class="line"><span>[ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/nvm.sh&quot;  # 这将加载 nvm</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>nvm use 20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>node --version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ -e &quot;$distPath&quot; ];then</span></span>
<span class="line"><span>    echo &quot;打包文件已存在，是否跳过打包(y/n)？&quot;</span></span>
<span class="line"><span>    read skipBuild</span></span>
<span class="line"><span>    skipBuild=&quot;\${skipBuild:-&#39;y&#39;}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if [ &quot;$skipBuild&quot; == &quot;y&quot; ]; then</span></span>
<span class="line"><span>        echo &#39;跳过打包，直接复制现有文件&#39;</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        echo &#39;开始打包&#39;</span></span>
<span class="line"><span>        npm run build</span></span>
<span class="line"><span>        echo &#39;打包成功&#39;</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &#39;开始打包&#39;</span></span>
<span class="line"><span>    npm run build</span></span>
<span class="line"><span>    echo &#39;打包成功&#39;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &#39;开始复制文件&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cp -r src/.vuepress/dist/* $targetPath</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd $targetPath</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &#39;请输入本次代码提交commit message（feat(all): 新增一个碎片）:&#39;</span></span>
<span class="line"><span>read commitMsg</span></span>
<span class="line"><span>commitMsg=&quot;\${commitMsg:-feat(all): 新增一个碎片}&quot; # 使用默认值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &#39;开始提交代码&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &quot;$commitMsg&quot;</span></span>
<span class="line"><span>git push origin main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &#39;推送远程成功&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &#39;打包并推送成功&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exit 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const r=s(l,[["render",p],["__file","autoCopyPush.html.vue"]]),o=JSON.parse('{"path":"/demo/autoCopyPush.html","title":"复制文件自动提交","lang":"zh-CN","frontmatter":{"title":"复制文件自动提交","icon":"gears","order":4,"category":["Guide"],"tag":["build","copy","push"],"description":"Introduction 把当前仓库项目进行打包，然后把打包完成的文件复制到另一个仓库，再提交到远程仓库 步骤拆分 step by step 指定 node 版本 20 判断是否已经打包过了，需不需要重新打包 开始打包/跳过打包 开始复制文件 获取 git 提交信息 开始 git 提交代码 具体代码","head":[["meta",{"property":"og:url","content":"https://zonahaha.github.io/demo/autoCopyPush.html"}],["meta",{"property":"og:site_name","content":"hello zona😊"}],["meta",{"property":"og:title","content":"复制文件自动提交"}],["meta",{"property":"og:description","content":"Introduction 把当前仓库项目进行打包，然后把打包完成的文件复制到另一个仓库，再提交到远程仓库 步骤拆分 step by step 指定 node 版本 20 判断是否已经打包过了，需不需要重新打包 开始打包/跳过打包 开始复制文件 获取 git 提交信息 开始 git 提交代码 具体代码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"build"}],["meta",{"property":"article:tag","content":"copy"}],["meta",{"property":"article:tag","content":"push"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"复制文件自动提交\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zona\\",\\"url\\":\\"https://github.com/zonahaha/zonahaha.github.io.git\\"}]}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"步骤拆分","slug":"步骤拆分","link":"#步骤拆分","children":[]},{"level":2,"title":"具体代码","slug":"具体代码","link":"#具体代码","children":[]}],"git":{},"readingTime":{"minutes":1.12,"words":335},"filePathRelative":"demo/autoCopyPush.md","autoDesc":true}');export{r as comp,o as data};
