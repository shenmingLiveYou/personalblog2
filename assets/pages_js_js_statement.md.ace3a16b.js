import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.cfbd61a4.js";const m=JSON.parse('{"title":"JS语句","description":"","frontmatter":{},"headers":[],"relativePath":"pages/js/js_statement.md","filePath":"pages/js/js_statement.md","lastUpdated":null}'),p={name:"pages/js/js_statement.md"},e=l(`<h1 id="js语句" tabindex="-1">JS语句 <a class="header-anchor" href="#js语句" aria-label="Permalink to &quot;JS语句&quot;">​</a></h1><h2 id="流程控制" tabindex="-1">流程控制： <a class="header-anchor" href="#流程控制" aria-label="Permalink to &quot;流程控制：&quot;">​</a></h2><pre><code>程序的结构：按照程序的执行方式和顺序分成3种结构：
    顺序结构： 程序自上向下逐条按顺序执行
    分支结构： 有选择的程序运行
    循环结构： 重复的执行某段代码
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> 单分支结构： if语句</span></span>
<span class="line"><span style="color:#E1E4E8;">    格式：</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ( 条件式 ) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            语句代码块；</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 双分支结构：</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> 语句</span></span>
<span class="line"><span style="color:#E1E4E8;">    格式：</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> （条件式） {</span></span>
<span class="line"><span style="color:#E1E4E8;">            语句组1</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            语句组2</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> 多分支结构：</span></span>
<span class="line"><span style="color:#E1E4E8;">    ① 嵌套多分支：多个if </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> 语句嵌套使用实现多分支</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (表达式1) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (表达式2) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                语句组1</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                语句组2</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (表达式3) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                语句组3</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                语句组4</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    ② 多分支结构： </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">      格式：</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (表达式1) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            语句组1</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (表达式2) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            语句组2</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (表达式3) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            语句组3</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            语句组4</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    ③ 多分支结构：</span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> 语句</span></span>
<span class="line"><span style="color:#E1E4E8;">        给个列表项，然后选择其一。。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> for循环语句：</span></span>
<span class="line"><span style="color:#E1E4E8;">   格式： </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (表达式1; 表达式2; 表达式3) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            循环体语句块；</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        说明：</span></span>
<span class="line"><span style="color:#E1E4E8;">          表达式1：执行一次，负责初始化循环条件</span></span>
<span class="line"><span style="color:#E1E4E8;">          表达式2：执行n</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">1次，负责判断是否执行循环体（结束循环的条件）</span></span>
<span class="line"><span style="color:#E1E4E8;">          表达式3：执行n次，负责递增或递减，来影响循环条件。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> 单分支结构： if语句</span></span>
<span class="line"><span style="color:#24292E;">    格式：</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ( 条件式 ) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            语句代码块；</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 双分支结构：</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> 语句</span></span>
<span class="line"><span style="color:#24292E;">    格式：</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> （条件式） {</span></span>
<span class="line"><span style="color:#24292E;">            语句组1</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            语句组2</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> 多分支结构：</span></span>
<span class="line"><span style="color:#24292E;">    ① 嵌套多分支：多个if </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> 语句嵌套使用实现多分支</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (表达式1) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (表达式2) {</span></span>
<span class="line"><span style="color:#24292E;">                语句组1</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                语句组2</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (表达式3) {</span></span>
<span class="line"><span style="color:#24292E;">                语句组3</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                语句组4</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    ② 多分支结构： </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">      格式：</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (表达式1) {</span></span>
<span class="line"><span style="color:#24292E;">            语句组1</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (表达式2) {</span></span>
<span class="line"><span style="color:#24292E;">            语句组2</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (表达式3) {</span></span>
<span class="line"><span style="color:#24292E;">            语句组3</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            语句组4</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    ③ 多分支结构：</span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> 语句</span></span>
<span class="line"><span style="color:#24292E;">        给个列表项，然后选择其一。。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> for循环语句：</span></span>
<span class="line"><span style="color:#24292E;">   格式： </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (表达式1; 表达式2; 表达式3) {</span></span>
<span class="line"><span style="color:#24292E;">            循环体语句块；</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        说明：</span></span>
<span class="line"><span style="color:#24292E;">          表达式1：执行一次，负责初始化循环条件</span></span>
<span class="line"><span style="color:#24292E;">          表达式2：执行n</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">1次，负责判断是否执行循环体（结束循环的条件）</span></span>
<span class="line"><span style="color:#24292E;">          表达式3：执行n次，负责递增或递减，来影响循环条件。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h2 id="循环结构" tabindex="-1">循环结构： <a class="header-anchor" href="#循环结构" aria-label="Permalink to &quot;循环结构：&quot;">​</a></h2><pre><code>  JS语句中有三个程序循环语句：
  ① for循环
  ② while循环
  ③ do ... while循环
</code></pre><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> for循环语句：</span></span>
<span class="line"><span style="color:#E1E4E8;">  格式： </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (表达式1; 表达式2; 表达式3) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        循环体语句块；</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    说明：</span></span>
<span class="line"><span style="color:#E1E4E8;">        表达式1：执行一次，负责初始化循环条件</span></span>
<span class="line"><span style="color:#E1E4E8;">        表达式2：执行n</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">1次，负责判断是否执行循环体（结束循环的条件）</span></span>
<span class="line"><span style="color:#E1E4E8;">        表达式3：执行n次，负责递增或递减，来影响循环条件。</span></span>
<span class="line"><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">、for</span><span style="color:#F97583;">...in</span><span style="color:#E1E4E8;"> 循环（扩展）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">可以用于遍历</span><span style="color:#E1E4E8;">(迭代)对象、数组里面的成员内容。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">。</span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> 循环</span></span>
<span class="line"><span style="color:#E1E4E8;">    格式：</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (表达式){</span></span>
<span class="line"><span style="color:#E1E4E8;">            循环体语句</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">do...</span><span style="color:#E1E4E8;">while循环</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">格式</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">do</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            循环体语句</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (表达式);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">5.</span><span style="color:#E1E4E8;"> 三个循环的区别：</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">do...</span><span style="color:#E1E4E8;">while循环是直接执行循环体，再判断是否继续循环，特点是至少循环一次</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> for和while循环与上面do</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">while不同的是有可能一次都不循环</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> for循环适合循环明确次数和范围的循环 ，while循环和for循环相反，对循环次数未知。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">6.</span><span style="color:#E1E4E8;"> break和continue关键字</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">语句用于跳出当前循环</span><span style="color:#E1E4E8;">。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">用于跳过当前循环中的一次迭代</span><span style="color:#E1E4E8;">, 继续下一次循环。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    可以通过设置标签名，break和continue指定标签名来实现跳过多层循环。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> for循环语句：</span></span>
<span class="line"><span style="color:#24292E;">  格式： </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (表达式1; 表达式2; 表达式3) {</span></span>
<span class="line"><span style="color:#24292E;">        循环体语句块；</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    说明：</span></span>
<span class="line"><span style="color:#24292E;">        表达式1：执行一次，负责初始化循环条件</span></span>
<span class="line"><span style="color:#24292E;">        表达式2：执行n</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">1次，负责判断是否执行循环体（结束循环的条件）</span></span>
<span class="line"><span style="color:#24292E;">        表达式3：执行n次，负责递增或递减，来影响循环条件。</span></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#24292E;">、for</span><span style="color:#D73A49;">...in</span><span style="color:#24292E;"> 循环（扩展）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">可以用于遍历</span><span style="color:#24292E;">(迭代)对象、数组里面的成员内容。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">3</span><span style="color:#24292E;">。</span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> 循环</span></span>
<span class="line"><span style="color:#24292E;">    格式：</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (表达式){</span></span>
<span class="line"><span style="color:#24292E;">            循环体语句</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">do...</span><span style="color:#24292E;">while循环</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">格式</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">do</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            循环体语句</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (表达式);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">5.</span><span style="color:#24292E;"> 三个循环的区别：</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">do...</span><span style="color:#24292E;">while循环是直接执行循环体，再判断是否继续循环，特点是至少循环一次</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> for和while循环与上面do</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">while不同的是有可能一次都不循环</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> for循环适合循环明确次数和范围的循环 ，while循环和for循环相反，对循环次数未知。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">6.</span><span style="color:#24292E;"> break和continue关键字</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">break</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">语句用于跳出当前循环</span><span style="color:#24292E;">。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">用于跳过当前循环中的一次迭代</span><span style="color:#24292E;">, 继续下一次循环。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    可以通过设置标签名，break和continue指定标签名来实现跳过多层循环。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,7),o=[e];function c(r,E,t,y,i,b){return n(),a("div",null,o)}const F=s(p,[["render",c]]);export{m as __pageData,F as default};
