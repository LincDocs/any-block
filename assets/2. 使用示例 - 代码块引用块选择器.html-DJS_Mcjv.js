import{_ as a,c as o,a as d,b as s,f as e,d as t,e as n,r,o as h}from"./app-Kd4c7TMS.js";const p={};function c(k,i){const l=r("RouteLink");return h(),o("div",null,[i[5]||(i[5]=d('<h1 id="代码块引用块选择器" tabindex="-1"><a class="header-anchor" href="#代码块引用块选择器"><span>代码块引用块选择器</span></a></h1><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h2><h3 id="消除块-代码-引用" tabindex="-1"><a class="header-anchor" href="#消除块-代码-引用"><span>消除块（代码/引用）</span></a></h3><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><p>引用行1 引用行2</p></div></div></div><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><p>var str = &quot;Hello World&quot; console.log(str)</p></div></div></div><h3 id="增添块-代码-引用" tabindex="-1"><a class="header-anchor" href="#增添块-代码-引用"><span>增添块（代码/引用）</span></a></h3><p>这里借助了“范围选择器”，详见下一节</p><p>{[code] ad-quote It is a good plugin }.</p><p>{[quote] [!note] 行1 行2 }.</p><h3 id="转化块" tabindex="-1"><a class="header-anchor" href="#转化块"><span>转化块</span></a></h3><p>块的转化有时也有大用，例如：</p>',11)),s("ul",null,[s("li",null,[i[3]||(i[3]=e("借用md格式 ")),s("ul",null,[s("li",null,[i[1]||(i[1]=e("像 Any-Block 就内置了很多这种功能，例如列表转化为其他树类格式。 在")),t(l,{to:"/v2%20old%20docs/docs/zh/5.%20%E6%8F%92%E4%BB%B6%E8%AE%BE%E8%AE%A1%E7%90%86%E5%BF%B5.html"},{default:n(()=>i[0]||(i[0]=[e("设计理念")])),_:1}),i[2]||(i[2]=e("中，也演示过没有callout语法的环境下，如何将引用块转Ad代码块"))])])]),i[4]||(i[4]=s("li",null,[e("借用代码格式 "),s("ul",null,[s("li",null,"反过来也行，例如mermaid是没有提供代码高亮功能的，写起来比较痛苦。"),s("li",null,[e("但在这里我们可以借助js的"),s("strong",null,"高亮"),e("来写mermaid代码，然后渲染回mermaid格式")])])],-1))]),i[6]||(i[6]=d(`<p>块的转化是非常灵活的，基于复合处理器，可以有很多种不同的写法： 比较笨拙的写法：</p><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><blockquote><p>行1 行2</p></blockquote></div></div></div><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello World&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div></div></div><p>更好的写法： （code2quote其实就相当于Xcode(true)|quote） （quote2code(js)其实就相当于Xquote|code(js)）</p><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">行1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">行2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></div></div></div><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><blockquote><p>console.log(&quot;Hello World&quot;)</p></blockquote></div></div></div><p>其中，如果要转化为callout语法的引用块的话，这里有个语法糖：用感叹号快捷表示，就不用像上一项那样写两行了</p><p>{[!info] ad-quote</p><p>dfsfs</p><p>dfsfsdafa }.</p><h2 id="一些比较有用的建议" tabindex="-1"><a class="header-anchor" href="#一些比较有用的建议"><span>一些比较有用的建议</span></a></h2><p>有时代码块/引用块的内容会比较长，折叠起来可能会比较方便</p><p>hide/fold 快捷指令，代码块默认折叠/可折叠</p><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello World&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div></div></div>`,14))])}const u=a(p,[["render",c],["__file","2. 使用示例 - 代码块引用块选择器.html.vue"]]),g=JSON.parse('{"path":"/v2%20old%20docs/docs/zh/2.%20%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B%20-%20%E4%BB%A3%E7%A0%81%E5%9D%97%E5%BC%95%E7%94%A8%E5%9D%97%E9%80%89%E6%8B%A9%E5%99%A8.html","title":"代码块引用块选择器","lang":"zh-CN","frontmatter":{"description":"代码块引用块选择器 基本使用 消除块（代码/引用） 引用行1 引用行2 var str = \\"Hello World\\" console.log(str) 增添块（代码/引用） 这里借助了“范围选择器”，详见下一节 {[code] ad-quote It is a good plugin }. {[quote] [!note] 行1 行2 }. 转化块 ...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/AnyBlock/v2%20old%20docs/docs/zh/2.%20%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B%20-%20%E4%BB%A3%E7%A0%81%E5%9D%97%E5%BC%95%E7%94%A8%E5%9D%97%E9%80%89%E6%8B%A9%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"AnyBlock"}],["meta",{"property":"og:title","content":"代码块引用块选择器"}],["meta",{"property":"og:description","content":"代码块引用块选择器 基本使用 消除块（代码/引用） 引用行1 引用行2 var str = \\"Hello World\\" console.log(str) 增添块（代码/引用） 这里借助了“范围选择器”，详见下一节 {[code] ad-quote It is a good plugin }. {[quote] [!note] 行1 行2 }. 转化块 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码块引用块选择器\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/AnyBlock/\\"}]}"]]},"headers":[{"level":1,"title":"代码块引用块选择器","slug":"代码块引用块选择器","link":"#代码块引用块选择器","children":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[{"level":3,"title":"消除块（代码/引用）","slug":"消除块-代码-引用","link":"#消除块-代码-引用","children":[]},{"level":3,"title":"增添块（代码/引用）","slug":"增添块-代码-引用","link":"#增添块-代码-引用","children":[]},{"level":3,"title":"转化块","slug":"转化块","link":"#转化块","children":[]}]},{"level":2,"title":"一些比较有用的建议","slug":"一些比较有用的建议","link":"#一些比较有用的建议","children":[]}]}],"git":{},"readingTime":{"minutes":1.38,"words":415},"filePathRelative":"v2 old docs/docs/zh/2. 使用示例 - 代码块引用块选择器.md","excerpt":"\\n<h2>基本使用</h2>\\n<h3>消除块（代码/引用）</h3>\\n<div class=\\"ab-note drop-shadow\\"><div class=\\"markdown-rendered\\"><div><p>引用行1\\n引用行2</p>\\n</div></div></div><div class=\\"ab-note drop-shadow\\"><div class=\\"markdown-rendered\\"><div><p>var str = \\"Hello World\\"\\nconsole.log(str)</p>\\n</div></div></div><h3>增添块（代码/引用）</h3>\\n<p>这里借助了“范围选择器”，详见下一节</p>","autoDesc":true,"bioChainData":{"outlink":[{"title":"5. 插件设计理念","link":"v2 old docs/docs/zh/5. 插件设计理念.html"}],"backlink":[],"localMap":{"nodes":[{"id":"v2 old docs/docs/zh/2. 使用示例 - 代码块引用块选择器.md","value":{"title":"2. 使用示例 - 代码块引用块选择器","path":"v2 old docs/docs/zh/2. 使用示例 - 代码块引用块选择器.md","outlink":["v2 old docs/docs/zh/5. 插件设计理念.md"],"backlink":[]}},{"id":"v2 old docs/docs/zh/5. 插件设计理念.md","value":{"title":"5. 插件设计理念","path":"v2 old docs/docs/zh/5. 插件设计理念.md","outlink":[],"backlink":[]}}],"links":[{"source":"v2 old docs/docs/zh/2. 使用示例 - 代码块引用块选择器.md","target":"v2 old docs/docs/zh/5. 插件设计理念.md"}]}}}');export{u as comp,g as data};
