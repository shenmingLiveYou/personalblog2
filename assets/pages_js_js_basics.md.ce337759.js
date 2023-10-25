import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.cfbd61a4.js";const m=JSON.parse('{"title":"JavaScript","description":"","frontmatter":{},"headers":[],"relativePath":"pages/js/js_basics.md","filePath":"pages/js/js_basics.md","lastUpdated":null}'),l={name:"pages/js/js_basics.md"},e=p(`<h1 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h1><h2 id="javascript的基础" tabindex="-1">JavaScript的基础： <a class="header-anchor" href="#javascript的基础" aria-label="Permalink to &quot;JavaScript的基础：&quot;">​</a></h2><pre><code>*1. JavaScript在HTML中的使用：
    ① 内部
        在html代码中使用&lt;script&gt;&lt;/script&gt;标签嵌入js程序
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">② 外部引入</span></span>
<span class="line"><span style="color:#E1E4E8;">        首先在外面定义一个后缀名为.js的文件，里面编写js脚本程序</span></span>
<span class="line"><span style="color:#E1E4E8;">        在html代码中使用</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">script src</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;目录/*.js&quot;</span><span style="color:#F97583;">&gt;&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">引入js文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    ③ 行内</span></span>
<span class="line"><span style="color:#E1E4E8;">        在html标签中使用on事件来执行js程序</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onclick</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;js程序&quot;</span><span style="color:#E1E4E8;">&gt;按钮&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> JS的语言执行方式：</span></span>
<span class="line"><span style="color:#E1E4E8;">    JS脚本程序可以放置带HTML的head头部、也可以放置在body体中。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">JS的执行顺序：自上向下，按顺序逐条执行</span></span>
<span class="line"><span style="color:#E1E4E8;">    内部与外部引入js不能共用一个script标签</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> 延迟执行JS</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">defer（了解）</span></span>
<span class="line"><span style="color:#E1E4E8;">    在script元素中设置defer属性，即告诉浏览器立即下载，但是会延迟执行。</span></span>
<span class="line"><span style="color:#E1E4E8;">    defer属性只适用于外部JS文件，不适用于script标签包含的脚本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> 异步加载JS</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">async（了解）</span></span>
<span class="line"><span style="color:#E1E4E8;">    在script标签设置async属性，让浏览器异步加载引入的js文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    因为是下载完立即执行，不能保证多个加载时的先后顺序，因此确保异步脚本之间互不依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">    async属性只适用于外部JS文件，不适用于script标签包含的脚本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#79B8FF;">5.</span><span style="color:#E1E4E8;"> JavaScript的输出：</span></span>
<span class="line"><span style="color:#E1E4E8;">    JavaScript 没有任何直接打印或者输出的函数。</span></span>
<span class="line"><span style="color:#E1E4E8;">    若要显示数据可以通过下面不同的方式来输出： </span></span>
<span class="line"><span style="color:#E1E4E8;">        window.</span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">( ) 弹出警告框</span></span>
<span class="line"><span style="color:#E1E4E8;">        document.</span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">( ) 方法将内容写到 </span><span style="color:#79B8FF;">HTML</span><span style="color:#E1E4E8;"> 文档中</span></span>
<span class="line"><span style="color:#E1E4E8;">        innerHTML 写入到 </span><span style="color:#79B8FF;">HTML</span><span style="color:#E1E4E8;"> 元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">( ) 写入到浏览器的控制台</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#79B8FF;">6.</span><span style="color:#E1E4E8;"> JavaScript语句</span></span>
<span class="line"><span style="color:#E1E4E8;">    JavaScript 语句可以是：变量声明、赋值、运算符、表达式、关键词和注释</span></span>
<span class="line"><span style="color:#E1E4E8;">    合理地使用空白符与代码换行缩进，以增加代码的可读性。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">7.</span><span style="color:#E1E4E8;"> JavaScript变量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">变量是指值可以变的量</span></span>
<span class="line"><span style="color:#E1E4E8;">    变量名是计算机内存中存储数据的标识符</span></span>
<span class="line"><span style="color:#E1E4E8;">    我们使用关键字 </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> 来声明变量 </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    ​在严格模式下，变量必须先声明，然后才能使用。</span></span>
<span class="line"><span style="color:#E1E4E8;">    代码首行使用 </span><span style="color:#9ECBFF;">&quot;use strict&quot;</span><span style="color:#E1E4E8;">;  即开启严格模式</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">② 外部引入</span></span>
<span class="line"><span style="color:#24292E;">        首先在外面定义一个后缀名为.js的文件，里面编写js脚本程序</span></span>
<span class="line"><span style="color:#24292E;">        在html代码中使用</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">script src</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;目录/*.js&quot;</span><span style="color:#D73A49;">&gt;&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">引入js文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    ③ 行内</span></span>
<span class="line"><span style="color:#24292E;">        在html标签中使用on事件来执行js程序</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onclick</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;js程序&quot;</span><span style="color:#24292E;">&gt;按钮&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> JS的语言执行方式：</span></span>
<span class="line"><span style="color:#24292E;">    JS脚本程序可以放置带HTML的head头部、也可以放置在body体中。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">JS的执行顺序：自上向下，按顺序逐条执行</span></span>
<span class="line"><span style="color:#24292E;">    内部与外部引入js不能共用一个script标签</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> 延迟执行JS</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">defer（了解）</span></span>
<span class="line"><span style="color:#24292E;">    在script元素中设置defer属性，即告诉浏览器立即下载，但是会延迟执行。</span></span>
<span class="line"><span style="color:#24292E;">    defer属性只适用于外部JS文件，不适用于script标签包含的脚本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> 异步加载JS</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">async（了解）</span></span>
<span class="line"><span style="color:#24292E;">    在script标签设置async属性，让浏览器异步加载引入的js文件</span></span>
<span class="line"><span style="color:#24292E;">    因为是下载完立即执行，不能保证多个加载时的先后顺序，因此确保异步脚本之间互不依赖</span></span>
<span class="line"><span style="color:#24292E;">    async属性只适用于外部JS文件，不适用于script标签包含的脚本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#005CC5;">5.</span><span style="color:#24292E;"> JavaScript的输出：</span></span>
<span class="line"><span style="color:#24292E;">    JavaScript 没有任何直接打印或者输出的函数。</span></span>
<span class="line"><span style="color:#24292E;">    若要显示数据可以通过下面不同的方式来输出： </span></span>
<span class="line"><span style="color:#24292E;">        window.</span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">( ) 弹出警告框</span></span>
<span class="line"><span style="color:#24292E;">        document.</span><span style="color:#6F42C1;">write</span><span style="color:#24292E;">( ) 方法将内容写到 </span><span style="color:#005CC5;">HTML</span><span style="color:#24292E;"> 文档中</span></span>
<span class="line"><span style="color:#24292E;">        innerHTML 写入到 </span><span style="color:#005CC5;">HTML</span><span style="color:#24292E;"> 元素</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">( ) 写入到浏览器的控制台</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#005CC5;">6.</span><span style="color:#24292E;"> JavaScript语句</span></span>
<span class="line"><span style="color:#24292E;">    JavaScript 语句可以是：变量声明、赋值、运算符、表达式、关键词和注释</span></span>
<span class="line"><span style="color:#24292E;">    合理地使用空白符与代码换行缩进，以增加代码的可读性。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">7.</span><span style="color:#24292E;"> JavaScript变量</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">变量是指值可以变的量</span></span>
<span class="line"><span style="color:#24292E;">    变量名是计算机内存中存储数据的标识符</span></span>
<span class="line"><span style="color:#24292E;">    我们使用关键字 </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> 来声明变量 </span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    ​在严格模式下，变量必须先声明，然后才能使用。</span></span>
<span class="line"><span style="color:#24292E;">    代码首行使用 </span><span style="color:#032F62;">&quot;use strict&quot;</span><span style="color:#24292E;">;  即开启严格模式</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,4),o=[e];function c(r,t,E,i,y,b){return n(),a("div",null,o)}const d=s(l,[["render",c]]);export{m as __pageData,d as default};
