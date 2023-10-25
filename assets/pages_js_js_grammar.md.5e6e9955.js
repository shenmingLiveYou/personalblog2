import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.cfbd61a4.js";const m=JSON.parse('{"title":"JS基础","description":"","frontmatter":{},"headers":[],"relativePath":"pages/js/js_grammar.md","filePath":"pages/js/js_grammar.md","lastUpdated":null}'),p={name:"pages/js/js_grammar.md"},e=l(`<h1 id="js基础" tabindex="-1">JS基础 <a class="header-anchor" href="#js基础" aria-label="Permalink to &quot;JS基础&quot;">​</a></h1><h2 id="javascript的基础语法" tabindex="-1">JavaScript的基础语法 <a class="header-anchor" href="#javascript的基础语法" aria-label="Permalink to &quot;JavaScript的基础语法&quot;">​</a></h2><pre><code>   1. 变量的命名规则：
      由字母、数字、下划线、$符号组成，不能以数字开头
      不能是关键字和保留字，例如：for、 if、while。
      区分大小写
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 变量的命名规范：</span></span>
<span class="line"><span style="color:#E1E4E8;">    变量名必须有意义</span></span>
<span class="line"><span style="color:#E1E4E8;">    大驼峰：每个单词首字母都大写</span></span>
<span class="line"><span style="color:#E1E4E8;">    小驼峰：第一个单词首字母小写，其他单词首字母小写</span></span>
<span class="line"><span style="color:#E1E4E8;">    下划线：每个单词之间使用下划线分割</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> 变量提升 （后续还会重点讲解）</span></span>
<span class="line"><span style="color:#E1E4E8;">    当声明一个变量没有赋值时，JS引擎会自动赋予一个undefined值</span></span>
<span class="line"><span style="color:#E1E4E8;">    JS在执行代码前会先做一个预处理（执行变量提升），然后才执行。</span></span>
<span class="line"><span style="color:#E1E4E8;">    预处理中会执行变量提升,就是将var声明的变量语句提升到代码首位</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> 面试题：如何实现两个变量数值的交换</span></span>
<span class="line"><span style="color:#E1E4E8;">     ① 使用第三个变量作为中间值进行交换</span></span>
<span class="line"><span style="color:#E1E4E8;">     ② 不借助第三个变量进行交换</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">5.</span><span style="color:#E1E4E8;"> 注释：</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> 单行注释：</span><span style="color:#6A737D;">//    </span></span>
<span class="line"><span style="color:#E1E4E8;">        一般添加在代码的上方或后面，推荐代码上方添加注释</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 多行注释：</span><span style="color:#6A737D;">/*    */</span></span>
<span class="line"><span style="color:#E1E4E8;">        注意不能嵌套使用</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> 文档注释：</span><span style="color:#6A737D;">/**   */</span><span style="color:#E1E4E8;"> (非官方注释)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 变量的命名规范：</span></span>
<span class="line"><span style="color:#24292E;">    变量名必须有意义</span></span>
<span class="line"><span style="color:#24292E;">    大驼峰：每个单词首字母都大写</span></span>
<span class="line"><span style="color:#24292E;">    小驼峰：第一个单词首字母小写，其他单词首字母小写</span></span>
<span class="line"><span style="color:#24292E;">    下划线：每个单词之间使用下划线分割</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> 变量提升 （后续还会重点讲解）</span></span>
<span class="line"><span style="color:#24292E;">    当声明一个变量没有赋值时，JS引擎会自动赋予一个undefined值</span></span>
<span class="line"><span style="color:#24292E;">    JS在执行代码前会先做一个预处理（执行变量提升），然后才执行。</span></span>
<span class="line"><span style="color:#24292E;">    预处理中会执行变量提升,就是将var声明的变量语句提升到代码首位</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> 面试题：如何实现两个变量数值的交换</span></span>
<span class="line"><span style="color:#24292E;">     ① 使用第三个变量作为中间值进行交换</span></span>
<span class="line"><span style="color:#24292E;">     ② 不借助第三个变量进行交换</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">5.</span><span style="color:#24292E;"> 注释：</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> 单行注释：</span><span style="color:#6A737D;">//    </span></span>
<span class="line"><span style="color:#24292E;">        一般添加在代码的上方或后面，推荐代码上方添加注释</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 多行注释：</span><span style="color:#6A737D;">/*    */</span></span>
<span class="line"><span style="color:#24292E;">        注意不能嵌套使用</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> 文档注释：</span><span style="color:#6A737D;">/**   */</span><span style="color:#24292E;"> (非官方注释)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="js的数据类型" tabindex="-1">JS的数据类型 <a class="header-anchor" href="#js的数据类型" aria-label="Permalink to &quot;JS的数据类型&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> 数据类型介绍：</span></span>
<span class="line"><span style="color:#E1E4E8;">   在JS中数据分为两大类型：</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">、基本（值）数据类型：</span></span>
<span class="line"><span style="color:#E1E4E8;">        数值Nubmer、字串String、布尔Boolean、 </span></span>
<span class="line"><span style="color:#E1E4E8;">        空Null（空对象）、 未定义Undefined、 符号Symbol</span></span>
<span class="line"><span style="color:#E1E4E8;">        注意：Symbol 是 </span><span style="color:#79B8FF;">ES6</span><span style="color:#E1E4E8;"> 引入了一种新的原始数据类型，表示独一无二的值。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">、引用类型：</span></span>
<span class="line"><span style="color:#E1E4E8;">        对象：Object，数组Array、函数Function</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> 数据类型介绍：</span></span>
<span class="line"><span style="color:#24292E;">   在JS中数据分为两大类型：</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">、基本（值）数据类型：</span></span>
<span class="line"><span style="color:#24292E;">        数值Nubmer、字串String、布尔Boolean、 </span></span>
<span class="line"><span style="color:#24292E;">        空Null（空对象）、 未定义Undefined、 符号Symbol</span></span>
<span class="line"><span style="color:#24292E;">        注意：Symbol 是 </span><span style="color:#005CC5;">ES6</span><span style="color:#24292E;"> 引入了一种新的原始数据类型，表示独一无二的值。</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">、引用类型：</span></span>
<span class="line"><span style="color:#24292E;">        对象：Object，数组Array、函数Function</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 使用typeof关键字可以获取指定的变量数据类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    注意：typeof只可以判断： number</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">string</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">boolean</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">undefined</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">symbol</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">function的类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    其它的如：</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">，object，array 都返回object</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> Undefined 类型：</span></span>
<span class="line"><span style="color:#E1E4E8;">    Undefined类型只有一个值，就是特殊值 </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">。</span></span>
<span class="line"><span style="color:#E1E4E8;">    当使用var声明一个变量但没有初始化（没有赋值）时，JS引擎会自动给变量赋予 </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;"> 值。</span></span>
<span class="line"><span style="color:#E1E4E8;">    使用typeof获取一个没有声明的变量，返回结果也是undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> Null 类型：</span></span>
<span class="line"><span style="color:#E1E4E8;">    Null类型同样只有一个值，即特殊值 </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">（空对象）。</span></span>
<span class="line"><span style="color:#E1E4E8;">    我们可以将一个不再使用的对象赋值为null，已到达释放对象空间的目的。</span></span>
<span class="line"><span style="color:#E1E4E8;">    如 ob </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">5.</span><span style="color:#E1E4E8;"> Boolean 布尔类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">( 布尔值 )类型是JS中使用最频繁的类型之一，只有两个字面量：</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> 和 </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    其他数值转成布尔数值的规则：</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> 字符串</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">为假false，其他都为真true</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 数值0,</span><span style="color:#79B8FF;">0.0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NaN</span><span style="color:#E1E4E8;"> 是false，其他都为true</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> 特殊值：null和undefined 都是false</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> 对于对象而言，非null对象都是true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">6.</span><span style="color:#E1E4E8;"> Number数值类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    Number数值类型的定义和使用</span></span>
<span class="line"><span style="color:#E1E4E8;">    数值的进制转换（扩展）</span></span>
<span class="line"><span style="color:#E1E4E8;">    浮点数及精度</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">7.NaN值: </span></span>
<span class="line"><span style="color:#E1E4E8;">    NaN表示：not a number  表示不是数值 的数值类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    任何操作设及NaN的结果大部分都返回NaN</span></span>
<span class="line"><span style="color:#E1E4E8;">    （除了和字串做加法计算时是字串连接外其他都是NaN）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">数值判断函数：isNaN（）  is not a number 不是一个数值吗？</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">8.</span><span style="color:#E1E4E8;"> 数值类型的类型转换：</span></span>
<span class="line"><span style="color:#E1E4E8;">    其他数据类型转成数值类型。可以使用：</span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">()  </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">()  </span><span style="color:#B392F0;">parseFloat</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    注意：字串在转换数值前会将字串两侧多余的空白符清除</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    ①：Number（）数值类型转换</span></span>
<span class="line"><span style="color:#E1E4E8;">        Boolean值，</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> 和 </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> 将分别被转换为 </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> 和 </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">        特殊数值：null为0  undefined为NaN</span></span>
<span class="line"><span style="color:#E1E4E8;">        字符串转成数值：</span></span>
<span class="line"><span style="color:#E1E4E8;">            a. 若是纯数字字串</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">浮点数字串</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">其他进制字串，则将其直接转换为十进制数值</span></span>
<span class="line"><span style="color:#E1E4E8;">            b. 空字符转成数值为0</span></span>
<span class="line"><span style="color:#E1E4E8;">            c. 其他都为 </span><span style="color:#79B8FF;">NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        为了程序的稳定，</span><span style="color:#B392F0;">我们在做类型转换前会执行isNaN</span><span style="color:#E1E4E8;">()判断</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    ②：</span><span style="color:#B392F0;">针对于字串转数值Number</span><span style="color:#E1E4E8;">()函数的不足，JS引擎另外单独提供了这两个函数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">() </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">parseFloat</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        规则：将字串引号去掉，从第一位开始尽量获取更多有效数值，直到非数值结束。</span></span>
<span class="line"><span style="color:#E1E4E8;">        用途：常用于表单数值获取后的转换</span></span>
<span class="line"><span style="color:#79B8FF;">9.</span><span style="color:#E1E4E8;"> 字符串String</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> 字符串的定义： </span></span>
<span class="line"><span style="color:#E1E4E8;">        3种定义字符串方式：单引号 </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">   双引号 </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">   反单引号 </span><span style="color:#9ECBFF;">\`\`</span><span style="color:#E1E4E8;"> (ES6写法)</span></span>
<span class="line"><span style="color:#E1E4E8;">        区别：反单引号内可以使用\${}去嵌入变量的输出</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 转义字符：</span></span>
<span class="line"><span style="color:#E1E4E8;">        JS中常用转义字符： \\</span><span style="color:#9ECBFF;">&#39; </span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">\\\`</span><span style="color:#9ECBFF;">  </span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">   </span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">  </span><span style="color:#79B8FF;">\\t</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> 字串转换</span><span style="color:#F97583;">-</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">()：</span></span>
<span class="line"><span style="color:#E1E4E8;">        注意：</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> 和 </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;"> 属于特殊值，</span><span style="color:#B392F0;">没有toString</span><span style="color:#E1E4E8;">() 方法（函数）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> 字串转换</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> String（）</span></span>
<span class="line"><span style="color:#E1E4E8;">        其他类型转成字串，就是将其值加上引号即可。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 使用typeof关键字可以获取指定的变量数据类型</span></span>
<span class="line"><span style="color:#24292E;">    注意：typeof只可以判断： number</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">string</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">boolean</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">undefined</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">symbol</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">function的类型</span></span>
<span class="line"><span style="color:#24292E;">    其它的如：</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">，object，array 都返回object</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> Undefined 类型：</span></span>
<span class="line"><span style="color:#24292E;">    Undefined类型只有一个值，就是特殊值 </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">。</span></span>
<span class="line"><span style="color:#24292E;">    当使用var声明一个变量但没有初始化（没有赋值）时，JS引擎会自动给变量赋予 </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;"> 值。</span></span>
<span class="line"><span style="color:#24292E;">    使用typeof获取一个没有声明的变量，返回结果也是undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> Null 类型：</span></span>
<span class="line"><span style="color:#24292E;">    Null类型同样只有一个值，即特殊值 </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">（空对象）。</span></span>
<span class="line"><span style="color:#24292E;">    我们可以将一个不再使用的对象赋值为null，已到达释放对象空间的目的。</span></span>
<span class="line"><span style="color:#24292E;">    如 ob </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">5.</span><span style="color:#24292E;"> Boolean 布尔类型</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">( 布尔值 )类型是JS中使用最频繁的类型之一，只有两个字面量：</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> 和 </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    其他数值转成布尔数值的规则：</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> 字符串</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">为假false，其他都为真true</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 数值0,</span><span style="color:#005CC5;">0.0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NaN</span><span style="color:#24292E;"> 是false，其他都为true</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> 特殊值：null和undefined 都是false</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> 对于对象而言，非null对象都是true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">6.</span><span style="color:#24292E;"> Number数值类型</span></span>
<span class="line"><span style="color:#24292E;">    Number数值类型的定义和使用</span></span>
<span class="line"><span style="color:#24292E;">    数值的进制转换（扩展）</span></span>
<span class="line"><span style="color:#24292E;">    浮点数及精度</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">7.NaN值: </span></span>
<span class="line"><span style="color:#24292E;">    NaN表示：not a number  表示不是数值 的数值类型</span></span>
<span class="line"><span style="color:#24292E;">    任何操作设及NaN的结果大部分都返回NaN</span></span>
<span class="line"><span style="color:#24292E;">    （除了和字串做加法计算时是字串连接外其他都是NaN）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">数值判断函数：isNaN（）  is not a number 不是一个数值吗？</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">8.</span><span style="color:#24292E;"> 数值类型的类型转换：</span></span>
<span class="line"><span style="color:#24292E;">    其他数据类型转成数值类型。可以使用：</span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">()  </span><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">()  </span><span style="color:#6F42C1;">parseFloat</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    注意：字串在转换数值前会将字串两侧多余的空白符清除</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    ①：Number（）数值类型转换</span></span>
<span class="line"><span style="color:#24292E;">        Boolean值，</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> 和 </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> 将分别被转换为 </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> 和 </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">        特殊数值：null为0  undefined为NaN</span></span>
<span class="line"><span style="color:#24292E;">        字符串转成数值：</span></span>
<span class="line"><span style="color:#24292E;">            a. 若是纯数字字串</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">浮点数字串</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">其他进制字串，则将其直接转换为十进制数值</span></span>
<span class="line"><span style="color:#24292E;">            b. 空字符转成数值为0</span></span>
<span class="line"><span style="color:#24292E;">            c. 其他都为 </span><span style="color:#005CC5;">NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        为了程序的稳定，</span><span style="color:#6F42C1;">我们在做类型转换前会执行isNaN</span><span style="color:#24292E;">()判断</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    ②：</span><span style="color:#6F42C1;">针对于字串转数值Number</span><span style="color:#24292E;">()函数的不足，JS引擎另外单独提供了这两个函数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">() </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">parseFloat</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        规则：将字串引号去掉，从第一位开始尽量获取更多有效数值，直到非数值结束。</span></span>
<span class="line"><span style="color:#24292E;">        用途：常用于表单数值获取后的转换</span></span>
<span class="line"><span style="color:#005CC5;">9.</span><span style="color:#24292E;"> 字符串String</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> 字符串的定义： </span></span>
<span class="line"><span style="color:#24292E;">        3种定义字符串方式：单引号 </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">   双引号 </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">   反单引号 </span><span style="color:#032F62;">\`\`</span><span style="color:#24292E;"> (ES6写法)</span></span>
<span class="line"><span style="color:#24292E;">        区别：反单引号内可以使用\${}去嵌入变量的输出</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 转义字符：</span></span>
<span class="line"><span style="color:#24292E;">        JS中常用转义字符： \\</span><span style="color:#032F62;">&#39; </span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">\\\`</span><span style="color:#032F62;">  </span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">   </span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">  </span><span style="color:#005CC5;">\\t</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> 字串转换</span><span style="color:#D73A49;">-</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">()：</span></span>
<span class="line"><span style="color:#24292E;">        注意：</span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> 和 </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;"> 属于特殊值，</span><span style="color:#6F42C1;">没有toString</span><span style="color:#24292E;">() 方法（函数）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> 字串转换</span><span style="color:#D73A49;">--</span><span style="color:#24292E;"> String（）</span></span>
<span class="line"><span style="color:#24292E;">        其他类型转成字串，就是将其值加上引号即可。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><h2 id="js判断数据类型" tabindex="-1">JS判断数据类型 <a class="header-anchor" href="#js判断数据类型" aria-label="Permalink to &quot;JS判断数据类型&quot;">​</a></h2><pre><code>在JS中有多种数据类型的判断方式：
</code></pre><ul><li>typeof 运算符 nstanceof 运算符 constructor 属性 toString.call( ) <ul><li>isNaN( ) 函数</li></ul></li></ul><h2 id="js数据类型转换总结" tabindex="-1">JS数据类型转换总结 <a class="header-anchor" href="#js数据类型转换总结" aria-label="Permalink to &quot;JS数据类型转换总结&quot;">​</a></h2><pre><code>数据类型的转换：强转（使用JS提供的函数） 和 隐式类型转换（自动转换）
强转：就是使用JS的函数：Number()/Boolean()/String()/parseInt()/parseFloat()
隐式转换：就是数值或变量在参数运算符运算时需要转成统一类型时，JS引擎会自动做的类型转换。
</code></pre><h2 id="js中运算符" tabindex="-1">JS中运算符 <a class="header-anchor" href="#js中运算符" aria-label="Permalink to &quot;JS中运算符&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> 运算符的分类：</span></span>
<span class="line"><span style="color:#E1E4E8;">    ① 一个运算符在使用操作数的数量不同，分为：一元运算符、二元运算符、三元运算法</span></span>
<span class="line"><span style="color:#E1E4E8;">    ② 安装运算符的种类分为：</span><span style="color:#B392F0;">算术</span><span style="color:#E1E4E8;">(算数)运算符、赋值运算符、比较运算符、位运算符、逻辑运算符。。。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 算数运算符： </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">(取模)   </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">--</span></span>
<span class="line"><span style="color:#E1E4E8;">    ① 加号</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">运算符： 若两侧有一方为字串类型，就会统一都转成字串，并做字串拼接操作</span></span>
<span class="line"><span style="color:#E1E4E8;">                若都不是字串类型，则统一转成数值类型做求和计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    ② 其他运算符：</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">  首先都转成Number数值类型，然后再计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    ③ 取模 </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> 也叫求余运算符</span></span>
<span class="line"><span style="color:#E1E4E8;">    ④ 算数运算符：自增</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;"> 自减</span><span style="color:#F97583;">--</span></span>
<span class="line"><span style="color:#E1E4E8;">        自增</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">： 前置自增和后置自增（先加加与后加加）</span></span>
<span class="line"><span style="color:#E1E4E8;">        自增</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">： 前置自减和后置自减（先减减与后减减）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> 比较运算符： </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> &lt; &gt; &lt;= &gt;=  ? :</span></span>
<span class="line"><span style="color:#E1E4E8;">    * 比较运算法的返回结果都是布尔值：true 或 false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    * 值比较是否相等（不考虑类型）：==  不等： !=</span></span>
<span class="line"><span style="color:#E1E4E8;">    * 全等比较：=== 比较值和类型是否都相同true， 否则就是 !== 不全等 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    * 一般情况下我们都是做数值的比较。</span></span>
<span class="line"><span style="color:#E1E4E8;">    * 若两边操作数都是字符串时，则按字符的编码进行一个个字符比较</span></span>
<span class="line"><span style="color:#E1E4E8;">    * 若有一操作数为数值，另外一个不是，则要转成数值进行比较。</span></span>
<span class="line"><span style="color:#E1E4E8;">    * 任何关系操作符在涉及比较NaN时都返回false。（无意义的比较）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    * 三元运算符： ？ ：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">4. 逻辑运算符： 逻辑与 &amp;&amp;   逻辑或 ||    逻辑非 !</span></span>
<span class="line"><span style="color:#E1E4E8;">    * 逻辑与 &amp;&amp; :  真真为真，其余为假</span></span>
<span class="line"><span style="color:#E1E4E8;">    * 逻辑或 || :  假假为假，其余为真</span></span>
<span class="line"><span style="color:#E1E4E8;">    * 逻辑非 ! :(取反)   真为假  假为真</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    * 注意：逻辑与和逻辑或运算符的执行结果未必全是布尔值。</span></span>
<span class="line"><span style="color:#E1E4E8;">    逻辑与和逻辑或都具有短路效果：</span></span>
<span class="line"><span style="color:#E1E4E8;">        逻辑与：若第一操作数为false，直接返回第一操作数，否则返回第二操作数</span></span>
<span class="line"><span style="color:#E1E4E8;">        逻辑或：若第一操作数为true，直接返回第一操作数，否知返回第二操作数。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">5. 逗号运算符： ，</span></span>
<span class="line"><span style="color:#E1E4E8;">    * 我们可以使用逗号快速定义多个变量</span></span>
<span class="line"><span style="color:#E1E4E8;">    * var a,b,c;  //使用逗号快速声明多个变量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    //使用逗号声明多个变量并赋初始值</span></span>
<span class="line"><span style="color:#E1E4E8;">    var x = 10, y = 20, z = 30; </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">6. 不同数据类型的比较：&gt; &lt; &gt;= &lt;= </span></span>
<span class="line"><span style="color:#E1E4E8;">    * 若有一操作数为数值，另外一个不是，则要转成数值进行比较。</span></span>
<span class="line"><span style="color:#E1E4E8;">    * 任何关系操作符在涉及比较NaN时都返回false。（无意义的比较）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    * 注意：在相等与不想等比较中</span></span>
<span class="line"><span style="color:#E1E4E8;">        * null 和 undefined 不能转换为其他类型的值进行比较。</span></span>
<span class="line"><span style="color:#E1E4E8;">        * 任何与NaN比较相等都返回 false，不相等比较返回 true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">7. 运算符优先级:</span></span>
<span class="line"><span style="color:#E1E4E8;">    优先级从高到底</span></span>
<span class="line"><span style="color:#E1E4E8;">    1. () 优先级最高</span></span>
<span class="line"><span style="color:#E1E4E8;">    2. 一元运算符 ++ -- !</span></span>
<span class="line"><span style="color:#E1E4E8;">    3. 算数运算符 先 * / % 后 + - </span></span>
<span class="line"><span style="color:#E1E4E8;">    4. 关系运算符 &gt; &gt;= &lt; &lt;= </span></span>
<span class="line"><span style="color:#E1E4E8;">    5. 相等运算符 == != === !== </span></span>
<span class="line"><span style="color:#E1E4E8;">    6. 逻辑运算符 先 &amp;&amp; 后|| </span></span>
<span class="line"><span style="color:#E1E4E8;">    7. 三元运算符 ? : </span></span>
<span class="line"><span style="color:#E1E4E8;">    8. 赋值运算符 = += -= *= /= %=</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> 运算符的分类：</span></span>
<span class="line"><span style="color:#24292E;">    ① 一个运算符在使用操作数的数量不同，分为：一元运算符、二元运算符、三元运算法</span></span>
<span class="line"><span style="color:#24292E;">    ② 安装运算符的种类分为：</span><span style="color:#6F42C1;">算术</span><span style="color:#24292E;">(算数)运算符、赋值运算符、比较运算符、位运算符、逻辑运算符。。。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 算数运算符： </span><span style="color:#D73A49;">+</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">%</span><span style="color:#24292E;">(取模)   </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">--</span></span>
<span class="line"><span style="color:#24292E;">    ① 加号</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">运算符： 若两侧有一方为字串类型，就会统一都转成字串，并做字串拼接操作</span></span>
<span class="line"><span style="color:#24292E;">                若都不是字串类型，则统一转成数值类型做求和计算</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    ② 其他运算符：</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;">  首先都转成Number数值类型，然后再计算</span></span>
<span class="line"><span style="color:#24292E;">    ③ 取模 </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> 也叫求余运算符</span></span>
<span class="line"><span style="color:#24292E;">    ④ 算数运算符：自增</span><span style="color:#D73A49;">++</span><span style="color:#24292E;"> 自减</span><span style="color:#D73A49;">--</span></span>
<span class="line"><span style="color:#24292E;">        自增</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">： 前置自增和后置自增（先加加与后加加）</span></span>
<span class="line"><span style="color:#24292E;">        自增</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">： 前置自减和后置自减（先减减与后减减）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> 比较运算符： </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> &lt; &gt; &lt;= &gt;=  ? :</span></span>
<span class="line"><span style="color:#24292E;">    * 比较运算法的返回结果都是布尔值：true 或 false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    * 值比较是否相等（不考虑类型）：==  不等： !=</span></span>
<span class="line"><span style="color:#24292E;">    * 全等比较：=== 比较值和类型是否都相同true， 否则就是 !== 不全等 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    * 一般情况下我们都是做数值的比较。</span></span>
<span class="line"><span style="color:#24292E;">    * 若两边操作数都是字符串时，则按字符的编码进行一个个字符比较</span></span>
<span class="line"><span style="color:#24292E;">    * 若有一操作数为数值，另外一个不是，则要转成数值进行比较。</span></span>
<span class="line"><span style="color:#24292E;">    * 任何关系操作符在涉及比较NaN时都返回false。（无意义的比较）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    * 三元运算符： ？ ：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">4. 逻辑运算符： 逻辑与 &amp;&amp;   逻辑或 ||    逻辑非 !</span></span>
<span class="line"><span style="color:#24292E;">    * 逻辑与 &amp;&amp; :  真真为真，其余为假</span></span>
<span class="line"><span style="color:#24292E;">    * 逻辑或 || :  假假为假，其余为真</span></span>
<span class="line"><span style="color:#24292E;">    * 逻辑非 ! :(取反)   真为假  假为真</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    * 注意：逻辑与和逻辑或运算符的执行结果未必全是布尔值。</span></span>
<span class="line"><span style="color:#24292E;">    逻辑与和逻辑或都具有短路效果：</span></span>
<span class="line"><span style="color:#24292E;">        逻辑与：若第一操作数为false，直接返回第一操作数，否则返回第二操作数</span></span>
<span class="line"><span style="color:#24292E;">        逻辑或：若第一操作数为true，直接返回第一操作数，否知返回第二操作数。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">5. 逗号运算符： ，</span></span>
<span class="line"><span style="color:#24292E;">    * 我们可以使用逗号快速定义多个变量</span></span>
<span class="line"><span style="color:#24292E;">    * var a,b,c;  //使用逗号快速声明多个变量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    //使用逗号声明多个变量并赋初始值</span></span>
<span class="line"><span style="color:#24292E;">    var x = 10, y = 20, z = 30; </span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">6. 不同数据类型的比较：&gt; &lt; &gt;= &lt;= </span></span>
<span class="line"><span style="color:#24292E;">    * 若有一操作数为数值，另外一个不是，则要转成数值进行比较。</span></span>
<span class="line"><span style="color:#24292E;">    * 任何关系操作符在涉及比较NaN时都返回false。（无意义的比较）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    * 注意：在相等与不想等比较中</span></span>
<span class="line"><span style="color:#24292E;">        * null 和 undefined 不能转换为其他类型的值进行比较。</span></span>
<span class="line"><span style="color:#24292E;">        * 任何与NaN比较相等都返回 false，不相等比较返回 true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">7. 运算符优先级:</span></span>
<span class="line"><span style="color:#24292E;">    优先级从高到底</span></span>
<span class="line"><span style="color:#24292E;">    1. () 优先级最高</span></span>
<span class="line"><span style="color:#24292E;">    2. 一元运算符 ++ -- !</span></span>
<span class="line"><span style="color:#24292E;">    3. 算数运算符 先 * / % 后 + - </span></span>
<span class="line"><span style="color:#24292E;">    4. 关系运算符 &gt; &gt;= &lt; &lt;= </span></span>
<span class="line"><span style="color:#24292E;">    5. 相等运算符 == != === !== </span></span>
<span class="line"><span style="color:#24292E;">    6. 逻辑运算符 先 &amp;&amp; 后|| </span></span>
<span class="line"><span style="color:#24292E;">    7. 三元运算符 ? : </span></span>
<span class="line"><span style="color:#24292E;">    8. 赋值运算符 = += -= *= /= %=</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div>`,14),o=[e];function c(r,t,E,i,y,b){return n(),a("div",null,o)}const F=s(p,[["render",c]]);export{m as __pageData,F as default};
