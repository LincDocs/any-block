import{_ as l,c as t,a as n,e,b as a,r as o,o as r}from"./app-B7D9x8_1.js";const d={};function p(h,i){const s=o("Mermaid");return r(),t("div",null,[i[0]||(i[0]=n('<h1 id="开发随笔" tabindex="-1"><a class="header-anchor" href="#开发随笔"><span>开发随笔</span></a></h1><h2 id="for-开发者" tabindex="-1"><a class="header-anchor" href="#for-开发者"><span>For 开发者</span></a></h2><p>这个是我自己开发的 md-it 和 obsidian 通用插件，为了通用性，技术栈混合使用 CodeMirror、Obsidian Plugin、Markdown-it、VuePress Markdown 扩展。</p><p>可适用于：</p><ul><li>我的个人网站、VuePress、VuePress-Hope-Theme 文档构建</li><li>Obsidian 插件</li><li>规划未来开发的使用 Markdown-it 进行渲染的笔记软件</li><li>软件内文档查看的临时显示（我之前有个开发的软件就是这样的）</li></ul><p>后来发现，还是应该尽量脱耦，不然可能以后不用md-it呢？也说不准</p><p>ab的转化部分其实就是输入txt并输出html，理论上这玩意也是个md渲染引擎。应该弄个回调函数，然后自己处理一部分，再通过回调让原来处理另一部分。</p><p>技术相关：</p><p>如果你想学习开发插件，或了解更多该插件使用相关的技术，见：“MarkdownAbout” 相关的笔记（导航主页里的 “文档解析渲染/文档技巧”）。包含了 VuePress、CodeMirror、Markdown-it、Obsidian Plugin 等诸多东西</p><h2 id="开发过程-记录与学习笔记" tabindex="-1"><a class="header-anchor" href="#开发过程-记录与学习笔记"><span>开发过程，记录与学习笔记</span></a></h2><h3 id="软件构成" tabindex="-1"><a class="header-anchor" href="#软件构成"><span>软件构成</span></a></h3>',11)),e(s,{id:"mermaid-52",code:"eJxLL0osyFDwCeJyzKt0yslPzlbQ1bVTeNnQ+ax75dOZK+KBwsGpOanJJagKXuxd86x3EVSBc35eWWpRCRcAl0cf0g=="}),i[1]||(i[1]=a("h3",{id:"处理流程",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#处理流程"},[a("span",null,"处理流程")])],-1)),e(s,{id:"mermaid-56",code:"eJxLL0osyFDwCeLiKi5NgnBeNnQ+6175dOaKl80rnna0cSkAgX9ScWZKZmLey0krn66doKCrp2un8HRJy/MJbUB18U92L36+oPHp3OlEqHX2JULR0wl9cA4XWD0WyxR0gXpyU55Na382Zw2aImdffLLIxqOqS81L4eKC8cBSJRUl0TCBWKRQerF3zbPeRYhQ4kRRCNb6ZPfuZy39EJvAJgMAmouyjA=="}),i[2]||(i[2]=n('<p>转换器部分中</p><blockquote><p>txt、html、json类/list类、都可以互相转换或自己转化成自己</p></blockquote><h3 id="类图" tabindex="-1"><a class="header-anchor" href="#类图"><span>类图</span></a></h3><p>虽然是 TypeScript，而且代码整体更偏向于面向过程，但面向对象思维和类图还是要有的。</p><p>而且V1版本的模块化不够好，有是有模块化，但当时没想着功能要和Ob插件接口分离，没想着不去依赖底层</p><h4 id="v3-0-0" tabindex="-1"><a class="header-anchor" href="#v3-0-0"><span>V3.0.0</span></a></h4><p>V3做了以下改进：</p><ol><li>不再按文件区分处理器，而是更严格的按类区分。文件名改用主类名</li><li>不再直接通过Interface直接派生出许多，而是通过多层类来继承</li><li>更加分离公有方法和私有方法</li></ol>',8)),e(s,{id:"mermaid-97",code:"eJxLzkksLnbJTEwvSszl4kpMCijKT04tLs4v8k3MS0xPLVKw0dVVcHRyzs8rSy0qsVJ4sWj183ULn09o4+ICa0XIOSYVK1RzcaYlJpfkF1VqaCo8m7bz2eapzzaveNrWw1WLYrhnXklqEVBlqoJNDdD81Aq4DB5VOZnFJcSoK0lMykkFS4JZ+FSmVkBMhCgEANkqZtM="}),i[3]||(i[3]=a("h4",{id:"v2-2-0",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#v2-2-0"},[a("span",null,"V2.2.0")])],-1)),i[4]||(i[4]=a("p",null,"处理器",-1)),e(s,{id:"mermaid-104",code:"eJxLzkksLnbJTEwvSszlcnQKKMpPTi0uzi8KLkhNVrDR1VVAEwvOzC2wUkhMSSwoCclHlkstSI4vBkq+2Lvmac80PQQgxtTQ4tQiKwUkTUCAw45SoFKIHVxciUlwOd/EvMT01CJshlspvFi0+vm6hc8ntHGhOwbkHQWbGqCmlNTkfLiUoZGxCW6lqRVEKszJLC4hUmlJYlJOKlgOzCKgOLUCYi5CLQAeCqQa"}),i[5]||(i[5]=n('<h2 id="_1-5-3-版本更新问题" tabindex="-1"><a class="header-anchor" href="#_1-5-3-版本更新问题"><span>1.5.3 版本更新问题</span></a></h2><h3 id="如何回溯旧版" tabindex="-1"><a class="header-anchor" href="#如何回溯旧版"><span>如何回溯旧版</span></a></h3><p>参考：<a href="https://forum-zh.obsidian.md/t/topic/8821" target="_blank" rel="noopener noreferrer">Obsidian中文论坛 - Obsidian如何回退版本</a></p><p>直接使用旧安装包安装是无效的，会回到最新版本</p><ol><li>下载旧版 <ul><li>https://github.com/obsidianmd/obsidian-releases/releases/download/v0.14.15/Obsidian.0.14.15.exe 或者去 https://github.com/obsidianmd/obsidian-releases/releases 下载你需要的历史版本.(部分地方需要科学手段)</li></ul></li><li>卸载重装 <ul><li>下载到你需要的版本后，卸载新版 <code>C:\\Users\\{用户名}\\AppData\\Local\\Obsidian\\Uninstall Obsidian.exe</code>。然后，双击安装旧版。</li></ul></li><li>如果不成功，请尝试： <ul><li>关闭软件，把 <code>C:\\Users\\{用户名}\\AppData\\Roaming\\obsidian</code> 文件夹内的缓存清空（这里存放的是缓存文件,如果有担心,可以把里面的内容复制到桌面备份，防止意外）</li><li>vault 中 <code>.obsidian配置文件里workspace</code> 会影响版本，导致回退失败。可以删除缓存和workspace回退</li></ul></li></ol><h3 id="bug修复日志。obsidian-v1-5-8-新版本导致异常" tabindex="-1"><a class="header-anchor" href="#bug修复日志。obsidian-v1-5-8-新版本导致异常"><span>Bug修复日志。Obsidian V1.5.8 新版本导致异常</span></a></h3><p>AnyBlock 在实时模式下的转化有延迟。</p><ol><li><p>开启插件的一瞬间，当前打开的文档是生效的（正常）</p></li><li><p>切换文件后，新打开的文档可能不生效，当你要关闭这个文档时才会重新生效（不正常）</p><p>所以有时需要切换其他标签页再切回来，或者重新停启插件，才看看到正常的效果</p></li></ol><h4 id="obsidian-异常版本定位" tabindex="-1"><a class="header-anchor" href="#obsidian-异常版本定位"><span>Obsidian 异常版本定位</span></a></h4><ul><li>20221026，V1.0.3，正常</li><li>20221020，V1.1.8，正常</li><li>20221024，V1.1.9，覆盖安装异常 -&gt; 清缓存后正常</li><li>20231014，V1.4.16，覆盖安装异常 -&gt; 清缓存后正常</li><li><strong>20231026，V1.5.3，正常</strong></li><li><strong>20240222，V1.5.8，异常</strong></li><li>20240331，V1.5.12，异常</li><li>20240718，V1.6.7，异常（这个是在写到这里时，现在的最新的Obsidian版本）</li></ul><p>（覆盖安装的话版本可能有问题，进行版本定位时应该卸载、并删除缓存文件夹，再安装，才作准）</p><h4 id="原因猜想" tabindex="-1"><a class="header-anchor" href="#原因猜想"><span>原因猜想</span></a></h4><p>一开始始怀疑：</p><blockquote><p>另外发现一个1.6版本和旧版的区别：</p><ul><li><p>一是1.6安装时会多一个弹窗让你选择安装路径（以前Electron的一个诟病就是不能选择安装路径）</p></li><li><p>二是安装默认路径的变更：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">C:\\Users\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{用户名}</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">\\AppData\\Local\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         Obsidian</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\`</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">	# 旧</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">C:\\Users\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{用户名}</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">\\AppData\\Local\\Programs\\Obsidian\\</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">`	</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 新 1.5.3、1.5.8、1.5.12、1.6.7、……</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></blockquote><p>进一步调试怀疑：</p><blockquote><p>奇怪的是：新旧版本的输出日志没有任何区别，看起来插件运作是一切正常的。</p><p>后来怀疑是生命周期被改了</p></blockquote><h4 id="修复" tabindex="-1"><a class="header-anchor" href="#修复"><span>修复</span></a></h4><p>原来代码：<br><code>this.app.workspace.on(&#39;file-open&#39;, ……</code> 就是保证打开新文件的时候，给你把新文件的内容解析替换掉，很符合常规逻辑</p><p>现在代码新增：<br><code>this.app.workspace.on(&#39;layout-change&#39;, ……</code> 这才能保证新打开文件时，顺利将新文件的内容处理一遍</p><p>更新前后，打开文件时这两个钩子都会被触发。但是旧版本需要第一个钩子处处理，新版本需要在第二个钩子处处理</p>',20))])}const k=l(d,[["render",p]]),b=JSON.parse('{"path":"/docs/dev%20docs/%E5%BC%80%E5%8F%91%E9%9A%8F%E7%AC%94.html","title":"开发随笔","lang":"zh-CN","frontmatter":{"description":"开发随笔 For 开发者 这个是我自己开发的 md-it 和 obsidian 通用插件，为了通用性，技术栈混合使用 CodeMirror、Obsidian Plugin、Markdown-it、VuePress Markdown 扩展。 可适用于： 我的个人网站、VuePress、VuePress-Hope-Theme 文档构建 Obsidian 插...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/AnyBlock/docs/dev%20docs/%E5%BC%80%E5%8F%91%E9%9A%8F%E7%AC%94.html"}],["meta",{"property":"og:site_name","content":"AnyBlock"}],["meta",{"property":"og:title","content":"开发随笔"}],["meta",{"property":"og:description","content":"开发随笔 For 开发者 这个是我自己开发的 md-it 和 obsidian 通用插件，为了通用性，技术栈混合使用 CodeMirror、Obsidian Plugin、Markdown-it、VuePress Markdown 扩展。 可适用于： 我的个人网站、VuePress、VuePress-Hope-Theme 文档构建 Obsidian 插..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"开发随笔\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/AnyBlock/\\"}]}"]]},"git":{},"readingTime":{"minutes":4.51,"words":1353},"filePathRelative":"docs/dev docs/开发随笔.md","excerpt":"\\n<h2>For 开发者</h2>\\n<p>这个是我自己开发的 md-it 和 obsidian 通用插件，为了通用性，技术栈混合使用 CodeMirror、Obsidian Plugin、Markdown-it、VuePress Markdown 扩展。</p>\\n<p>可适用于：</p>\\n<ul>\\n<li>我的个人网站、VuePress、VuePress-Hope-Theme 文档构建</li>\\n<li>Obsidian 插件</li>\\n<li>规划未来开发的使用 Markdown-it 进行渲染的笔记软件</li>\\n<li>软件内文档查看的临时显示（我之前有个开发的软件就是这样的）</li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"docs/dev docs/开发随笔.md","value":{"title":"开发随笔","path":"docs/dev docs/开发随笔.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{k as comp,b as data};
