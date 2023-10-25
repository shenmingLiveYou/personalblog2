import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.cfbd61a4.js";const u=JSON.parse('{"title":"JS对象","description":"","frontmatter":{},"headers":[],"relativePath":"pages/js/js_object.md","filePath":"pages/js/js_object.md","lastUpdated":null}'),p={name:"pages/js/js_object.md"},o=l(`<h1 id="js对象" tabindex="-1">JS对象 <a class="header-anchor" href="#js对象" aria-label="Permalink to &quot;JS对象&quot;">​</a></h1><h2 id="理解javascript对象" tabindex="-1">理解JavaScript对象： <a class="header-anchor" href="#理解javascript对象" aria-label="Permalink to &quot;理解JavaScript对象：&quot;">​</a></h2><pre><code>1. 为何要使用对象？
    程序有两个环境：开发环境和生产环境
    为了开发更好的程序：易维护性、可扩展性、可移植性
    不同的程序设计：面向过程、面向对象、面向切面。
    其中面向对象优点：
        符合人们认识事物的规律
        改善了程序的可读性
        使人机交互更加贴近自然语言
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 何为对象？</span></span>
<span class="line"><span style="color:#E1E4E8;">    对象的含义是指具体的某一个事物</span></span>
<span class="line"><span style="color:#E1E4E8;">    在面向对象程序设计中，对象包含两个含义，其中一个是数据，另外一个是动作</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 何为对象？</span></span>
<span class="line"><span style="color:#24292E;">    对象的含义是指具体的某一个事物</span></span>
<span class="line"><span style="color:#24292E;">    在面向对象程序设计中，对象包含两个含义，其中一个是数据，另外一个是动作</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="javascript对象定义" tabindex="-1">JavaScript对象定义： <a class="header-anchor" href="#javascript对象定义" aria-label="Permalink to &quot;JavaScript对象定义：&quot;">​</a></h2><pre><code>在 JavaScript 中，几乎“所有事物”都是对象。
在 JavaScript 中，除了原始值，都是对象。
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> 使用关键词 new创建对象：</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    obj.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;大哥&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    obj.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">34</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    obj.</span><span style="color:#B392F0;">eat</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;吃卤煮~~&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 使用工厂类来创建对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPerson</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">age</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">gender</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        obj.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"><span style="color:#E1E4E8;">        obj.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> age;</span></span>
<span class="line"><span style="color:#E1E4E8;">        obj.gender </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gender;</span></span>
<span class="line"><span style="color:#E1E4E8;">        obj.</span><span style="color:#B392F0;">eat</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(obj.name</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&#39;吃卤煮~~&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> obj;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">使用构造函数</span><span style="color:#E1E4E8;">(方法)创建对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">构造器的名字</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">构造的属性值</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.属性名字 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> 属性值</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objectName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">FunctionName</span><span style="color:#E1E4E8;">( args )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">使用对象字面量创建对象</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> ob </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {name:</span><span style="color:#9ECBFF;">&quot;张三&quot;</span><span style="color:#E1E4E8;">, sex:</span><span style="color:#9ECBFF;">&quot;男&quot;</span><span style="color:#E1E4E8;">, age:</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> 使用关键词 new创建对象：</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    obj.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;大哥&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    obj.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">34</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    obj.</span><span style="color:#6F42C1;">eat</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;吃卤煮~~&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 使用工厂类来创建对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPerson</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">,</span><span style="color:#E36209;">age</span><span style="color:#24292E;">,</span><span style="color:#E36209;">gender</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        obj.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">        obj.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> age;</span></span>
<span class="line"><span style="color:#24292E;">        obj.gender </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> gender;</span></span>
<span class="line"><span style="color:#24292E;">        obj.</span><span style="color:#6F42C1;">eat</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(obj.name</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&#39;吃卤煮~~&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> obj;</span></span>
<span class="line"><span style="color:#24292E;">    } </span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">使用构造函数</span><span style="color:#24292E;">(方法)创建对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">构造器的名字</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">构造的属性值</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.属性名字 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> 属性值</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objectName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">FunctionName</span><span style="color:#24292E;">( args )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">使用对象字面量创建对象</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> ob </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {name:</span><span style="color:#032F62;">&quot;张三&quot;</span><span style="color:#24292E;">, sex:</span><span style="color:#032F62;">&quot;男&quot;</span><span style="color:#24292E;">, age:</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="javascript对象属性" tabindex="-1">JavaScript对象属性： <a class="header-anchor" href="#javascript对象属性" aria-label="Permalink to &quot;JavaScript对象属性：&quot;">​</a></h2><pre><code>1. 对象的属性介绍：
    对象的属性是由键-值对组成的
    所有的键都被称作是这个对象的属性，值叫做属性值
2. 属性的增和改
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> 属性的删除</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">delete</span><span style="color:#E1E4E8;"> 对象.属性名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> 属性的查询：</span></span>
<span class="line"><span style="color:#E1E4E8;">    对象.属性名 </span></span>
<span class="line"><span style="color:#E1E4E8;">    对象[</span><span style="color:#9ECBFF;">&#39;属性名&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;属性名&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    对象[k]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">5.</span><span style="color:#E1E4E8;"> for..in语句遍历对象属性</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> 属性的删除</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">delete</span><span style="color:#24292E;"> 对象.属性名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> 属性的查询：</span></span>
<span class="line"><span style="color:#24292E;">    对象.属性名 </span></span>
<span class="line"><span style="color:#24292E;">    对象[</span><span style="color:#032F62;">&#39;属性名&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;属性名&quot;</span></span>
<span class="line"><span style="color:#24292E;">    对象[k]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">5.</span><span style="color:#24292E;"> for..in语句遍历对象属性</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="对象的方法" tabindex="-1">对象的方法： <a class="header-anchor" href="#对象的方法" aria-label="Permalink to &quot;对象的方法：&quot;">​</a></h2><pre><code>4.1 创建对象方法
4.2 访问对象方法
4.3 this关键字的使用场景：  
    this关键字介绍：
     this是一个内置的变量，经常在函数或方法中使用，代表当前调用者对象。
     ① this的使用场景--在普通函数内部
     ② this的使用场景--在构造函数内部
     ③ this的使用场景--在对象的方法中使用
     ④ this的使用场景--事件回调函数内部
     ⑤ call和apply调用的内部（后续讲解）
4.4 字符串内建方法
    字符串的定义方式：单引号&#39;&#39;  双引号 &quot;&quot;   反单引号 \` \`(ES6)
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">*</span><span style="color:#B392F0;">toUpperCase</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 把字符串转化大写</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 把字符串转化小写</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">()      </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 找到对应索引位置的字符</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">()  </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 找到对应索引位置的字符的Unicode码</span></span>
<span class="line"><span style="color:#E1E4E8;">    String.</span><span style="color:#B392F0;">fromCharCode</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 把unicode码转化为对应的字符</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">()     </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 从原串当中查找指定的子串，求出子串下标位置（方向左</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">右）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">lastIndexOf</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 从原串当中查找指定的子串，求出子串下标位置（方向右</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">左）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">()      </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 合并字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">()      </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 从原串当中截取指定位置（索引）的字符串，形成新串</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">substr</span><span style="color:#E1E4E8;">()      </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 从原串当中截取的字符串，形成新串</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">()   </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 从原串当中截取的字符串，形成新串</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">()     </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 字符串替换操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">localCompare</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 比较原串和指定的字符串大小</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">()       </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 以指定字符为间隔（切割点）将字符串转化为数组</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">startswith</span><span style="color:#E1E4E8;">()  </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 判断是否以指定字符串开头</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">endswith</span><span style="color:#E1E4E8;">()    </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 判断是否以指定字符串结尾</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">()    </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 判断是否包含指定的字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">repeat</span><span style="color:#E1E4E8;">()      </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> 重复指定次数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">()    </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">字符串方法在线文档：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//www.w3school.com.cn/jsref/jsref_obj_string.asp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">4.5</span><span style="color:#E1E4E8;"> getter方法</span></span>
<span class="line"><span style="color:#79B8FF;">4.6</span><span style="color:#E1E4E8;"> setter方法</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">toUpperCase</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 把字符串转化大写</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">toLowerCase</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 把字符串转化小写</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">()      </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 找到对应索引位置的字符</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">charCodeAt</span><span style="color:#24292E;">()  </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 找到对应索引位置的字符的Unicode码</span></span>
<span class="line"><span style="color:#24292E;">    String.</span><span style="color:#6F42C1;">fromCharCode</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 把unicode码转化为对应的字符</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">()     </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 从原串当中查找指定的子串，求出子串下标位置（方向左</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">右）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">lastIndexOf</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 从原串当中查找指定的子串，求出子串下标位置（方向右</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">左）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">()      </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 合并字符串</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">()      </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 从原串当中截取指定位置（索引）的字符串，形成新串</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">substr</span><span style="color:#24292E;">()      </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 从原串当中截取的字符串，形成新串</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">substring</span><span style="color:#24292E;">()   </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 从原串当中截取的字符串，形成新串</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">()     </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 字符串替换操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">localCompare</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 比较原串和指定的字符串大小</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">()       </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 以指定字符为间隔（切割点）将字符串转化为数组</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">startswith</span><span style="color:#24292E;">()  </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 判断是否以指定字符串开头</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">endswith</span><span style="color:#24292E;">()    </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 判断是否以指定字符串结尾</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">()    </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 判断是否包含指定的字符串</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">repeat</span><span style="color:#24292E;">()      </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> 重复指定次数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">()    </span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">字符串方法在线文档：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//www.w3school.com.cn/jsref/jsref_obj_string.asp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">4.5</span><span style="color:#24292E;"> getter方法</span></span>
<span class="line"><span style="color:#005CC5;">4.6</span><span style="color:#24292E;"> setter方法</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="堆栈结构" tabindex="-1">堆栈结构： <a class="header-anchor" href="#堆栈结构" aria-label="Permalink to &quot;堆栈结构：&quot;">​</a></h2><pre><code>计算机的组成部分：CPU、内存、主板、硬盘 
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">堆栈的介绍：</span></span>
<span class="line"><span style="color:#E1E4E8;">    栈：先进后出 后进先出</span></span>
<span class="line"><span style="color:#E1E4E8;">        存储的基本数据类型和引用数据类型的变量</span></span>
<span class="line"><span style="color:#E1E4E8;">        相比较堆来说 内存小</span></span>
<span class="line"><span style="color:#E1E4E8;">        速度快</span></span>
<span class="line"><span style="color:#E1E4E8;">    堆：无序</span></span>
<span class="line"><span style="color:#E1E4E8;">        存储的是对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        相比较栈来说 内存大</span></span>
<span class="line"><span style="color:#E1E4E8;">        速度慢</span></span>
<span class="line"><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> 堆栈结构</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">基本数据类型的使用</span></span>
<span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 堆栈结构</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">引用数据类型的使用</span></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> 堆栈结构</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">引用数据类型的使用</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">案例练习</span></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> 堆栈结构</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">基本数据类型当做参数</span></span>
<span class="line"><span style="color:#79B8FF;">5.</span><span style="color:#E1E4E8;"> 堆栈结构</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">引用数据类型当做参数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">6.</span><span style="color:#E1E4E8;"> new关键字的作用</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">构造函数当做普通函数来使用</span></span>
<span class="line"><span style="color:#79B8FF;">7.</span><span style="color:#E1E4E8;"> new关键字的作用</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">构造函数当做构造函数来使用</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">堆栈的介绍：</span></span>
<span class="line"><span style="color:#24292E;">    栈：先进后出 后进先出</span></span>
<span class="line"><span style="color:#24292E;">        存储的基本数据类型和引用数据类型的变量</span></span>
<span class="line"><span style="color:#24292E;">        相比较堆来说 内存小</span></span>
<span class="line"><span style="color:#24292E;">        速度快</span></span>
<span class="line"><span style="color:#24292E;">    堆：无序</span></span>
<span class="line"><span style="color:#24292E;">        存储的是对象</span></span>
<span class="line"><span style="color:#24292E;">        相比较栈来说 内存大</span></span>
<span class="line"><span style="color:#24292E;">        速度慢</span></span>
<span class="line"><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> 堆栈结构</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">基本数据类型的使用</span></span>
<span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 堆栈结构</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">引用数据类型的使用</span></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> 堆栈结构</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">引用数据类型的使用</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">案例练习</span></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> 堆栈结构</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">基本数据类型当做参数</span></span>
<span class="line"><span style="color:#005CC5;">5.</span><span style="color:#24292E;"> 堆栈结构</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">引用数据类型当做参数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">6.</span><span style="color:#24292E;"> new关键字的作用</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">构造函数当做普通函数来使用</span></span>
<span class="line"><span style="color:#005CC5;">7.</span><span style="color:#24292E;"> new关键字的作用</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">构造函数当做构造函数来使用</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="json格式" tabindex="-1">JSON格式 <a class="header-anchor" href="#json格式" aria-label="Permalink to &quot;JSON格式&quot;">​</a></h2><pre><code>JSON格式（JavaScript Object Notation的缩写）
JSON是一种轻量级的数据交换标准
具体操作：
    JSON.stringify(obj); //把对象obj转化为json字串
    JSON.parse(result);  //json字串转化为对象
</code></pre><h2 id="内置数学math对象" tabindex="-1">内置数学Math对象： <a class="header-anchor" href="#内置数学math对象" aria-label="Permalink to &quot;内置数学Math对象：&quot;">​</a></h2><pre><code>Math对象中的方法和属性都是静态的，也就是不需要实例化new就可直接使用：
    Math.round()    // 四舍五入取整
    Math.floor()    // 向下取整
    Math.ceil()     // 向上取整
    Math.max()
    Math.min()
    Math.PI         // 圆周率  是一个属性
    Math.abs()      // 求绝对值
    Math.random()
</code></pre><h2 id="时间日期函数" tabindex="-1">时间日期函数： <a class="header-anchor" href="#时间日期函数" aria-label="Permalink to &quot;时间日期函数：&quot;">​</a></h2><pre><code>var date = new Date();
getDate()	返回月中的第几天（从 1 到 31）。
getDay()	返回星期几（0-6）。
getFullYear()	返回年份。
getHours()	返回小时（从 0-23）。
getMilliseconds()	返回毫秒（0-999）。
getMinutes()	返回分钟（从 0-59）。
getMonth()	返回月份（从 0-11）。
getSeconds()	返回秒数（从 0-59）。
getTime()	返回自 1970 年 1 月 1 日午夜以来与指定日期的毫秒数。
setDate()	设置 Date 对象中月的某一天。
setFullYear()	设置日期对象的年份
setHours()	设置日期对象的小时。
setMilliseconds()	设置日期对象的毫秒数。
setMinutes()	设置日期对象的分钟数。
setMonth()	设置日期对象的月份。
setSeconds()	设置日期对象的秒数。
setTime()	将日期设置为 1970 年 1 月 1 日之后/之前的指定毫秒数。
</code></pre>`,22),e=[o];function c(r,t,E,y,i,b){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{u as __pageData,d as default};
