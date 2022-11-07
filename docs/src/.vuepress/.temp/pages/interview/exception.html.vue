<template><div><h2 id="异常简介" tabindex="-1"><a class="header-anchor" href="#异常简介" aria-hidden="true">#</a> 异常简介</h2>
<h3 id="异常类层次结构" tabindex="-1"><a class="header-anchor" href="#异常类层次结构" aria-hidden="true">#</a> 异常类层次结构</h3>
<p><img src="https://s1.ax1x.com/2020/07/28/akwEee.png" alt="" loading="lazy"></p>
<p>从结构图可以看出，所有异常均继承自 <code v-pre>Throwable</code> 类，它有两个重要的子类：<code v-pre>Exception</code> 和 <code v-pre>Error</code> ，各自又包含大量子类。</p>
<ol>
<li><strong>Exception</strong></li>
</ol>
<p><strong>程序本身可以处理的异常</strong>，又可以分为 <strong>受检异常</strong> 和  <strong>非受检异常</strong> ，<strong>受检异常</strong> 可以用 <code v-pre>try...catch...</code> 语句进行捕获处理，而且能从异常中恢复。但 <strong>非受检异常</strong> 是程序运行时错误，会导致程序崩溃而无法恢复。</p>
<ul>
<li><strong>受检异常</strong></li>
</ul>
<p>编译器要求必须处理的异常，正确的程序在运行时，经常会出现、预期范围内的情况。一旦发生该类异常，就必须使用某种方式进行处理。<strong>包括除开 <code v-pre>RuntimeException</code> 及其子类之外的 <code v-pre>Exception</code> 异常</strong>。编译器会检查此类异常，所以我们必须使用 <code v-pre>throws</code> 进行抛出或者 <code v-pre>try...catch</code> 进行捕获，否则将导致编译失败。</p>
<ul>
<li><strong>非受检异常</strong></li>
</ul>
<p>编译器不会检查而且也不要求我们进行处理，即就算在程序中出现了此类异常，即便我们没有用 <code v-pre>try...catch</code> 进行捕获或者用 <code v-pre>throws</code> 进行抛出，编译都会成功。包括 <strong><code v-pre>RuntimeException</code> 及其子类和错误 <code v-pre>Error</code></strong>.</p>
<p>同时也可以分为：<strong>运行时异常和编译时异常</strong>。</p>
<ul>
<li><strong>运行时异常</strong></li>
</ul>
<p><code v-pre>RuntimeException</code> 类及其子类，表示 JVM 在运行期间可能出现的异常，Java 编译器不会检查它。没有通过 <code v-pre>throws</code> 抛出或 <code v-pre>try...catch</code> 捕获，仍然可以编译通过，常见的有 <code v-pre>NullPointerException、ArrayIndexOutBoundException、ClassCastException、ArithmeticException、NumberFormatException、IllegalArgumentException</code>；</p>
<ul>
<li><strong>编译时异常</strong></li>
</ul>
<p><code v-pre>Exception</code> 中除开运行时异常之外的异常，Java 编译器会检查它，一旦出现，必须使用 <code v-pre>throws</code> 进行声明抛出，或者使用 <code v-pre>try...catch</code> 进行捕获异常，否则不能通过编译。常见的有 <code v-pre>ClassNotFoundException、IOException</code>。在程序中，通常不会自定义该类异常，而是直接用系统提供的异常类，<strong>该异常必须手动在代码中添加捕获语句来处理。</strong></p>
<ol start="2">
<li><strong>Error</strong></li>
</ol>
<p><strong>程序无法处理的错误</strong>，表示程序运行过程中教严重的问题，大多与 coder 所做操作无关，而是代码运行时 JVM 出现的问题。此时说明故障发生于虚拟机本身、或者发生在虚拟机试图执行应用时。</p>
<h3 id="throwable-常用方法" tabindex="-1"><a class="header-anchor" href="#throwable-常用方法" aria-hidden="true">#</a> Throwable 常用方法</h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>public String getMessage()</code></td>
<td>返回异常发生时的简要描述</td>
</tr>
<tr>
<td><code v-pre>public String toString()</code></td>
<td>返回异常发生时的详细信息</td>
</tr>
<tr>
<td><code v-pre>public String getLocalizeMessage()</code></td>
<td>返回异常对象的本地化信息，若子类重写该方法，可以生成本地化信息，若未重写，则返回信息同 <code v-pre>getMessage()</code> 方法</td>
</tr>
<tr>
<td><code v-pre>public void printStackTrace()</code></td>
<td>在控制台中打印异常对象封装的异常信息</td>
</tr>
</tbody>
</table>
<h3 id="try-catch-finally-和-try-with-resources" tabindex="-1"><a class="header-anchor" href="#try-catch-finally-和-try-with-resources" aria-hidden="true">#</a> try-catch-finally 和 try-with-resources</h3>
<ol>
<li><strong>try-catch-finally</strong>
<ul>
<li><strong>try</strong> ：用于捕获异常，后接零个或多个 <code v-pre>catch</code>，没有 <code v-pre>catch</code> 则必须加上 <code v-pre>finally</code>；</li>
<li><strong>catch</strong>：用于处理 <code v-pre>try</code> 捕获到的异常；</li>
<li><strong>finally</strong>：无论是否捕获/处理异常，<code v-pre>finally</code> 块中内容均会执行，就算 <code v-pre>try</code> 或 <code v-pre>catch</code> 中有 <code v-pre>return</code> 语句，<code v-pre>finally</code> 中代码也将在方法返回之前执行；</li>
</ul>
</li>
<li><strong>try-with-resources</strong></li>
</ol>
<p>当我们有必须要关闭的资源时，建议优先使用 <code v-pre>try-with-resources</code>，这样写出的代码更加简短清晰。</p>
<ol start="3">
<li><strong>两者对比</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// try-catch-finally</span>
<span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/demo.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>scanner <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        scanner<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// try-with-resources</span>
<span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D:/demo.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h2>
<p>Java 中，异常处理机制分为 <strong>声明异常、抛出异常和捕获异常</strong>，根据异常的情况，可以对异常进行不同处理：</p>
<p><img src="https://s1.ax1x.com/2020/09/11/wYXFKO.png" alt="" loading="lazy"></p>
<h3 id="声明异常" tabindex="-1"><a class="header-anchor" href="#声明异常" aria-hidden="true">#</a> 声明异常</h3>
<p>对于知道如何进行处理的异常，一般要进行捕获，但此时不知道如何将处理的异常继续传递下去，可以通过在方法签名中使用 <code v-pre>throws</code> 来声明可能抛出的异常，有如下两点需要注意：</p>
<ol>
<li><strong>非受检异常（Error、RuntimeException 及其子类）</strong> 不能使用 <code v-pre>throws</code> 关键字来声明要抛出的异常；</li>
<li><strong>一个方法出现编译时异常，就需要 <code v-pre>try...catch/throws</code> 进行处理，否则会导致编译失败</strong> ；</li>
</ol>
<h3 id="抛出异常" tabindex="-1"><a class="header-anchor" href="#抛出异常" aria-hidden="true">#</a> 抛出异常</h3>
<p>一旦觉得某些异常无法处理，但同时又不用我们进行处理，那我们就可以将其抛出。一般是使用 <code v-pre>throw</code> 在方法内部抛出一个 <code v-pre>Throwable</code> 类型的异常。</p>
<h3 id="捕获异常" tabindex="-1"><a class="header-anchor" href="#捕获异常" aria-hidden="true">#</a> 捕获异常</h3>
<p>程序在运行前一般不会报错，但是运行后可能出现某些未知错误，如果不想直接抛出给上一级处理，那我们就需要通过 <code v-pre>try...catch...</code> 的形式对异常进行捕获，然后根据不同的情况来进行相应处理。</p>
<h2 id="异常常见面试题" tabindex="-1"><a class="header-anchor" href="#异常常见面试题" aria-hidden="true">#</a> 异常常见面试题</h2>
<h3 id="error-和-exception-的区别" tabindex="-1"><a class="header-anchor" href="#error-和-exception-的区别" aria-hidden="true">#</a> Error 和 Exception 的区别？</h3>
<p><code v-pre>Exception</code> 类的异常能够在程序中进行捕获并处理，遇到该类异常，应该进行处理，从而使程序能够继续正常运行；</p>
<p><code v-pre>Error</code> 类的错误一般是虚拟机相关错误，如系统崩溃、内存不足、堆栈溢出等，编译器不会检测这类错误。我们也不会对这类错误进行捕获，一旦发生，一般都会导致程序崩溃无法恢复；</p>
<h3 id="运行时异常和受检异常的区别" tabindex="-1"><a class="header-anchor" href="#运行时异常和受检异常的区别" aria-hidden="true">#</a> 运行时异常和受检异常的区别？</h3>
<p>运行时异常包括 <code v-pre>RuntimeException</code> 及其子类，表示 JVM 运行期间可能出现的异常，不会被 Java 编译器检查。</p>
<p>而受检异常是除开 <code v-pre>RuntimeException</code> 及其子类之外的其他 <code v-pre>Exception</code>，会被 Java 编译器检查。</p>
<p>两者的 <strong>区别</strong> 在于：是否需要调用者必须处理该异常，<strong>如果必须处理，则一般使用受检异常，否则一般选择非受检异常（RuntimeException）</strong>；</p>
<h3 id="throw-和-throws-的区别" tabindex="-1"><a class="header-anchor" href="#throw-和-throws-的区别" aria-hidden="true">#</a> throw 和 throws 的区别？</h3>
<ul>
<li><strong>throw：用于在方法内部抛出异常对象</strong>
<ol>
<li><code v-pre>throw</code> 用在方法体内，表示抛出异常，由方法体内的语句处理；</li>
<li><code v-pre>throw</code> 是具体向外抛出异常的动作，所以抛出的是一个异常实例，执行 <code v-pre>throw</code> 一定是抛出了某种异常；</li>
</ol>
</li>
<li><strong>throws：用于在方法签名上声明该方法所要抛出的异常</strong>
<ol>
<li><code v-pre>throws</code> 语句使用在方法声明后，表示若抛出异常，则由该方法的调用者来进行异常的处理；</li>
<li><code v-pre>throws</code> 主要是声明这个方法会抛出某种类型的异常，让它的使用者要知道需要捕获的异常的类型；</li>
<li><code v-pre>throws</code> 表示出现异常的一种可能性，并非一定发生该种异常；</li>
</ol>
</li>
</ul>
<h3 id="final、finally、finallize-的区别" tabindex="-1"><a class="header-anchor" href="#final、finally、finallize-的区别" aria-hidden="true">#</a> final、finally、finallize 的区别？</h3>
<p><code v-pre>final</code> 用于修饰类、方法、变量，修饰类时表示类不能被继承；修饰方法时表示方法不能别重写，但是能够被重载；修饰变量时表示该变量是一个常量无法被重写赋值；</p>
<p><code v-pre>finally</code> 一般作用于 <code v-pre>try...catch</code> 代码块，处理异常时，通常将必须要执行的代码放在 <code v-pre>finally</code> 代码块中，表示无论是否出现异常，此代码块均执行，一般用来存放一些关闭资源的代码；</p>
<p><code v-pre>finallize</code> 是一个方法，属于 <code v-pre>Object</code> 类，Java 允许用 <code v-pre>finallize()</code> 方法在垃圾回收器将对象从内存中清除前做一些必要的清理工作；</p>
<h3 id="常见的-runtimeexception-异常" tabindex="-1"><a class="header-anchor" href="#常见的-runtimeexception-异常" aria-hidden="true">#</a> 常见的 RuntimeException 异常？</h3>
<ul>
<li><code v-pre>ClassCastException</code></li>
<li><code v-pre>IndexOutOfBoundsException</code></li>
<li><code v-pre>NullPointerException</code></li>
<li><code v-pre>ArrayStoreException</code></li>
<li><code v-pre>BufferOverFlowException</code></li>
</ul>
<h3 id="jvm-如何处理异常" tabindex="-1"><a class="header-anchor" href="#jvm-如何处理异常" aria-hidden="true">#</a> JVM 如何处理异常？</h3>
<p>一旦某方法发生异常，该方法就会创建一个异常对象，并将其转交给 JVM，该异常对象一般包含 <strong>异常名称、异常描述以及异常发生时应用程序的状态</strong>。这个 <strong>创建异常对象并转交给 JVM 的过程叫做抛出异常</strong>。可能有一系列的方法调用，最终才能进入抛出异常的方法，这一系列方法调用的有序列表叫做调用栈。</p>
<p>JVM 沿着调用栈去查找是否有需要处理异常的代码，一旦发现则调用异常处理代码。当 JVM 发现可以处理异常的代码时，会将发生的异常传递给它。如果 JVM 未找到能够处理该异常的代码块，就会将其转交给默认的异常处理器（JVM 的一部分），由异常处理器打印出异常信息并终止应用程序；</p>
</div></template>


