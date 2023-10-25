import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.cfbd61a4.js";const d=JSON.parse('{"title":"JS函数","description":"","frontmatter":{},"headers":[],"relativePath":"pages/js/js_func.md","filePath":"pages/js/js_func.md","lastUpdated":null}'),p={name:"pages/js/js_func.md"},e=l(`<h1 id="js函数" tabindex="-1">JS函数 <a class="header-anchor" href="#js函数" aria-label="Permalink to &quot;JS函数&quot;">​</a></h1><h2 id="函数的介绍" tabindex="-1">函数的介绍： <a class="header-anchor" href="#函数的介绍" aria-label="Permalink to &quot;函数的介绍：&quot;">​</a></h2><pre><code>1. 函数的优越性：
    控制程序设计的复杂性
    提高软件的可靠性
    提高软件的开发效率
    提高软件的可维护性
    提高程序的重用性
2. 函数是什么:
    函数（function）是一段完成指定任务的代码块
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">  函数的定义与使用</span></span>
<span class="line"><span style="color:#E1E4E8;">    以函数声明方式来定义函数（具名函数）：</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">函数名</span><span style="color:#E1E4E8;">（[</span><span style="color:#B392F0;">参数列表</span><span style="color:#E1E4E8;">..]）{</span></span>
<span class="line"><span style="color:#E1E4E8;">        函数体。。。</span></span>
<span class="line"><span style="color:#E1E4E8;">        [return 返回值;]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 函数的使用(调用)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">函数名</span><span style="color:#E1E4E8;">([参数列表</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">3</span><span style="color:#24292E;">  函数的定义与使用</span></span>
<span class="line"><span style="color:#24292E;">    以函数声明方式来定义函数（具名函数）：</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">函数名</span><span style="color:#24292E;">（[</span><span style="color:#6F42C1;">参数列表</span><span style="color:#24292E;">..]）{</span></span>
<span class="line"><span style="color:#24292E;">        函数体。。。</span></span>
<span class="line"><span style="color:#24292E;">        [return 返回值;]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 函数的使用(调用)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">函数名</span><span style="color:#24292E;">([参数列表</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="函数的参数" tabindex="-1">函数的参数: <a class="header-anchor" href="#函数的参数" aria-label="Permalink to &quot;函数的参数:&quot;">​</a></h2><pre><code>1. 参数介绍：
形参：形式上定义的参数 — — 给函数声明的一个个参数；
实参：实际上传递的参数 — — 在函数调用时给形参赋的值
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 声明函数时</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">func</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">形参1</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">形参2</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 函数执行代码</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#B392F0;">func</span><span style="color:#E1E4E8;">(实参1,实参2);</span><span style="color:#6A737D;">//调用时传参</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 参数传递的三种情况：</span></span>
<span class="line"><span style="color:#E1E4E8;">  实参和形参的数量应该相同，函数正常运行</span></span>
<span class="line"><span style="color:#E1E4E8;">  实参数量少于形参数量，那么多出来的形参会默认会 </span><span style="color:#79B8FF;">undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">  实参数量多余形参数量，那么多出来的实参就不能通过形参访问。函数忽略掉多余的实参。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 声明函数时</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">func</span><span style="color:#24292E;">(</span><span style="color:#E36209;">形参1</span><span style="color:#24292E;">,</span><span style="color:#E36209;">形参2</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 函数执行代码</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6F42C1;">func</span><span style="color:#24292E;">(实参1,实参2);</span><span style="color:#6A737D;">//调用时传参</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 参数传递的三种情况：</span></span>
<span class="line"><span style="color:#24292E;">  实参和形参的数量应该相同，函数正常运行</span></span>
<span class="line"><span style="color:#24292E;">  实参数量少于形参数量，那么多出来的形参会默认会 </span><span style="color:#005CC5;">undefined</span></span>
<span class="line"><span style="color:#24292E;">  实参数量多余形参数量，那么多出来的实参就不能通过形参访问。函数忽略掉多余的实参。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="函数的返回值return" tabindex="-1">函数的返回值return： <a class="header-anchor" href="#函数的返回值return" aria-label="Permalink to &quot;函数的返回值return：&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">如果函数中没有 </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> 关键字，那么函数的默认返回值 </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">。</span></span>
<span class="line"><span style="color:#E1E4E8;">如果函数中有retruen关键字，这个关键字后面没有值，那么这个函数有返回值是undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">如果函数中有 </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> 关键字，这个关键字后面有值，那么这个值就是这个函数的返回值</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">如果函数中没有 </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> 关键字，那么函数的默认返回值 </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">。</span></span>
<span class="line"><span style="color:#24292E;">如果函数中有retruen关键字，这个关键字后面没有值，那么这个函数有返回值是undefined</span></span>
<span class="line"><span style="color:#24292E;">如果函数中有 </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> 关键字，这个关键字后面有值，那么这个值就是这个函数的返回值</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="变量的作用域" tabindex="-1">变量的作用域： <a class="header-anchor" href="#变量的作用域" aria-label="Permalink to &quot;变量的作用域：&quot;">​</a></h2><p>1 变量作用域（scope）是指变量在程序中可以访问的有效范围，也称为变量的可见性。分为全局变量和局部变量 全局变量：变量在整个页面中都是可见的，可以被自由的访问，在函数之外定义的变量是全局变量 局部变量: 变量仅能在声明的函数内部可见，函数外是不允许访问的，在函数内部定义的变量是局部变量</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> window全局对象：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">作用域链</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    作用域链：JS中数据的查找规则。</span></span>
<span class="line"><span style="color:#E1E4E8;">    作用域链 和 作用域 不是一回事；</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">作用域</span><span style="color:#E1E4E8;">: 描述是变量起作用的区域和范围</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">作用域链</span><span style="color:#E1E4E8;">: 描述的程序在找变量的过程；</span></span>
<span class="line"><span style="color:#E1E4E8;">    变量的查找过程：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> 闭包：</span></span>
<span class="line"><span style="color:#E1E4E8;">    ·何为闭包：</span></span>
<span class="line"><span style="color:#E1E4E8;">        闭包是指有权访问另一个函数作用域中的变量的函数。</span></span>
<span class="line"><span style="color:#E1E4E8;">        本质也就是在函数里面返回一个函数。</span></span>
<span class="line"><span style="color:#E1E4E8;">    ·闭包形成的原理：</span></span>
<span class="line"><span style="color:#E1E4E8;">        作用域链，当前作用域可以访问上级作用域中的变量</span></span>
<span class="line"><span style="color:#E1E4E8;">    ·闭包解决的问题：</span></span>
<span class="line"><span style="color:#E1E4E8;">        能够让函数作用域中的变量在函数执行结束之后不被销毁，</span></span>
<span class="line"><span style="color:#E1E4E8;">        同时也能在函数外部可以访问函数内部的局部变量。</span></span>
<span class="line"><span style="color:#E1E4E8;">    ·闭包带来的问题；</span></span>
<span class="line"><span style="color:#E1E4E8;">        由于垃圾回收器不会将闭包中变量销毁，会造成内存泄露，容易导致内存溢出。</span></span>
<span class="line"><span style="color:#E1E4E8;">        可以通过对闭包赋值为null，让垃圾回收器回收。</span></span>
<span class="line"><span style="color:#E1E4E8;">    ·闭包的作用：</span></span>
<span class="line"><span style="color:#E1E4E8;">        延迟变量的生命周期</span></span>
<span class="line"><span style="color:#E1E4E8;">        创建出私有作用域 （如 vue中data返回一个对象）</span></span>
<span class="line"><span style="color:#E1E4E8;">        闭包可以在函数外部访问到函数内部作用域的变量</span></span>
<span class="line"><span style="color:#E1E4E8;">        闭包可以让访问变量不会被垃圾机制回收</span></span>
<span class="line"><span style="color:#E1E4E8;">    ·</span><span style="color:#B392F0;">闭包的实现</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">、在外部函数内定义一个内部函数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">、在内部函数中引用外部函数的局部变量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">、外部函数返回内部函数的函数体</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">、外部函数和内部函数都要执行</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">2</span><span style="color:#24292E;"> window全局对象：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">作用域链</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    作用域链：JS中数据的查找规则。</span></span>
<span class="line"><span style="color:#24292E;">    作用域链 和 作用域 不是一回事；</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">作用域</span><span style="color:#24292E;">: 描述是变量起作用的区域和范围</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">作用域链</span><span style="color:#24292E;">: 描述的程序在找变量的过程；</span></span>
<span class="line"><span style="color:#24292E;">    变量的查找过程：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> 闭包：</span></span>
<span class="line"><span style="color:#24292E;">    ·何为闭包：</span></span>
<span class="line"><span style="color:#24292E;">        闭包是指有权访问另一个函数作用域中的变量的函数。</span></span>
<span class="line"><span style="color:#24292E;">        本质也就是在函数里面返回一个函数。</span></span>
<span class="line"><span style="color:#24292E;">    ·闭包形成的原理：</span></span>
<span class="line"><span style="color:#24292E;">        作用域链，当前作用域可以访问上级作用域中的变量</span></span>
<span class="line"><span style="color:#24292E;">    ·闭包解决的问题：</span></span>
<span class="line"><span style="color:#24292E;">        能够让函数作用域中的变量在函数执行结束之后不被销毁，</span></span>
<span class="line"><span style="color:#24292E;">        同时也能在函数外部可以访问函数内部的局部变量。</span></span>
<span class="line"><span style="color:#24292E;">    ·闭包带来的问题；</span></span>
<span class="line"><span style="color:#24292E;">        由于垃圾回收器不会将闭包中变量销毁，会造成内存泄露，容易导致内存溢出。</span></span>
<span class="line"><span style="color:#24292E;">        可以通过对闭包赋值为null，让垃圾回收器回收。</span></span>
<span class="line"><span style="color:#24292E;">    ·闭包的作用：</span></span>
<span class="line"><span style="color:#24292E;">        延迟变量的生命周期</span></span>
<span class="line"><span style="color:#24292E;">        创建出私有作用域 （如 vue中data返回一个对象）</span></span>
<span class="line"><span style="color:#24292E;">        闭包可以在函数外部访问到函数内部作用域的变量</span></span>
<span class="line"><span style="color:#24292E;">        闭包可以让访问变量不会被垃圾机制回收</span></span>
<span class="line"><span style="color:#24292E;">    ·</span><span style="color:#6F42C1;">闭包的实现</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">、在外部函数内定义一个内部函数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">、在内部函数中引用外部函数的局部变量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">、外部函数返回内部函数的函数体</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">、外部函数和内部函数都要执行</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="javascript预解析" tabindex="-1">JavaScript预解析: <a class="header-anchor" href="#javascript预解析" aria-label="Permalink to &quot;JavaScript预解析:&quot;">​</a></h2><ol><li>JS引擎运行js程序时分为两步： 预解析(预处理) 和 代码执行 ① 预解析(预处理)：检测语法错误，函数提升(只针对声明式定义函数)、变量提升 ② 代码执行：JS引擎会自上向下逐条执行</li><li>预解析（预处理） 预解析分为变量预解析（变量提升）和函数预解析（函数提升） 预解析先解析函数声明定义的函数，再去解析带var的变量； 函数重名会覆盖，变量重名会忽略；</li></ol><h2 id="javascript函数类型" tabindex="-1">JavaScript函数类型 <a class="header-anchor" href="#javascript函数类型" aria-label="Permalink to &quot;JavaScript函数类型&quot;">​</a></h2><pre><code>1. 具名函数: 采用函数声明的方式定义
2. 匿名函数：采用函数表达式的方式进行定义的
3. 立即执行函数 IIFE
</code></pre><h2 id="函数中参数的高级应用" tabindex="-1">函数中参数的高级应用： <a class="header-anchor" href="#函数中参数的高级应用" aria-label="Permalink to &quot;函数中参数的高级应用：&quot;">​</a></h2><pre><code>arguments参数对象:
    在每个函数内都隐藏着一个arguments对象
    arguments对象表示函数的实参集合,仅能够在函数体内可见,并可以直接访间.
    参数对象是一个伪类数组,不能够继承Array的原型方法
arguments对象有两个属性：
    length表示参数个数
    callee表示当前所在函数（当前函数体）
主要用途：
    用于不确定参数个数的函数定义
    获取当前函数的引用（递归函数）
</code></pre><h2 id="递归函数" tabindex="-1">递归函数： <a class="header-anchor" href="#递归函数" aria-label="Permalink to &quot;递归函数：&quot;">​</a></h2><pre><code>何为递归：就是函数里面出现自我调用的语句，就称为递归调用
</code></pre><h1 id="回调函数" tabindex="-1">回调函数 <a class="header-anchor" href="#回调函数" aria-label="Permalink to &quot;回调函数&quot;">​</a></h1><p>字面上的理解，回调函数，就是<strong>回头在调用</strong>的意思。</p><p><strong>回调函数定义：</strong></p><p>，回调函数本质就是一个函数 ，将它作为一个参数传递到其他函数，在合适的时候进行触发。 这个过程就叫做<strong>回调</strong>，传递的函数参数就叫<code>回调函数</code>。</p><p><strong>举个栗子：</strong></p><p>父亲送儿子去火车站，上车前叮嘱儿子说：到了记得打个电话报平安，等儿子到了目的地，就打电话给父亲说我到了。</p><p>这就是生活中的回调。相当于提前约定好了一些事情，等到达某个条件后再触发。</p><p><strong>回调函数：</strong></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">num1</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">num2</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> num1 </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> num2;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">(data) </span><span style="color:#6A737D;">// 计算完毕后，执行回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;和:&#39;</span><span style="color:#E1E4E8;">,result)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;">(</span><span style="color:#E36209;">num1</span><span style="color:#24292E;">,</span><span style="color:#E36209;">num2</span><span style="color:#24292E;">,</span><span style="color:#E36209;">callback</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> num1 </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> num2;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">(data) </span><span style="color:#6A737D;">// 计算完毕后，执行回调函数</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">sum</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">result</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;和:&#39;</span><span style="color:#24292E;">,result)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>回调的使用场景</strong></p><ol><li>异步（ajax）网络编程。</li><li>事件处理程序上。</li><li>函数功能</li></ol><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;btn&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;弹弹弹&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;btn&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;弹弹弹&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>两个时间器函数,也有回调函数。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">setTimeout(callback,time): 延时器  （执行一次）</span></span>
<span class="line"><span style="color:#e1e4e8;">setInterval(callback,time): 定时器  （执行多次）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">setTimeout(callback,time): 延时器  （执行一次）</span></span>
<span class="line"><span style="color:#24292e;">setInterval(callback,time): 定时器  （执行多次）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>时间是毫秒为单位。 1s = 1000ms</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 2s后执行callback回调</span></span>
<span class="line"><span style="color:#e1e4e8;">setTimeout(function(){</span></span>
<span class="line"><span style="color:#e1e4e8;">	console.log(&#39;你好&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">},2000)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 每隔1s执行callback回调</span></span>
<span class="line"><span style="color:#e1e4e8;">setInterval(function(){</span></span>
<span class="line"><span style="color:#e1e4e8;">	console.log(&#39;中国强大&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">},1000)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 2s后执行callback回调</span></span>
<span class="line"><span style="color:#24292e;">setTimeout(function(){</span></span>
<span class="line"><span style="color:#24292e;">	console.log(&#39;你好&#39;)</span></span>
<span class="line"><span style="color:#24292e;">},2000)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 每隔1s执行callback回调</span></span>
<span class="line"><span style="color:#24292e;">setInterval(function(){</span></span>
<span class="line"><span style="color:#24292e;">	console.log(&#39;中国强大&#39;)</span></span>
<span class="line"><span style="color:#24292e;">},1000)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h1 id="高阶函数" tabindex="-1">高阶函数 <a class="header-anchor" href="#高阶函数" aria-label="Permalink to &quot;高阶函数&quot;">​</a></h1><p>高阶函数是一种函数的进阶形式。</p><p>满足高阶函数两个条件之一：</p><ul><li>将函数作为参数</li><li>将函数作为返回值</li></ul><p>作用：实现更加强大的功能，如后面事件的防抖节流等...</p><p>将函数作为参数的情况：如数组的forEach函数</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> arr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">arr.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(item)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">arr.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(item)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>将函数作为返回值的情况：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">welcome</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hello&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">welcome</span><span style="color:#E1E4E8;">()();</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result) </span><span style="color:#6A737D;">// &#39;hello</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">welcome</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hello&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">welcome</span><span style="color:#24292E;">()();</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(result) </span><span style="color:#6A737D;">// &#39;hello</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>课堂案例：模拟数组的原生方法forEach</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Array</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">myEach</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&#39;执行了&#39;, this) // this代表调用此方法的调用者 this=&gt;arr</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 下面的逻辑应该是让用户决定怎么写，做什么</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//   console.log(this[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">[i], i)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> total </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">arr.</span><span style="color:#B392F0;">myEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    total </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> item</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(total)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Array</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">myEach</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">callback</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&#39;执行了&#39;, this) // this代表调用此方法的调用者 this=&gt;arr</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 下面的逻辑应该是让用户决定怎么写，做什么</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//   console.log(this[i])</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">[i], i)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">arr.</span><span style="color:#6F42C1;">myEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">item</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    total </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> item</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(total)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,47),o=[e];function c(r,t,i,E,y,b){return n(),a("div",null,o)}const m=s(p,[["render",c]]);export{d as __pageData,m as default};
