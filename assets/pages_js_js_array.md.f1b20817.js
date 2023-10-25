import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.cfbd61a4.js";const u=JSON.parse('{"title":"JavaScript数组","description":"","frontmatter":{},"headers":[],"relativePath":"pages/js/js_array.md","filePath":"pages/js/js_array.md","lastUpdated":null}'),p={name:"pages/js/js_array.md"},e=l(`<h1 id="javascript数组" tabindex="-1">JavaScript数组 <a class="header-anchor" href="#javascript数组" aria-label="Permalink to &quot;JavaScript数组&quot;">​</a></h1><h2 id="js数组" tabindex="-1">JS数组 <a class="header-anchor" href="#js数组" aria-label="Permalink to &quot;JS数组&quot;">​</a></h2><pre><code>1. 数组的介绍：
    JavaScript中的数组是一个有序的列表，可以在数组中存放任意类型的数据(元素)，
    并且数组长度可以动态调整。
</code></pre><h2 id="创建数组" tabindex="-1">创建数组： <a class="header-anchor" href="#创建数组" aria-label="Permalink to &quot;创建数组：&quot;">​</a></h2><pre><code>在JS中有两种方式创建数组：
1. new Array（）使用构造函数Array（）来创建数组
    var  a = new Array();
    var  a = new Array(&#39;北京&#39;,&#39;深圳&#39;,&#39;上海&#39;);
    var  a = new Array(10);
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 使用字面量创建数组</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;">  a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;">  a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 使用字面量创建数组</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;">  a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;">  a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">30</span><span style="color:#24292E;">];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="数组的使用" tabindex="-1">数组的使用： <a class="header-anchor" href="#数组的使用" aria-label="Permalink to &quot;数组的使用：&quot;">​</a></h2><pre><code>1. 数组的使用：
    var  a = [10,20,30]; // 定义数组
    console.log(a[1]); // 获取数组中指定位置上的值
    a[1] = 200; // 修改数组指定位置上的值
    a[3] = 400; // 添加值
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 数组的遍历</span></span>
<span class="line"><span style="color:#E1E4E8;">在JavaScript中有很多种遍历数组的语句：（今天先介绍3种）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> 使用 for 循环语句</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 使用“for</span><span style="color:#F97583;">...in</span><span style="color:#E1E4E8;">”循环语句</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> 使用“for…</span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;">”</span><span style="color:#B392F0;">循环语句</span><span style="color:#E1E4E8;"> (ES6标准)</span></span>
<span class="line"><span style="color:#E1E4E8;">遍历数组时，for…</span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> 最佳，遍历对象时，for…</span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> 最佳。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">检索数组</span><span style="color:#E1E4E8;">(判断是否是一个数组)</span></span>
<span class="line"><span style="color:#E1E4E8;">    1.使用 </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">操作符判断</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 使用 Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">() 判断</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> 数组对象的属性和方法：</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 数组的遍历</span></span>
<span class="line"><span style="color:#24292E;">在JavaScript中有很多种遍历数组的语句：（今天先介绍3种）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> 使用 for 循环语句</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 使用“for</span><span style="color:#D73A49;">...in</span><span style="color:#24292E;">”循环语句</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> 使用“for…</span><span style="color:#D73A49;">of</span><span style="color:#24292E;">”</span><span style="color:#6F42C1;">循环语句</span><span style="color:#24292E;"> (ES6标准)</span></span>
<span class="line"><span style="color:#24292E;">遍历数组时，for…</span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> 最佳，遍历对象时，for…</span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> 最佳。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">检索数组</span><span style="color:#24292E;">(判断是否是一个数组)</span></span>
<span class="line"><span style="color:#24292E;">    1.使用 </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">操作符判断</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 使用 Array.</span><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">() 判断</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> 数组对象的属性和方法：</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="数组的增删改查" tabindex="-1">数组的增删改查 <a class="header-anchor" href="#数组的增删改查" aria-label="Permalink to &quot;数组的增删改查&quot;">​</a></h2><pre><code>1. 数组元素的添加
    在数组尾部添加
    在数组首位添加（插入）
    在数组内部添加（插入）
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 数组元素的删除：</span></span>
<span class="line"><span style="color:#E1E4E8;">    从数组的尾部删除一个元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    从数组的头部删除一个元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">从数组的中间</span><span style="color:#E1E4E8;">(某个索引值)删除一个元素</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> 修改</span></span>
<span class="line"><span style="color:#E1E4E8;">    指定数组索引下标进行赋值，就是修改操作</span></span>
<span class="line"><span style="color:#E1E4E8;">    arr[index] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> 获取</span></span>
<span class="line"><span style="color:#E1E4E8;">    指定数组下标获取对应的元素值</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr[index];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 数组元素的删除：</span></span>
<span class="line"><span style="color:#24292E;">    从数组的尾部删除一个元素</span></span>
<span class="line"><span style="color:#24292E;">    从数组的头部删除一个元素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">从数组的中间</span><span style="color:#24292E;">(某个索引值)删除一个元素</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> 修改</span></span>
<span class="line"><span style="color:#24292E;">    指定数组索引下标进行赋值，就是修改操作</span></span>
<span class="line"><span style="color:#24292E;">    arr[index] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> 获取</span></span>
<span class="line"><span style="color:#24292E;">    指定数组下标获取对应的元素值</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr[index];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="多维数组" tabindex="-1">多维数组： <a class="header-anchor" href="#多维数组" aria-label="Permalink to &quot;多维数组：&quot;">​</a></h2><pre><code>多维数组: 数组里面原始值还是一个数组时，就称为多维数组
    var a = [
        [10,20,30],
        [40,50,60],
        [70,80,90]
    ];
</code></pre><h2 id="数组对象的方法" tabindex="-1">数组对象的方法： <a class="header-anchor" href="#数组对象的方法" aria-label="Permalink to &quot;数组对象的方法：&quot;">​</a></h2><pre><code>方法（函数）快速了解：
    功能：
    参数：
    返回值：
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">()	将新元素添加到数组的末尾，并返回新的长度。</span></span>
<span class="line"><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">()	删除数组的最后一个元素，并返回该元素。</span></span>
<span class="line"><span style="color:#B392F0;">unshift</span><span style="color:#E1E4E8;">()	将新元素添加到数组的开头，并返回新的长度。</span></span>
<span class="line"><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">()	删除数组的第一个元素，并返回该元素。</span></span>
<span class="line"><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">()	从数组中添加</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">删除元素。</span></span>
<span class="line"><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">()	将数组的所有元素连接成一个字符串。</span></span>
<span class="line"><span style="color:#B392F0;">reverse</span><span style="color:#E1E4E8;">()	反转数组中元素的顺序。</span></span>
<span class="line"><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">()	连接两个或多个数组，并返回已连接数组的副本。</span></span>
<span class="line"><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">()	选择数组的一部分，并返回新数组。</span></span>
<span class="line"><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">()	对数组的元素进行排序。</span></span>
<span class="line"><span style="color:#B392F0;">valueOf</span><span style="color:#E1E4E8;">()	返回数组的原始值。</span></span>
<span class="line"><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">()	将数组转换为字符串，并返回结果。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">push</span><span style="color:#24292E;">()	将新元素添加到数组的末尾，并返回新的长度。</span></span>
<span class="line"><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">()	删除数组的最后一个元素，并返回该元素。</span></span>
<span class="line"><span style="color:#6F42C1;">unshift</span><span style="color:#24292E;">()	将新元素添加到数组的开头，并返回新的长度。</span></span>
<span class="line"><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">()	删除数组的第一个元素，并返回该元素。</span></span>
<span class="line"><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">()	从数组中添加</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">删除元素。</span></span>
<span class="line"><span style="color:#6F42C1;">join</span><span style="color:#24292E;">()	将数组的所有元素连接成一个字符串。</span></span>
<span class="line"><span style="color:#6F42C1;">reverse</span><span style="color:#24292E;">()	反转数组中元素的顺序。</span></span>
<span class="line"><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">()	连接两个或多个数组，并返回已连接数组的副本。</span></span>
<span class="line"><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">()	选择数组的一部分，并返回新数组。</span></span>
<span class="line"><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">()	对数组的元素进行排序。</span></span>
<span class="line"><span style="color:#6F42C1;">valueOf</span><span style="color:#24292E;">()	返回数组的原始值。</span></span>
<span class="line"><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">()	将数组转换为字符串，并返回结果。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,17),o=[e];function r(c,t,i,E,y,d){return n(),a("div",null,o)}const h=s(p,[["render",r]]);export{u as __pageData,h as default};
