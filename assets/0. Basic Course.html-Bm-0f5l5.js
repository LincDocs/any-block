import{_ as i,c as r,a as s,b as e,f as n,d as a,r as t,o}from"./app-Kd4c7TMS.js";const c={};function p(u,l){const d=t("VPIcon");return o(),r("div",null,[l[2]||(l[2]=s(`<p><strong>ob library，please use Obsidian install AnyBlock plugin and open this sample</strong> You may need to switch between source/live/render modes frequently. Personal shortcuts are recommended：</p><ul><li><kbd>Ctrl</kbd> + <kbd>/</kbd> | Switch source and real-time（Default not set）</li><li><kbd>Alt </kbd> + <kbd>/</kbd> | Toggle edit and render（Default Ctrl+E）</li></ul><p>Plug-in recommended Settings：(Default)</p><h2 id="introduce" tabindex="-1"><a class="header-anchor" href="#introduce"><span>Introduce</span></a></h2><p>A Obsidian Plugin —— AnyBlock（It may be shortened to <code>AB</code>）. You can flexibility to create a &#39;Block&#39; by some means. It also provides some useful features, like <code>list to table</code>.</p><p>The plug-in consists of two core parts: the <strong>selector</strong> and the <strong>processor</strong>. A selector can select an area of text and turn it into a &quot;block.&quot; The processor can convert the selector into a &quot;block&quot; for some degree of reprocessing.</p><h2 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>Selector</span></a></h2><h3 id="selectors-include" tabindex="-1"><a class="header-anchor" href="#selectors-include"><span>Selectors include</span></a></h3><div class="ab-note drop-shadow"><div class="ab-deco-scroll ab-deco-scroll-x"><div class="markdown-rendered"><div><ul><li>list selector <ul><li>Usage: Add the header for <code>[processor name]</code> one or two lines above the <em>list</em>, noting that the header must be at the same level as the first line in the <em>list</em></li></ul></li><li>quote selector <ul><li>Usage: Add the header for <code>[processor name]</code> one or two lines above the <em>quote block</em>, noting that the header must be at the same level as the first line in the <em>quote block</em></li></ul></li><li>code selector (pre selector) <ul><li>Usage: Add the header for <code>[processor name]</code> one or two lines above the <em>code block</em>, noting that the header must be at the same level as the first line in the <em>code block</em></li></ul></li><li>title selector (heading selector) <ul><li>Usage: Add the header for <code>[processor name]</code> one or two lines above the <em>title</em>, noting that the header must be at the same level as the first line in the <em>title</em></li><li>Note: The selection may span what Obsidian considers &quot;minimum blocks&quot; and may be invalidated by Obsidian optimization in render mode</li></ul></li><li>head-tail selector <ul><li>Use: to start and end with <code>:::</code>, with the processor name written after the first <code>:::</code>, without adding <code>[]</code>. Just like code blocks, this is an md extension syntax for VuePress</li><li>Note: The selection may span what Obsidian considers &quot;minimum blocks&quot; and may be invalidated by Obsidian optimization in render mode</li></ul></li></ul></div></div></div></div><h3 id="selector-overview" tabindex="-1"><a class="header-anchor" href="#selector-overview"><span>Selector overview</span></a></h3><p>Here&#39;s an example: (@todo nested rendering is a bit buggy at the moment). <strong>You can also view all the selectors supported by the current version of the plugin through the Settings panel.</strong> %% 下面举例使用：（@todo 嵌套渲染目前还有点bug）%% %% 你也可以通过设置面板来查看当前版本插件所支持的所有选择器 %%</p><p>[title2list|list2tab]</p><h4 id="list-selector" tabindex="-1"><a class="header-anchor" href="#list-selector"><span>List Selector</span></a></h4><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">	-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">		-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">	-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></div></div><h4 id="quote-selector" tabindex="-1"><a class="header-anchor" href="#quote-selector"><span>Quote Selector</span></a></h4><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></div></div><h4 id="code-selector" tabindex="-1"><a class="header-anchor" href="#code-selector"><span>Code Selector</span></a></h4><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">~~~</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">~~~</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></div></div><h4 id="title-selector" tabindex="-1"><a class="header-anchor" href="#title-selector"><span>Title Selector</span></a></h4><p>A TAB bar like this is done using this selector %%像这里的转标签栏，就是使用标题选择器完成的%%</p><h4 id="head-tail-selector" tabindex="-1"><a class="header-anchor" href="#head-tail-selector"><span>Head-tail Selector</span></a></h4><p>This selector is not available in render mode %%该选择器在渲染模式不可用%%</p>`,22)),e("p",null,[l[0]||(l[0]=n(":")),a(d,{icon:`code()
1
2
3`}),l[1]||(l[1]=n(":"))]),l[3]||(l[3]=s(`<h4 id="table-selector" tabindex="-1"><a class="header-anchor" href="#table-selector"><span>Table Selector</span></a></h4><p>add in V2.2.0</p><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">|</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  |</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  |</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">|---|---|</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">|</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  |</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  |</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></div></div><h3 id="nested-support" tabindex="-1"><a class="header-anchor" href="#nested-support"><span>Nested support</span></a></h3><ul><li>Starting at v2.0.0, support for AB statements in lists or reference blocks (not restricted to use only at the root of the document)</li><li>Starting at v2.1.0, can support the use of AB block including AB block itself (@todo depends on html2md, bug probability is larger)</li></ul><p>[title2list|list2tab]</p><h4 id="list-in-quote" tabindex="-1"><a class="header-anchor" href="#list-in-quote"><span>List in Quote</span></a></h4><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><p>1 2</p><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 11</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">	-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 12</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">		-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 13</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">	-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 14</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></div></div><p>3 4</p></div></div></div><h4 id="quote-in-list" tabindex="-1"><a class="header-anchor" href="#quote-in-list"><span>Quote in List</span></a></h4>`,9)),l[4]||(l[4]=e("div",{class:"ab-note drop-shadow"},[e("table",{class:"ab-table ab-branch-table"},[e("tbody",null,[e("tr",null,[e("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"l1"),e("div",{class:"ab-note drop-shadow"},[e("div",{class:"markdown-rendered"},[e("div",null,[e("div",{class:"language-js line-numbers-mode","data-highlighter":"shiki","data-ext":"js","data-title":"js",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"1")]),n(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"2")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])])])])])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"l2")])])])])])],-1)),l[5]||(l[5]=e("h4",{id:"list-in-list",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#list-in-list"},[e("span",null,"List in List")])],-1)),l[6]||(l[6]=e("p",null,"Or even three levels of nesting %%甚至三层嵌套%%",-1)),l[7]||(l[7]=e("div",{class:"ab-note drop-shadow"},[e("table",{class:"ab-table ab-branch-table"},[e("tbody",null,[e("tr",null,[e("td",{rowspan:"3",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"1")])]),e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"2")])]),e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"3")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("div",{class:"ab-note drop-shadow"},[e("div",{class:"markdown-rendered"},[e("div",null,[e("div",{class:"ab-note drop-shadow"},[e("table",{class:"ab-table ab-branch-table"},[e("thead",null,[e("tr",null,[e("th",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"ll1")])]),e("th",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"ll2")])])])]),e("tbody",null,[e("tr",null,[e("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"ll3")])]),e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"ll4")])])])])])])])])])])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"5")])])])])])],-1)),l[8]||(l[8]=e("h4",{id:"quote-in-quote",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quote-in-quote"},[e("span",null,"Quote in Quote")])],-1)),l[9]||(l[9]=e("div",{class:"ab-note drop-shadow"},[e("div",{class:"ab-deco-title"},[e("div",{class:"ab-deco-title-title","title-type":"none"},[e("p",null," q in q")]),e("div",{class:"ab-deco-title-content"},[e("div",{class:"markdown-rendered"},[e("div",null,[e("blockquote",null,[e("p",null,"1 2"),e("div",{class:"ab-note drop-shadow"},[e("div",{class:"markdown-rendered"},[e("div",null,[e("div",{class:"language-js line-numbers-mode","data-highlighter":"shiki","data-ext":"js","data-title":"js",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},">"),e("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," c1"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"()")]),n(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},">"),e("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," c2"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"()")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])])])]),e("p",null,"3")])])])])])],-1)),l[10]||(l[10]=s('<h3 id="advanced-selector-underdevelopment" tabindex="-1"><a class="header-anchor" href="#advanced-selector-underdevelopment"><span>~~Advanced selector（underdevelopment） ~~</span></a></h3><p>%%高级选择器（未开发）%%</p><p><code>[&gt;XXX]</code> 可以缩减范围选择（此功能未开发） {^XXX} 所在层级选择，不同于下一层级选择（此功能未开发）</p><h2 id="processor" tabindex="-1"><a class="header-anchor" href="#processor"><span>Processor</span></a></h2><h3 id="processor-includes" tabindex="-1"><a class="header-anchor" href="#processor-includes"><span>Processor includes</span></a></h3>',5)),l[11]||(l[11]=e("div",{class:"ab-note drop-shadow"},[e("div",{class:"ab-deco-scroll ab-deco-scroll-x"},[e("table",{class:"ab-table ab-branch-table"},[e("tbody",null,[e("tr",null,[e("td",{rowspan:"2",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"render processor")])]),e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"text to element")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,'This includes parsing operations, which are actually more accurately called "parse and render" If no render operation is specified, it is an md render operation')])])]),e("tr",null,[e("td",{rowspan:"2",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"text processor")])]),e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"text to text")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"Text-only processing, that is, converting a series of plain text into another new plain text that can be superimposed")])])]),e("tr",null,[e("td",{rowspan:"2",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"decorate processor")])]),e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"element to element")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"Some decorations can be provided: overflow scrolling, etc. stackable")])])])])])])],-1)),l[12]||(l[12]=s('<p>[title(Note)]</p><ol><li>The processor can carry out multiple processing USES <code>|</code> intervals. A processor can consist of multiple text operations and multiple decoration operations, plus a render operation</li><li>The decorator is new to v1.3.0. Compared to the previous version, the decorator is more flexible and can make secondary changes to the already formed page elements</li><li>If the decorator is used directly on the text processor, an md rendering processor is automatically applied to the text first by default</li><li>The logic of three processors，as shown below [list2mermaid] <ul><li>Text--TextProcessor--&gt;Text</li><li>Text--RenderProcessor--&gt;UI</li><li>UI--DecorateProcessor--&gt;UI</li></ul></li></ol><h3 id="processor-overview" tabindex="-1"><a class="header-anchor" href="#processor-overview"><span>Processor overview</span></a></h3><p><strong>（The following may contain old or unimplemented or incompatible versions of the plug-in, or you may use the Settings panel to see all the processors supported by the plug-in you installed）</strong></p><p>**You can also view all processors supported by the current version of the plugin through the Settings panel **</p>',5)),l[13]||(l[13]=e("div",{class:"ab-note drop-shadow"},[e("div",{class:"ab-deco-overfold",style:{"max-height":"460px"},"is-fold":"true"},[e("table",{class:"ab-table ab-branch-table ab-deco-overfold-content"},[e("thead",null,[e("tr",null,[e("th",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"Type")])]),e("th",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"Analytic Method")])]),e("th",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"解析方法")])]),e("th",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"Rendering Method")])]),e("th",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"渲染方法")])]),e("th",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"can turn md/html?")])])])]),e("tbody",null,[e("tr",null,[e("td",{rowspan:"11",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"tree")])]),e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"ul-list")])]),e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"ul树 （一叉多层树）")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2ut/2mdut")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"转表格（规范）")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"md/html")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"li-list")])]),e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"li树 （一叉多层树）")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2lt/mdlt")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"转列表格")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"html")])])]),e("tr",null,[e("td",{rowspan:"3",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"ab-tree")])]),e("td",{rowspan:"3",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,'二层树 也叫 "消除最高级" （一叉二层树）')])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2timeline")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"转时间线")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"mermaid")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2tab")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"转标签栏")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"html")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2chat")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"转对话")])])]),e("tr",null,[e("td",{rowspan:"6",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"tree-list")])]),e("td",{rowspan:"6",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"树列表 （多叉多层树）")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2table/2mdtable")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"转树表格")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"html")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2mermaid")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"转流程图")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"mermaid/html")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2mindmap")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"转思维导图")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"html")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2tree")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"长得像树的树状图")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"html")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2xuri")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"旭日图")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"html")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2brace")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"括弧分类图")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"html")])])]),e("tr",null,[e("td",{rowspan:"14",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"other")])]),e("td",{rowspan:"4",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"title")])]),e("td",{rowspan:"4",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"标题级（语法糖）")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2list+list2xxx")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"(组合使用，下面提供了几种语法糖)")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2tab")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2table")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2mindmap")])])]),e("tr",null,[e("td",{rowspan:"2",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"code")])]),e("td",{rowspan:"2",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"一定代码")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"2doctable")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"转表格（文档生成）")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"html")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"json")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"这个不能转树，只能说转可折叠渲染")])])]),e("tr",null,[e("td",{rowspan:"2",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"common")])]),e("td",{rowspan:"2",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"通用")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"text")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"纯文本")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"md")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"md")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"md渲染")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"md")])])]),e("tr",null,[e("td",{rowspan:"6",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"render")])]),e("td",{rowspan:"6",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,'渲染 （理论上为 "渲染修饰器" 但该功能没做）')])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"flod")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"(折叠类)可折叠")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"md+")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"hide")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"(折叠类)默认折叠")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"md+")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"heimu")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"(折叠类)黑幕遮挡")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"html")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"limit()/part()")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"(折叠类)限高折叠")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"html")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"scroll()")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"(折叠类)限高滚动")])]),e("td",{rowspan:"1",col_index:"5",class:"markdown-rendered"},[e("div",null,[e("p",null,"html")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"title()")])]),e("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[e("div",null,[e("p",null,"增加块标题（代码块可能会很常用）")])])])])]),e("div",{class:"ab-deco-overfold-button"},"展开")])],-1)),l[14]||(l[14]=e("p",null,[n("Supported "),e("code",null,"text processor"),n(":")],-1)),l[15]||(l[15]=e("div",{class:"ab-note drop-shadow"},[e("table",{class:"ab-table ab-branch-table"},[e("thead",null,[e("tr",null,[e("th",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"Type")])]),e("th",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"类型")])]),e("th",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"processor")])]),e("th",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"处理器")])])])]),e("tbody",null,[e("tr",null,[e("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"title")])]),e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"标题类")])]),e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"title2list")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"转列表文本，title最重要的处理器，可配合list渲染器使用")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"tree-indent")])]),e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"树缩进")])]),e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"indent2list")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"缩进转列表")])])]),e("tr",null,[e("td",{rowspan:"7",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"code/quote")])]),e("td",{rowspan:"7",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"代码或引用块")])]),e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"X")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"根据选择器自动解除块")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"code/code(str)")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"变代码块")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"Xcode/Xcode(bool)")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"解除代码块")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"quote")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"变引用块")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"Xquote")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"解除引用块")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"code2quote")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"代码块转引用块")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"quote2code")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"引用块转代码块")])])]),e("tr",null,[e("td",{rowspan:"4",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"text")])]),e("td",{rowspan:"4",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"纯文本操作")])]),e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"replace")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"替换（带参）")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"slice()")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"切片（例如切割1,-1，也可以达到类似Xcode的效果）")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"listroot")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"增加列表根")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"2tree-indent")])]),e("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[e("div",null,[e("p",null,"列表转缩进")])])])])])],-1)),l[16]||(l[16]=s("<p>三种可解析为树的选择器的差异 [2table]</p><ul><li>&lt; 选择器| 可解析层次| 在ul-list里解析的区别</li><li>列表选择器| 树层次（&gt;0）| 首列仅解析列表层，<code>|</code>为分割</li><li>负列表选择器| 树层级（&gt;-4）| 首列仅解析负列表层</li><li>标题选择器| 树层级（&gt;-9）| 首列仅解析标题层</li></ul><p>补充：</p><ul><li><code>2</code> 表示 <code>to</code> 的意思（就是一种格式转化为另一种格式）</li><li><code>X</code> 表示 <code>去除</code> 的意思（例如去除引用块或代码块）</li></ul>",4))])}const k=i(c,[["render",p],["__file","0. Basic Course.html.vue"]]),m=JSON.parse('{"path":"/v2%20old%20docs/docs/en/0.%20Basic%20Course.html","title":"0. Basic Course","lang":"zh-CN","frontmatter":{"description":"ob library，please use Obsidian install AnyBlock plugin and open this sample You may need to switch between source/live/render modes frequently. Personal shortcuts are recommende...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/AnyBlock/v2%20old%20docs/docs/en/0.%20Basic%20Course.html"}],["meta",{"property":"og:site_name","content":"AnyBlock"}],["meta",{"property":"og:description","content":"ob library，please use Obsidian install AnyBlock plugin and open this sample You may need to switch between source/live/render modes frequently. Personal shortcuts are recommende..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/AnyBlock/\\"}]}"]]},"headers":[{"level":2,"title":"Introduce","slug":"introduce","link":"#introduce","children":[]},{"level":2,"title":"Selector","slug":"selector","link":"#selector","children":[{"level":3,"title":"Selectors include","slug":"selectors-include","link":"#selectors-include","children":[]},{"level":3,"title":"Selector overview","slug":"selector-overview","link":"#selector-overview","children":[{"level":4,"title":"List Selector","slug":"list-selector","link":"#list-selector","children":[]},{"level":4,"title":"Quote Selector","slug":"quote-selector","link":"#quote-selector","children":[]},{"level":4,"title":"Code Selector","slug":"code-selector","link":"#code-selector","children":[]},{"level":4,"title":"Title Selector","slug":"title-selector","link":"#title-selector","children":[]},{"level":4,"title":"Head-tail Selector","slug":"head-tail-selector","link":"#head-tail-selector","children":[]},{"level":4,"title":"Table Selector","slug":"table-selector","link":"#table-selector","children":[]}]},{"level":3,"title":"Nested support","slug":"nested-support","link":"#nested-support","children":[{"level":4,"title":"List in Quote","slug":"list-in-quote","link":"#list-in-quote","children":[]},{"level":4,"title":"Quote in List","slug":"quote-in-list","link":"#quote-in-list","children":[]},{"level":4,"title":"List in List","slug":"list-in-list","link":"#list-in-list","children":[]},{"level":4,"title":"Quote in Quote","slug":"quote-in-quote","link":"#quote-in-quote","children":[]}]},{"level":3,"title":"~~Advanced selector（underdevelopment） ~~","slug":"advanced-selector-underdevelopment","link":"#advanced-selector-underdevelopment","children":[]}]},{"level":2,"title":"Processor","slug":"processor","link":"#processor","children":[{"level":3,"title":"Processor includes","slug":"processor-includes","link":"#processor-includes","children":[]},{"level":3,"title":"Processor overview","slug":"processor-overview","link":"#processor-overview","children":[]}]}],"git":{},"readingTime":{"minutes":4.91,"words":1474},"filePathRelative":"v2 old docs/docs/en/0. Basic Course.md","excerpt":"<p><strong>ob library，please use Obsidian install AnyBlock plugin and open this sample</strong>\\nYou may need to switch between source/live/render modes frequently. Personal shortcuts are recommended：</p>\\n<ul>\\n<li><kbd>Ctrl</kbd> + <kbd>/</kbd> | Switch source and real-time（Default not set）</li>\\n<li><kbd>Alt </kbd> + <kbd>/</kbd> | Toggle edit and render（Default Ctrl+E）</li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"v2 old docs/docs/en/0. Basic Course.md","value":{"title":"0. Basic Course","path":"v2 old docs/docs/en/0. Basic Course.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{k as comp,m as data};
