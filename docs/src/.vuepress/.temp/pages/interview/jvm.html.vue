<template><div><h2 id="jvm-内存区域" tabindex="-1"><a class="header-anchor" href="#jvm-内存区域" aria-hidden="true">#</a> JVM 内存区域？</h2>
<h3 id="jvm-定义及组成" tabindex="-1"><a class="header-anchor" href="#jvm-定义及组成" aria-hidden="true">#</a> JVM 定义及组成</h3>
<p>JVM 是一种用于计算设备的规范，是一个虚构出来的计算机，通过在实体机上仿真模拟各种计算机功能来实现。JVM 运行在操作系统之上，与硬件之间并没有进行直接交互，这也就为什么 Java 语言只需要编译一次，就能够在不同平台上运行，通常有如下组成部分：</p>
<ul>
<li><strong>一组字节码指令集</strong></li>
<li><strong>一组寄存器</strong></li>
<li><strong>一个栈</strong></li>
<li><strong>一个垃圾回收堆</strong></li>
<li><strong>一个存储方法域</strong></li>
</ul>
<h3 id="jvm-功能" tabindex="-1"><a class="header-anchor" href="#jvm-功能" aria-hidden="true">#</a> JVM 功能</h3>
<p>JVM 主要功能分为三块：</p>
<ol>
<li><strong>执行 Java 代码</strong></li>
<li><strong>内存管理</strong></li>
<li><strong>线程资源同步和交互机制</strong></li>
</ol>
<p><img src="https://s1.ax1x.com/2020/09/27/0AQayn.png" alt="" loading="lazy"></p>
<h3 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h3>
<p>指程序执行过程中的一个线程实体，JVM 允许一个应用并发执行多个线程。Hotspot JVM 中的 JVM 线程和操作系统中的线程有着直接的映射关系。</p>
<p>当线程本地存储、缓冲区分配、同步对象、栈、程序计数器等资源准备好之后，就会创建一个操作系统原生线程。一旦 Java 的线程结束，操作系统原生线程也随之被回收。操作系统作为调度中心，负责调度并分配线程到任何可用的 CPU 上。一旦操作系统原生线程初始化完毕，就会调用 Java 线程的 <code v-pre>run()</code> 方法。当线程结束时，就会释放操作系统原生线程和 Java 线程的所有资源。</p>
<h3 id="hotspot-jvm-后台系统线程" tabindex="-1"><a class="header-anchor" href="#hotspot-jvm-后台系统线程" aria-hidden="true">#</a> Hotspot JVM 后台系统线程</h3>
<ol>
<li><strong>虚拟机线程</strong>：等待 JVM 到达安全点操作时出现。操作必须在独立的线程里执行，因为当堆修改无法进行时，线程都需要 JVM 位于安全点。<strong>安全点操作的类型有：stop-the-world 垃圾回收、线程栈 dump、线程暂停、线程偏向锁（biased locking）解除</strong>；</li>
<li><strong>周期性任务线程</strong>：负责定时器事件（即中断），用于调度周期性操作的执行；</li>
<li><strong>GC 线程</strong>：支持 JVM 中的垃圾回收活动；</li>
<li><strong>编译期线程</strong>：将字节码（<code v-pre>.class</code>）动态编译为本地平台相关的机器码；</li>
<li><strong>信号分发线程</strong>：接收发送到 JVM 的信号并调用对应的方法进行处理；</li>
</ol>
<h3 id="深拷贝-vs-浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝-vs-浅拷贝" aria-hidden="true">#</a> 深拷贝 vs 浅拷贝</h3>
<p>浅拷贝（ShallowCopy）只是增加一个指针指向已存在的内存地址，仅仅是指向被复制的内存地址，一旦原地址发生改变，则浅拷贝出来的对象也会随之变化。所以改变其中任何一个都会导致另一个对象的变化，<code v-pre>clone()</code> 方法是浅拷贝；</p>
<p>深拷贝（DeepCopy）是增加一个指针且申请一个新的内存，使这个增加的指针指向新的内存，相当于开辟了一块 <strong>新的内存地址</strong> 用于存放复制的对象。原对象和被拷贝出来的对象互不影响，其中任何一个改变都不会引起另一个改变。</p>
<h3 id="堆和栈的区别" tabindex="-1"><a class="header-anchor" href="#堆和栈的区别" aria-hidden="true">#</a> 堆和栈的区别</h3>
<table>
<thead>
<tr>
<th>不同点</th>
<th>堆</th>
<th>栈</th>
</tr>
</thead>
<tbody>
<tr>
<td>物理地址</td>
<td>不连续，性能较慢</td>
<td>连续，性能较快</td>
</tr>
<tr>
<td>内存</td>
<td>不连续，因此分配内存在 <strong>运行期动态分配</strong>，<strong>大小不固定</strong></td>
<td>连续，内存大小在 <strong>编译期</strong> 确认，<strong>大小固定</strong></td>
</tr>
<tr>
<td>存放</td>
<td><strong>对象实例、数组、静态对象</strong></td>
<td><strong>局部变量、操作数栈、指向运行时常量池的引用、方法返回地址、附加信息</strong></td>
</tr>
<tr>
<td>可见度</td>
<td>对整个应用程序共享、可见</td>
<td>只对线程可见，生命周期同线程</td>
</tr>
</tbody>
</table>
<h2 id="运行时数据区" tabindex="-1"><a class="header-anchor" href="#运行时数据区" aria-hidden="true">#</a> 运行时数据区</h2>
<h3 id="内存划分" tabindex="-1"><a class="header-anchor" href="#内存划分" aria-hidden="true">#</a> 内存划分</h3>
<p>根据 JVM 规范，JVM 运行时数据区可以分为如下区域：</p>
<ul>
<li><strong>方法区（Method Area）</strong></li>
<li><strong>堆区（Heap）</strong></li>
<li><strong>虚拟机栈（VM Stack）</strong></li>
<li><strong>本地方法栈（Native Method Stack）</strong></li>
<li><strong>程序计数器（Program Counter Register）</strong></li>
</ul>
<p><img src="https://s1.ax1x.com/2020/09/27/0A3YWD.png" alt="" loading="lazy"></p>
<p>所有线程私有的数据区域生命周期都与线程同步，随着用户线程的创建而创建，线程的结束而销毁。而线程共享的数据区域则是随着虚拟机的启动而创建，随着虚拟机的关闭而销毁。</p>
<h3 id="各内存区域功能" tabindex="-1"><a class="header-anchor" href="#各内存区域功能" aria-hidden="true">#</a> 各内存区域功能</h3>
<ol>
<li><strong>方法区</strong></li>
</ol>
<p>方法区存放要 <strong>加载的类信息（类名、修饰符等）、静态变量、构造函数、<code v-pre>final</code> 常量、类中字段和方法等信息</strong>。该内存区域是全局共享的，在一定条件下也会出发 GC 机制。一旦超出其内存允许大小，就会抛出 OOM。</p>
<p>在 Hotspot JVM 中，方法区对应 <strong>持久代</strong>。<strong>运行时常量池（Runtime Constant Pool）</strong> 是方法区中的一部分，用于存储 <strong>编译器生成的常量和引用</strong>。</p>
<ol start="2">
<li><strong>堆区</strong></li>
</ol>
<p>虚拟机中内存最大的一块，GC 发生最频繁的区域，<strong>被所有线程共享</strong>，在虚拟机启启动时创建，主要用于 <strong>存放对象实例以及数组，所有 <code v-pre>new</code>  出来的对象都存放在该区</strong>。现代的 JVM 采用 <strong>分代收集算法</strong>，所以又可以细分为：<strong>新生代（Eden、From Survivor、To Survivor）和老年代</strong>。</p>
<ol start="3">
<li><strong>虚拟机栈</strong></li>
</ol>
<p>占用操作系统内存，每个线程对应一个虚拟机栈，属于线程私有，生命周期同线程一样，每个方法执行时均产生一个栈帧（Stack Frame），用于 <strong>存储局部变量表、动态链接、操作数栈、方法出口和异常分派等信息。当方法被调用时，栈帧入栈，当方法调用结束时，栈帧出栈。</strong></p>
<p><strong>局部变量表</strong> 中存放了方法相关的局部变量，包括各种基本数据类型及对象的引用地址等，因此其 <strong>内存空间在编译期就可以确定，运行时不再改变。</strong></p>
<p>此外，虚拟机栈中定义了两种异常：<strong>StackOverFlowError 和 OOM</strong>。</p>
<ol start="4">
<li><strong>本地方法栈</strong></li>
</ol>
<p>本地方法栈用于调用 <code v-pre>native</code> 方法的执行，存储了每个 <code v-pre>native</code> 方法的执行状态。本地方法栈和虚拟机栈的区别在于：<strong>虚拟机栈中执行 Java 方法，而本地方法栈中执行 <code v-pre>native</code> 方法</strong>。</p>
<ol start="5">
<li><strong>程序计数器</strong></li>
</ol>
<p>程序计数器是一块很小的内存区域，不在 RAM 中，而是直接划分在 CPU 上，<strong>是当前线程所执行的字节码的行号指示器</strong>。<strong>其作用是：JVM 在解释字节码文件时，存储当前线程执行的字节码行号（每个程序计数器只能记录一个线程的行号），字节码解析器的工作就是通过改变该计数器的值，来选取下一条需要执行的字节码指令。分支、循环、跳转、异常处理以及线程恢复等基础功能均依赖于该计数器完成，各个 JVM 所采用的方式不一样，是 JVM 中唯一一个没有规定任何 OutOfMemoryError 的区域</strong>。</p>
<h3 id="java-7-和-java-8-在内存模型上的区别" tabindex="-1"><a class="header-anchor" href="#java-7-和-java-8-在内存模型上的区别" aria-hidden="true">#</a> Java 7 和 Java 8 在内存模型上的区别</h3>
<p>Java 8 中取消了永久代，用元空间（<code v-pre>Metaspace</code>）代替，元空间是存在本地内存（<code v-pre>Native memory</code>）中的；</p>
<h3 id="什么情况下会出现堆内存溢出" tabindex="-1"><a class="header-anchor" href="#什么情况下会出现堆内存溢出" aria-hidden="true">#</a> 什么情况下会出现堆内存溢出？</h3>
<p>堆内存中存储对象实例，所以只要不断创建对象，并保证 <code v-pre>GC roots</code> 到对象之间有可达路径来避免 GC 机制清除这些对象。就会在对象数量达到最大堆容量限制后，产生内存溢出异常；</p>
<h2 id="gc-机制" tabindex="-1"><a class="header-anchor" href="#gc-机制" aria-hidden="true">#</a> GC 机制</h2>
<p>推荐阅读：</p>
<blockquote>
<p><a href="https://juejin.im/post/6844903513248497677" target="_blank" rel="noopener noreferrer">深入理解JVM的内存结构及GC机制<ExternalLinkIcon/></a></p>
<p><a href="https://snailclimb.gitee.io/javaguide/#/docs/java/jvm/JVM%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6?id=_3-%e5%9e%83%e5%9c%be%e6%94%b6%e9%9b%86%e7%ae%97%e6%b3%95" target="_blank" rel="noopener noreferrer">JVM 垃圾回收<ExternalLinkIcon/></a></p>
<p><a href="https://www.jianshu.com/p/5261a62e4d29" target="_blank" rel="noopener noreferrer">浅析JAVA的垃圾回收机制（GC）<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="什么是-gc" tabindex="-1"><a class="header-anchor" href="#什么是-gc" aria-hidden="true">#</a> 什么是 GC？</h3>
<p>GC（Garbage Collection，垃圾回收）机制是 JVM 垃圾回收器提供的 <strong>一种用于在空闲时间不定时回收无任何引用对象引用的对象所占据的内存空间的一种机制</strong>。回收的只是对象所占据的内存空间而非对象本身，即只负责释放对象所占有的内存。</p>
<p>GC 机制是区别 Java 和 C++ 等语言的一个重要特性。C++ 中，当我们不再需要某些内存时，需要手动实现垃圾回收，但是 Java 中不用我们手动去实现垃圾回收，JVM 已经自带垃圾回收机制，我们只需要专注于业务开发就可以了。</p>
<h3 id="java-中的对象引用" tabindex="-1"><a class="header-anchor" href="#java-中的对象引用" aria-hidden="true">#</a> Java 中的对象引用</h3>
<p>JDK1.2 之后，Java 引用主要分为如下几种（从上到下引用强度逐渐减弱），日常程序设计中，使用最多的就是 <strong>强引用和弱引用</strong>：</p>
<ul>
<li><strong>强引用</strong></li>
<li><strong>软引用</strong></li>
<li><strong>弱引用</strong></li>
<li><strong>虚引用</strong></li>
</ul>
<ol>
<li><strong>强引用</strong></li>
</ol>
<p>使用最普遍的引用，也是我们日常使用的大多数引用，如 <code v-pre>String str  = &quot;村雨遥&quot;</code>。若一个对象具有强引用，就 <strong>相当于生活中必备的物品</strong>，垃圾回收器绝对不会回收它，当内存空间不足时，JVM 宁愿抛出 OOM 错误，也不会随意回收具有强引用的对象来解决内存不足问题，因此强引用是造成 Java <strong>内存泄露</strong> 的主要原因之一。</p>
<ol start="2">
<li><strong>软引用</strong></li>
</ol>
<p>若一个对象只具有软引用，则 <strong>相当于生活中可有可无的物品</strong>。若内存空间充足，则垃圾回收器不会回收它，一旦内存空间不足，则会回收这些对象的内存。只要垃圾回收器未回收这个对象的内存，则该对象能够被程序使用，<strong>通过使用软引用可以实现内存敏感的高速缓存，加速 JVM 对垃圾内存的回收速度，同时维护系统的运行安全，防止 OOM 等问题的产生</strong>。</p>
<ol start="3">
<li><strong>弱引用</strong></li>
</ol>
<p>一若个对象只具有弱引用，则 <strong>相当于生活中可有可无的物品。</strong> <strong>软引用和弱引用的区别在于：只拥有弱引用的对象具有更短暂的生命周期，在垃圾回收器线程扫描它所管辖的内存区域的过程中，一旦发现具有弱引用的对象，则无论当前内存空间是否充足，都会回收它的内存。</strong> 但一般垃圾回收器的线程优先级很低，因此不会很快就回收具有弱引用的对象。</p>
<p>此外 <strong>软引用和弱引用都可以和一个引用队列联合使用，一旦他们所引用的对象被垃圾回收，JVM 就会将这个引用加入到相关的引用队列中。</strong></p>
<ol start="4">
<li><strong>虚引用</strong></li>
</ol>
<p>形同虚设的一个引用，不会决定对象的声明周期，一个对象仅持有虚引用，则任何时候都可能被垃圾回收器回收，<strong>主要用来跟踪对象被垃圾回收的活动</strong>。</p>
<p><strong>虚引用与软引用和弱引用的区别</strong>：<strong>虚引用必须和引用队列联合使用</strong>。当垃圾回收器准备回收一个对象时，若发现该对象具有虚引用，则会在回收该对象的内存前，将该虚引用加入到与之关联的引用队列中。程序能够通过判断引用队列中是否已经加入虚引用，来了解被引用的对象是否将要被垃圾回收器回收。</p>
<ol start="5">
<li><strong>总结</strong></li>
</ol>
<table>
<thead>
<tr>
<th>引用类型</th>
<th>回收阶段</th>
</tr>
</thead>
<tbody>
<tr>
<td>强引用</td>
<td>发生 GC 时不被回收</td>
</tr>
<tr>
<td>软引用</td>
<td>有用但非必须的对象，发生内存溢出前被回收</td>
</tr>
<tr>
<td>弱引用</td>
<td>有用但非必须的引用，下一次 GC 时被回收</td>
</tr>
<tr>
<td>虚引用</td>
<td>无法通过虚引用获取对象，用 <code v-pre>PhantomReference</code> 实现虚引用，其用途是在 GC 时返回一个通知</td>
</tr>
</tbody>
</table>
<h3 id="判断对象是否为垃圾" tabindex="-1"><a class="header-anchor" href="#判断对象是否为垃圾" aria-hidden="true">#</a> 判断对象是否为垃圾</h3>
<p><img src="https://s1.ax1x.com/2020/08/15/dkEfYT.png" alt="" loading="lazy"></p>
<p>如上图所示，要判断一个对象是否为垃圾，通常有如下两种方法：</p>
<ul>
<li><strong>引用计数算法</strong></li>
</ul>
<p>为每个对象创建一个引用计数，有对象引用时计数器 +1，引用被释放时计数 -1，当计数器为 0 时就可以被回收，但是存在 <strong>不能解决循环引用</strong> 的问题。</p>
<ul>
<li><strong>可达性分析算法</strong></li>
</ul>
<p>从 GC Roots 开始向下搜索，搜索所走过的路径称为引用链。当一个对象到 GC Roots 没有任何引用链相连时，则说明该对象能够被回收。若在 GC Roots 和一个对象间没有可达路径，则称该对象是不可达的。</p>
<h3 id="需要-gc-的内存区域" tabindex="-1"><a class="header-anchor" href="#需要-gc-的内存区域" aria-hidden="true">#</a> 需要 GC 的内存区域</h3>
<p>对于 JVM 内存布局而言，线程独享的区域为：<strong>程序计数器、JVM 栈、本地方法栈</strong>，三者都跟线程 “共生死”，所以不需要 GC。但是由线程共享的：<strong>堆区、方法区</strong> 则是 GC 的重点关注对象。</p>
<p><img src="https://s1.ax1x.com/2020/08/15/dkZBrj.png" alt="" loading="lazy"></p>
<h3 id="回收垃圾对象内存的算法" tabindex="-1"><a class="header-anchor" href="#回收垃圾对象内存的算法" aria-hidden="true">#</a> 回收垃圾对象内存的算法</h3>
<ul>
<li><strong>标记 - 清除算法</strong></li>
<li><strong>复制算法</strong></li>
<li><strong>标记 - 整理算法</strong></li>
<li><strong>分代收集算法</strong></li>
</ul>
<ol>
<li><strong>标记 - 清除算法</strong></li>
</ol>
<p>分为 <strong>标记</strong> 和 <strong>清除</strong> 阶段：首先标记出所有需要回收的对象，然后统一回收被标记的对象所占用的空间；</p>
<ul>
<li><strong>优点：</strong> 实现简单，不用对象进行移动；</li>
<li><strong>缺点：</strong> 标记、清除过程效率低；清除后产生了 <strong>大量不连续的内存碎片</strong>，提高了垃圾回收的频率；</li>
</ul>
<p><img src="https://static001.infoq.cn/resource/image/5b/c3/5b780f9d1c31beca2661e80f5e4638c3.png" alt="源自网络" loading="lazy"></p>
<ol start="2">
<li><strong>复制算法</strong></li>
</ol>
<p>针对效率问题而提出的算法，<strong>通过将内存划分为带下相同的两块，每次使用其中的一块，当其中一块的内存被占满后，就将其中还存活着的对象复制到另一块中，最后将使用过的空间一次性清理，这样就保证了每次的内存回收都是对内存区间的一半进行回收</strong>。</p>
<ul>
<li>
<p><strong>优点：按顺序分配内存即可，实现简单、运行高效、不用考虑内存碎片；</strong></p>
</li>
<li>
<p><strong>缺点：可用内存大小缩小为原来的一半，对象存活率高时将频繁进行复制，效率变低；</strong></p>
</li>
</ul>
<p><img src="https://static001.infoq.cn/resource/image/1c/d1/1cff605d806b814732c9d745c4a45ed1.png" alt="源自网络" loading="lazy"></p>
<ol start="3">
<li><strong>标记 - 整理算法</strong></li>
</ol>
<p>结合标记 - 清除算法和复制算法，标记过程同 <strong>标记 - 清除算法</strong>，但和后续过程中不是直接回收可回收对象，而是 <strong>让所有存活的对象向一端移动，然后直接清理端边界之外的内存</strong>。</p>
<ul>
<li><strong>优点</strong>：解决了 <strong>标记-清理</strong> 算法存在的内存碎片问题；</li>
<li><strong>缺点</strong>：仍需要进行局部对象移动，一定程度上降低了效率；</li>
</ul>
<p><img src="https://static001.infoq.cn/resource/image/ea/1b/ea2a11453924bfa38927cb0c262e511b.png" alt="源自网络" loading="lazy"></p>
<ol start="4">
<li><strong>分代收集算法</strong></li>
</ol>
<p>现在的虚拟机的垃圾回收器基本都采用分代收集算法，它会根据对象存活周期的不同将内存划分为不同的块，一般将 Java <strong>堆划分为新生代和老年代</strong>，然后根据各年代的特点选择合适的垃圾回收算法。</p>
<ul>
<li><strong>新生代中，每次收集都会收集大量对象，所以可以选择复制算法，只要付出少量复制成本就能完成垃圾收集；</strong></li>
<li><strong>老年代的对象存活几率很高，而且没有额外空间对其进行分配担保，所以只能选择 “标记 - 整理算法” 或 ”标记 - 清除算法“ 来进行垃圾回收，而我们一般都是选择 “标记 - 整理算法”</strong>。</li>
</ul>
<h3 id="垃圾回收器" tabindex="-1"><a class="header-anchor" href="#垃圾回收器" aria-hidden="true">#</a> 垃圾回收器</h3>
<p><strong>垃圾回收算法是方法论，具体实现就是垃圾收集器</strong> 进行垃圾收集时，必须暂停其他所有工作线程，这一过程也叫 <code v-pre>Stop The World</code>。常见的垃圾回收器有如下几种：</p>
<ul>
<li><strong>Serial 收集器</strong></li>
<li><strong>ParNew 收集器</strong></li>
<li><strong>Parallel Scavenge 收集器</strong></li>
<li><strong>Serial Old 收集器</strong></li>
<li><strong>Parallel Old 收集器</strong></li>
<li><strong>CMS 收集器</strong></li>
<li><strong>G1 收集器</strong></li>
</ul>
<p><img src="https://s1.ax1x.com/2020/09/09/w3ZLQA.png" alt="" loading="lazy"></p>
<ol>
<li><strong>Serial 收集器（单线程 + 复制算法）</strong></li>
</ol>
<p><strong>Serial （串行）收集器</strong> 是最基本，使用时间最久的垃圾收集器，<strong>使用复制算法</strong>。它是一个 <strong>单线程</strong> 的收集器，但并非意味着它只会用一条垃圾回收线程去完成垃圾回收，而是说它在进行垃圾回收工作的同时 <strong>必须暂停其他所有的工作线程，直到垃圾回收完成，是运行在客户端模式下的虚拟机的首选，能够与 CMS 收集器协同工作</strong>。<strong>新生代单线程收集器，标记和清理均为单线程，优点是简单高效。</strong></p>
<ol start="2">
<li><strong>ParNew 收集器（多线程 + Serial）</strong></li>
</ol>
<p><strong>Serial 收集器</strong> 的多线程版本，除开是使用多线程进行垃圾回收，其他机制（如控制参数、回收算法、回收策略等）都和 Serial 收集器保持一致，<strong>是运行在服务器模式下的虚拟机的首选，除开 Serial  收集器外，只有它能够与 CMS 收集器配合使用</strong>。<strong>新生代并行收集器。</strong></p>
<ol start="3">
<li><strong>Parallel Scavenge 收集器（多线程 + 复制算法）</strong></li>
</ol>
<p>Parallel Scavenge 收集器也是 <strong>使用复制算法的多线程收集器</strong>，<strong>但 Parallel Scavenge 重点关注吞吐量（CPU 用于运行用户代码的时间与 CPU 总消耗时间的比值），以便能够最高效率的利用 CPU，适合于在后台运算而无需太多交互的任务。而 CMS 收集器更多关注的是用户线程的停顿时间（最大化提高用户体验）</strong>。</p>
<ol start="4">
<li><strong>Serial Old 收集器（单线程 + 标记-整理算法）</strong></li>
</ol>
<p>Serial 收集器用于老年代的版本，是一个 <strong>单线程标记-整理算法</strong> 的收集器，主要是 <strong>运行在 Client 下的 Java 虚拟机默认的老年代垃圾收集器</strong> 主要有两大用途：</p>
<ul>
<li>在 JDK 1.5 及之前的版本中与 Parallel Scavenge 收集器共同使用；</li>
<li>作为 CMS 收集器的后备方案；</li>
</ul>
<ol start="5">
<li><strong>Parallel Old 收集器（多线程 + 标记-整理算法）</strong></li>
</ol>
<p>Parallel Old是 Parallel Scavenge 的老年代版本，使用 <strong>多线程</strong> 的 <strong>“标记 - 整理算法”</strong>，在注重吞吐量和 CPU 资源的场景下，可以优先考虑 Parallel Old 收集器和 Parallel Scavenge 收集器。</p>
<ol start="6">
<li><strong>CMS 收集器（多线程 + 标记-清除算法）</strong></li>
</ol>
<p>CMS（Current Mark Sweep）收集器是一种 <strong>以获取最短垃圾回收停顿时间为目标的收集器，重点关注用户体验。是 HotSpot 虚拟机中第一个真正意义上的并发收集器，第一次实现了垃圾回收线程和用户线程同时工作</strong>。</p>
<p>CMS 收集器是基于 “<strong>标记- 清除算法</strong>” 实现，相比其他垃圾回收器更加复杂，通常可以将整个回收过程总结为如下四步：</p>
<ul>
<li><strong>初始标记（stop the world）</strong>：暂停所有其他线程，同时记录下与根节点 <code v-pre>root</code> 直接关联的对象，速度快；</li>
<li><strong>并发标记</strong>：同时开始 GC 和用户线程，用一个 <strong>闭包结构</strong> 去记录可达对象。但由于用户线程可能会不断更新引用域，所以标记过程结束后并不能保证所有可达对象都包含进来，GC 线程无法保证可达性分析的实时性，不用暂停工作线程。</li>
<li><strong>重新标记（stop the world）</strong>：为了修正并发标记过程中用户线程更新而产生的未被包含进闭包的可达对象，该阶段的停顿时间会比初始标记阶段的时间更长，但是远远比并发标记阶段所用时间短，仍然需要暂停所有工作线程。</li>
<li><strong>并发清除</strong>：开启用户线程，同时 GC 线程对未标记的区域做清扫，不需要暂停工作线程。</li>
</ul>
<p>虽然 CMS 作为垃圾收集器有着 <strong>并发收集、低停顿</strong> 等优点，但是也存在三个比较明显的缺点：</p>
<ul>
<li><strong>对于 CPU 的资源十分敏感</strong>；</li>
<li><strong>无法处理浮动垃圾</strong>；</li>
<li>由于使用的是 <strong>标记 - 清除算法</strong>，所以会 <strong>导致收集结束后产生大量空间碎片</strong>；</li>
</ul>
<ol start="7">
<li><strong>G1 收集器</strong></li>
</ol>
<p>G1（Garbage-First）收集器是 <strong>面向服务器的垃圾回收器，主要针对配备多个处理器和大内存的机器，以极高频率满足 GC 停顿时间的同时还具有高吞吐量</strong>，总结下来有如下特点：</p>
<ul>
<li><strong>并行与并发</strong>：充分利用多核和大内存的优势，用多个 CPU 来缩短暂停其他所有的工作线程的停顿时间。有的垃圾回收器需要通过暂停 Java 线程来执行 GC 动作，但 G1 收集器能够通过并发的方法来让 Java 线程继续执行；</li>
<li><strong>分代收集</strong>：G1 收集器可以独立管理整个 GC 过程，但是仍然保留了分代的概念；</li>
<li><strong>空间整合</strong>：不同于 CMS 的 ”标记 - 清除算法“，G1 从整体来看是基于 ”<strong>标记 - 整理算法</strong>“ 实现，但是实际上局部是基于 ”<strong>复制算法</strong>“ 实现；</li>
<li><strong>可预测的停顿</strong>：相对于 CMS 的另一个优势，G1 和 CMS 都关注于用户交互体验（降低停顿时间），但 G1 除开低停顿外，还能够建立可预测的停顿时间模型，将用户指定在 M ms 的时间段内；</li>
</ul>
<p>G1 收集器的运行过程大概可以分为如下 4 个步骤：</p>
<ul>
<li><strong>初始标记</strong></li>
<li><strong>并发标记</strong></li>
<li><strong>最终标记</strong></li>
<li><strong>筛选回收</strong></li>
</ul>
<p><strong>G1 收集器在后台维护了一个优先列表，每次根据允许的收集时间，优先选择回收价值最大的 Region</strong>。这种使用 Region 划分内存空间以及有优先级的区域回收方式，保证了 G1 收集器在有限时间内可以尽可能高的收集效率（把内存化整为零）。</p>
<h2 id="java-类加载机制" tabindex="-1"><a class="header-anchor" href="#java-类加载机制" aria-hidden="true">#</a> Java 类加载机制</h2>
<blockquote>
<p>JVM 把描述类的数据从 <code v-pre>Class </code>文件加载到内存，并对数据进行校验、转换解析和初始化，最终形成可以被虚拟机直接使用的 Java 类型，这就是虚拟机的类加载机制。</p>
</blockquote>
<h3 id="类的生命周期" tabindex="-1"><a class="header-anchor" href="#类的生命周期" aria-hidden="true">#</a> 类的生命周期</h3>
<p>类从被加载到虚拟机内存中开始，然后到卸载出内存为止。其生命周期包括如下 5 个阶段：</p>
<ul>
<li><strong>加载</strong></li>
<li><strong>连接</strong>（又可进一步划分为 <strong>验证、准备和解析</strong> 过程）</li>
<li><strong>初始化</strong></li>
<li><strong>使用</strong></li>
<li><strong>卸载</strong></li>
</ul>
<p><img src="https://s1.ax1x.com/2020/08/17/deCDbR.png" alt="" loading="lazy"></p>
<h3 id="jvm-加载类文件的原理" tabindex="-1"><a class="header-anchor" href="#jvm-加载类文件的原理" aria-hidden="true">#</a> JVM 加载类文件的原理</h3>
<p>Java 中的类都需要经过类加载器加载到 JVM 中后才能运行，而类加载器本身就是一个类，它的工作是将 <code v-pre>.class</code> 文件从硬盘读取到内存。类装载一般有两种方式：</p>
<ol>
<li><strong>隐式装载</strong></li>
</ol>
<p>程序在运行过程中碰到通过 <code v-pre>new</code> 等方式生成对象时，隐式调用类装载器加载对应的类到 JVM 中；</p>
<ol start="2">
<li><strong>显式装载</strong></li>
</ol>
<p>通过 <code v-pre>class.forname()</code> 等方法，显式加载所需的类；</p>
<p>一般来讲，Java 类的加载是动态的，它不会一次性将所有类全部加载后再运行，而是先将保证程序运行的基础类完全加载到 JVM 中，而其他类则是在需要的时候再进行加载。</p>
<h3 id="类加载过程" tabindex="-1"><a class="header-anchor" href="#类加载过程" aria-hidden="true">#</a> 类加载过程</h3>
<p>类文件需要加载到虚拟机中才能够正常使用和运行，通常虚拟机加载类文件的步骤主要有如下 3 阶段：</p>
<blockquote>
<p><strong>加载 -&gt; 连接 -&gt; 初始化</strong></p>
</blockquote>
<p>其中连接又可进一步细分为：<strong>验证 -&gt; 准备 -&gt; 解析</strong>。在这个过程中各个阶段都是 <strong>按照顺序开始，而不是按照顺序进行或完成</strong>，这些阶段通常都是交叉混合进行，在一个阶段执行过程中调用或激活另一个阶段，然后接下来具体介绍下类加载过程中每个阶段所做的工作。</p>
<h3 id="类加载过程中的具体分工" tabindex="-1"><a class="header-anchor" href="#类加载过程中的具体分工" aria-hidden="true">#</a> 类加载过程中的具体分工</h3>
<ol>
<li><strong>加载</strong></li>
</ol>
<p>加载处于类加载过程中的第一个阶段，<strong>该阶段会在内存中生成一个代表该类的 <code v-pre>java.lang.Class</code> 对象，作为方法区该类的各种数据的入口</strong>，总结下来主要完成如下 3 件事情：</p>
<ul>
<li>
<p><strong>通过全类名获取定义该类的二进制字节流</strong></p>
</li>
<li>
<p><strong>将字节流所代表的静态存储结构转换为方法区的运行时数据结构</strong></p>
</li>
<li>
<p><strong>在堆中生成一个代表该类的 Class 对象，作为方法区中这些数据的访问入口</strong></p>
</li>
</ul>
<p><strong>注意</strong>：第一件事中的二进制字节流不仅仅可以从 Class 文件中获取，还能够从各种 jar、war 包、网络（Applet）或者由其他文件生成（JSP 应用）等。一个非数组类的加载可控性较强，允许我们自定义类加载器来控制字节流的获取方式（即重写一个类加载器的 <code v-pre>loadClass()</code> 方法）；<strong>而数组类型则不需要通过类加载器创建，而是由 JVM 直接创建。</strong> 所有的类均有类加载器加载，其作用就是将 <code v-pre>.class</code> 文件加载到内存中。</p>
<ol start="2">
<li><strong>验证</strong></li>
</ol>
<p>进行验证的目的在于 <strong>确保 Class 文件中的字节流包含的信息符合当前虚拟机的要求，而不会威胁到虚拟机自身安全</strong>。不同虚拟机可能有不同的验证实现，但是基本都会有如下 4 个阶段的验证：</p>
<blockquote>
<p><strong>文件格式的验证、元数据的验证、字节码验证、符号引用验证</strong></p>
</blockquote>
<p><img src="https://s1.ax1x.com/2020/08/17/dehxje.png" alt="" loading="lazy"></p>
<ol start="3">
<li><strong>准备</strong></li>
</ol>
<p><strong>准备阶段是正式为类变量分配内存同时设置类变量初始值的阶段，这些内存都将在方法区中分配，此时需要注意如下几点：</strong></p>
<ul>
<li>此时进行内存分配的 <strong>仅包括类变量（static），不包括实例变量，实例变量随对象实例化时一块分配在 Java 堆</strong>；</li>
<li>设置的初始值通常情况下是数据类型的默认零值，而不是在 Java 代码中被显式赋予的值，但如果变量被 <code v-pre>final</code> 修饰，那么该变量在准备阶段就被赋值成了指定的值，而不是为其赋予默认零值；</li>
</ul>
<table>
<thead>
<tr>
<th>数据类型</th>
<th>默认零值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>byte</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td><code v-pre>short</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td><code v-pre>char</code></td>
<td><code v-pre>\u0000</code></td>
</tr>
<tr>
<td><code v-pre>int</code></td>
<td><code v-pre>0</code></td>
</tr>
<tr>
<td><code v-pre>long</code></td>
<td><code v-pre>0L</code></td>
</tr>
<tr>
<td><code v-pre>float</code></td>
<td><code v-pre>0.0f</code></td>
</tr>
<tr>
<td><code v-pre>double</code></td>
<td><code v-pre>0.0D</code></td>
</tr>
<tr>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td><code v-pre>reference</code></td>
<td><code v-pre>null</code></td>
</tr>
</tbody>
</table>
<ol start="4">
<li><strong>解析</strong></li>
</ol>
<p>解析是 <strong>虚拟机将常量池中的符号引用转化为直接引用的过程，主要针对的是类、接口、字段、类方法、接口方法、方法类型、方法句柄以及调用限定符等 7 类符号</strong>。</p>
<p>所谓符号引用，就是用一组符号来描述目标，可以是任何字面量。<strong>直接引用</strong> 就是 <strong>直接指向目标的指针、相对偏移量或一个间接定位到目标的句柄</strong>。在程序实际运行时，只有符号引用是不够的，举个例子：在程序执行方法时，系统需要明确知道这个方法所在的位置。Java 虚拟机为每个类都准备了一张方法表来存放类中所有的方法。当需要调用一个类的方法的时候，只要知道这个方法在方法表中的偏移量就可以直接调用该方法。通过解析操作符号引用就可以直接转变为目标方法在类中方法表的位置，从而使得方法可以被调用。</p>
<p>解析主要针对 <strong>类或接口、字段、类方法、接口方法</strong> 四类符号进行引用，分别对应于常量池中的 <code v-pre>CONSTANT_Class_info</code>、<code v-pre>CONSTANT_Field_info</code>、<code v-pre>CONSTANT_Method_info</code>、<code v-pre>CONSTANT_InterfaceMethod_info</code>。</p>
<ul>
<li><strong>类或接口的解析</strong>：判断所要转换为的直接引用时对数组类型，还是普通对象类型的引用，从而进行不同的解析；</li>
<li><strong>字段解析</strong>：对字段进行解析时，现在本类中查找是否包含有简单名称和字段描述符都与目标相匹配的字段，如果没有就按照继承关系从上往下递归搜索该类所实现的各个接口和它们的父接口。还没有找到就继续按继承关系从上往下递归搜索父类，直到找到x相匹配的字段。</li>
</ul>
<ol start="5">
<li><strong>初始化</strong></li>
</ol>
<p>类加载过程中的最后一步，也是 <strong>真正执行类中定义的 Java 代码（字节码）。</strong> 准备阶段中，类变量已经被赋予了一次初始值，但在初始化阶段，会根据我们制定的主观计划去初始化类变量和其他资源，从另一个角度来讲就是： <strong>初始化阶段就是执行类构造器 <code v-pre>&lt;clinit&gt;()</code> 方法的过程</strong>。</p>
<p><code v-pre>&lt;clinit&gt;()</code> 方法是带锁线程安全，所以在多线程环境下进行类初始化可能导致死锁。对于初始化阶段，一般只有如下几种情况，必须对类进行初始化（只有主动使用类才会初始化类）：</p>
<ul>
<li>遇到 <code v-pre>new、getstatic、putstatic、invokestatic</code> 其中之一时：
<ul>
<li>当 JVM 执行 <code v-pre>new </code>指令时会初始化类，即当程序创建一个类的实例对象；</li>
<li>当 JVM 执行 <code v-pre>getstatic</code> 指令时会初始化类，即程序访问类的静态变量(不是静态常量，常量会被加载到运行时常量池)；</li>
<li>当 JVM 执行 <code v-pre>putstatic </code>指令时会初始化类，即程序给类的静态变量赋值；</li>
<li>当 JVM 执行 <code v-pre>invokestatic </code>指令时会初始化类，即程序调用类的静态方法；</li>
</ul>
</li>
<li>使用 <code v-pre>java.lang.reflect</code> 包中的方法对类进行反射调用时 ，如果类未初始化，就需要触发其初始化；</li>
<li>初始化一个类，如果其父类还未初始化，则优先触发其父类的初始化；</li>
<li>当虚拟机启动时，需要定义一个要执行的主类 ，虚拟机会首先先初始化这个类；</li>
<li><code v-pre>MethodHandle</code> 和 <code v-pre>VarHandle</code> 都可以看作是轻量级的反射调用机制，如果要使用这两个调用， 就必须先使用 <code v-pre>findStaticVarHandle</code> 来初始化要调用的类；</li>
</ul>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>纵观整个类的加载过程，除了在 <strong>加载阶段用户可以自定义类加载器参与，其余所有动作都完全由虚拟机来主导。</strong> 而到了初始化阶段，才是真正执行 Java 程序代码，但仅限于 <code v-pre>&lt;clinit&gt;()</code> 方法。总结起来就是 <strong>类加载过程中主要是将 Class 文件（准确地讲，应该是类的二进制字节流）加载到虚拟机内存中，真正执行字节码的操作，在加载完成后才真正开始。</strong></p>
<h3 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器" aria-hidden="true">#</a> 类加载器</h3>
<p>在类加载过程中，加载阶段需要用到类加载器。所谓类加载器，就是 <strong>实现通过类的权限定名获取该类的二进制字节流的代码块</strong>。接下来总结一下类加载器的相关知识。</p>
<p>推荐阅读：</p>
<blockquote>
<p><a href="https://juejin.im/post/6844903633574690824#heading-5" target="_blank" rel="noopener noreferrer">https://juejin.im/post/6844903633574690824#heading-5<ExternalLinkIcon/></a></p>
</blockquote>
<h4 id="类加载器的分类" tabindex="-1"><a class="header-anchor" href="#类加载器的分类" aria-hidden="true">#</a> 类加载器的分类</h4>
<p>JVM 中内置了 3 个重要的类加载器，具体如下，除开 <code v-pre>BootstrapClassLoader</code> 之外，其他加载器均继承自 <code v-pre>java.lang.ClassLoader</code>，而且都是由 Java 实现；</p>
<ol>
<li><code v-pre>BootstrapClassLoader(启动类加载器)</code>：最顶层的加载器，由  C++ 实现，虚拟机自身的一部分，负责加载 <code v-pre>%JAVA_HOME%/lib</code> 目录下的 jar 包和类或者通过 <code v-pre>-Xbootclasspath</code> 参数所指定的路径中的所有类；</li>
<li><code v-pre>ExtensionClassLoader(扩展类加载器)</code>：主要负责加载 ``%JAVA_HOME%/lib/ext<code v-pre>目录下的 jar 包和类，或者系统变量</code>java.ext.dirs` 所指定的路径下的  jar 包；</li>
<li><code v-pre>ApplicationClassLoader(应用程序类加载器)</code>：面向用户的加载器，负责加载当前应用 <code v-pre>classpath</code>  下的所有 jar 包和类；</li>
<li>其他类加载器，一般是自己自定义的一些类加载器，通过继承 <code v-pre>java.lang.ClassLoader</code> 实现自定义的类加载器；</li>
</ol>
<h4 id="双亲委派模型" tabindex="-1"><a class="header-anchor" href="#双亲委派模型" aria-hidden="true">#</a> 双亲委派模型</h4>
<p><img src="https://s1.ax1x.com/2020/08/22/dUm7b6.png" alt="双亲委派模型" loading="lazy"></p>
<p>如上图中的双亲委派模型：<strong>当一个类收到了类加载的请求时，它不会立即去加载这个类，而是把这个请求委派给父类加载器去完成</strong>，每一层的类加载器都是如此。这样一来所有的类加载请求最终都会被传送到顶层的启动类加载器中，<strong>只有当父加载无法完成加载请求（它的加载路径下未找到所需的类）时，子加载器才会尝试去加载类。</strong></p>
<p>即 <strong>每次类加载时，先判断当前类是否已经被加载过，如果已经被加载过，则直接返回，否则才会去尝试加载。</strong></p>
<h4 id="双亲委派模型的优点" tabindex="-1"><a class="header-anchor" href="#双亲委派模型的优点" aria-hidden="true">#</a> 双亲委派模型的优点</h4>
<p>通过双亲委派模型，保证了 Java 程序的稳定运行，能够避免类的重复加载（JVM 区别不同类的方式是仅根据类名来判断，相同的类文件如果被不同的类加载器加载，就会产生不同的类），同时也保证了 Java 核心 API 不受篡改。不管最终是哪个加载器来加载类，最终都是委托给顶层的启动类加载器进行加载，从而保证了 <strong>使用不同的类加载器最终得到的都是同样一个 <code v-pre>Object</code> 对象</strong>。</p>
<h4 id="如何实现与破坏双亲委派模型" tabindex="-1"><a class="header-anchor" href="#如何实现与破坏双亲委派模型" aria-hidden="true">#</a> 如何实现与破坏双亲委派模型</h4>
<ul>
<li><strong>实现</strong></li>
</ul>
<p>要实现双亲委派模型，需要每次通过先委派父类加载器加载，然后再自己加载；</p>
<ul>
<li><strong>破坏</strong></li>
</ul>
<p>双亲委派模型并非强制性约束，只是更为推荐的一种类加载器的实现方式，如果我们想要自己完成某些操作，那么就可以自定义实现，从而 “破坏” 该模型。通常可以通过如下 3 种 方式来进行：</p>
<ol>
<li><strong>重写 loadClass() 方法</strong>  ；</li>
<li><strong>利用线程上下文加载器（Thread Context ClassLoader），这个类加载器可以通过java.lang.Thread 类的 <code v-pre>setContextClassLoaser()</code> 方法进行设置，如果创建线程时还未设置，它将会从父线程中继承 一个，如果在应用程序的全局范围内均未设置过，那这个类加载器默认就是应用程序类加载器</strong>；</li>
<li><strong>为了实现热插拔，热部署，模块化，意思是添加一个功能或减去一个功能不用重启，只需要把这模块连同类加载器一起换掉就可以实现代码的热替换</strong>；</li>
</ol>
<h3 id="动态模型系统-osgi" tabindex="-1"><a class="header-anchor" href="#动态模型系统-osgi" aria-hidden="true">#</a> 动态模型系统（OSGI）</h3>
<h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h4>
<p>OSGI（Open Service Gateway Initiative）是面向 Java 的动态模型系统，是 Java 动态模块化系统的一系列规范，提供在多种网络设备上无需重启的的动态改变构造的功能。为了最小化耦合度和促使这些耦合度可管理，OSGI 提供了一种面向服务的架构，使得这些组件动态地发现对方。总结而言，<strong>OSGI 的主要职责就是让开发者能创建动态化、模块化的 Java 系统</strong>。</p>
<h4 id="osgi-框架" tabindex="-1"><a class="header-anchor" href="#osgi-框架" aria-hidden="true">#</a> OSGI 框架</h4>
<p>从概念上而言，主要可以分为三层：</p>
<ul>
<li><strong>Module Layer</strong>：模块层主要涉及包及共享的代码；</li>
<li><strong>Lifecycle Layer</strong>：生命周期层主要涉及 Bundle 的运行时生命周期管理；</li>
<li><strong>Service Layer</strong>：服务层主要涉及模块间的交互与通信；</li>
</ul>
<p><img src="http://static.oschina.net/uploads/img/201111/18175002_MIP6.jpg" alt="" loading="lazy"></p>
<h2 id="内存分配策略" tabindex="-1"><a class="header-anchor" href="#内存分配策略" aria-hidden="true">#</a> 内存分配策略</h2>
<h3 id="minor-gc-vs-major-gc" tabindex="-1"><a class="header-anchor" href="#minor-gc-vs-major-gc" aria-hidden="true">#</a> Minor GC vs Major GC</h3>
<ol>
<li><strong>Minor GC</strong></li>
</ol>
<p>指发生在新生代的 GC，因为 Java 对象更新比较快，所以 Minor GC 十分频繁，一般回收速度也比较快。采用 <strong>复制算法，其过程包括：复制 -&gt; 清空 -&gt; 互换</strong>。</p>
<blockquote>
<p><strong>复制</strong>： Eden、SurvivorFrom 复制到 SurvivorTo，同时年龄 +1，一旦年龄达到老年标准，则赋值到老年代区；</p>
<p><strong>清空</strong>：复制之后，接着清空 Eden、SurvivorFrom 区中的对象；</p>
<p><strong>互换</strong>：清空后，将 SurvivorTo 和 SurvivorFrom 互换，原来的 SurvivorTo 成为下一次 GC 时的 SurvivorFrom 区；</p>
</blockquote>
<ol start="2">
<li><strong>Major GC</strong></li>
</ol>
<p>指发生在老年代的 GC，出现 Major GC 一般至少伴随一次 Minor GC，Major GC 的速度通常比 Minor GC 慢上 10 倍 以上。采用 <strong>标记-清除算法</strong>，MajorGC 会产生内存碎片，当内存不足时，就将抛出 OOM 异常；</p>
<h3 id="堆内存分配原则" tabindex="-1"><a class="header-anchor" href="#堆内存分配原则" aria-hidden="true">#</a> 堆内存分配原则</h3>
<p><img src="https://s1.ax1x.com/2020/09/09/w3nYGD.png" alt="内存分代" loading="lazy"></p>
<p>对象的内存分配通常是在 Java 堆上进行分配，对象主要分配在新生代的 Eden 区，若启动本地线程缓存，则按照线程优先在 TLAB 上分配。少数情况下也会直接在老年代上进行分配。总的而言分配规则不固定，取决于哪种垃圾回收器组合以及虚拟机相关参数，但虚拟机对于内存的分配一般都会遵循如下原则：</p>
<ol>
<li><strong>对象优先分配在 Eden 区</strong></li>
</ol>
<p>大多情况下，对象均在新生代 Eden 区分配，当 Eden 区空间不足以分配时，虚拟机就将进行一次 Minor GC。若经过 GC 后还是没有足够空间，则将启用分配担保机制在老年代中分配内存。</p>
<ol start="2">
<li><strong>大对象直接进入老年代</strong></li>
</ol>
<p>所谓大对象一般指的是需要大量连续内存空间的对象，如数组，大对象不能频繁出现，否则将导致内存充足时提前触发 GC，以便获取充足的连续空间来存放大对象；</p>
<ol start="3">
<li><strong>长期存活对象进入老年代</strong></li>
</ol>
<p>虚拟机采用分代收集的思想来管理内存，则内存回收是就必须判断对象应该存放的内存带。因此虚拟机会给每个对象定义一个对象年龄的计数器，若对象位于 Eden 区出生，且能够被 Survivor 容纳，则该对象将被移动到 Survivor 空间，此时设置对象年龄为 1.对象在 Survivor 中每经过一次 Minor GC 且未被回收，年龄就 +1，当年龄到达一定程度时（默认为 15）就进入老年代；</p>
<h3 id="新生代" tabindex="-1"><a class="header-anchor" href="#新生代" aria-hidden="true">#</a> 新生代</h3>
<p>用于存放新生对象，一般占据堆的 1/3。由于我们要频繁创建对象，所以在该区域会频繁出发 MinorGC。又可以分为：</p>
<ul>
<li>Eden 区</li>
<li>SuivivorFrom 区</li>
<li>SurvivorTo 区</li>
</ul>
<ol>
<li><strong>Eden 区</strong></li>
</ol>
<p>新建对象的存放地（若对象占用内存过大，则直接分配到老年代），当 Eden 内存不足时出发 MinorGC，新生代发生一次垃圾回收；</p>
<ol start="2">
<li><strong>SurvivorFrom</strong></li>
</ol>
<p>上一次 GC 的幸存者，作为这一次 GC 的被扫描者；</p>
<ol start="3">
<li><strong>SuivivorTo</strong></li>
</ol>
<p>保留一次 MinorGC 过程中的幸存者；</p>
<h3 id="老年代" tabindex="-1"><a class="header-anchor" href="#老年代" aria-hidden="true">#</a> 老年代</h3>
<p>存放生命周期较长的内存对象。老年代中对象一般都比较稳定，因此 MajorGC 不会频繁执行，在执行 MajorGC 前一般都进行了一次 MinorGC，使得新生代对象晋身老年代，导致空间不足才触发。当无法找到足够大的连续空间分配给新创建的较大对象时也会提前触发一次 MajorGC 进行垃圾回收来腾出空间。</p>
<h3 id="永久代" tabindex="-1"><a class="header-anchor" href="#永久代" aria-hidden="true">#</a> 永久代</h3>
<p>内存中的永久保存区域，主要存放 <strong>类和 Meta（元数据）的信息</strong>，类在被加载时被放入永久代，不同于存放实例的区域，<strong>GC 不会在主程序运行期对永久代进行清理，因此会导致永久代会随着加载的类的增多而不断缩小，直到抛出 OOM 异常</strong>。</p>
<p>Java 8 以后，<strong>永久代被元数据区取代</strong>，其本质类似于永久代。两者最大的区别在于：<strong>元空间不在虚拟机中，而是使用本地内存，因此其大小只受本地内存限制</strong>。<strong>类的元数据放入 Native Memory，字符串池和类的静态变量放入 Java 堆</strong>。</p>
<h2 id="jvm-调优" tabindex="-1"><a class="header-anchor" href="#jvm-调优" aria-hidden="true">#</a> JVM 调优</h2>
<h3 id="jvm-调优常用参数" tabindex="-1"><a class="header-anchor" href="#jvm-调优常用参数" aria-hidden="true">#</a> JVM 调优常用参数</h3>
<ul>
<li><code v-pre>-Xms2g</code>：初始化堆大小为 2g</li>
<li><code v-pre>-Xmx2g</code>：堆最大内存为 2g</li>
<li><code v-pre>-XX:NewRatio=4</code>：设置年轻和老年代的内存比例为 1:4</li>
<li><code v-pre>-XX:SurvivorRatio=8</code>：设置新生代 Eden 和 Survivor 比例为 8:2</li>
<li><code v-pre>-XX:+UseParNewGC</code>：指定使用 ParNew + Serial Old 垃圾回收器组合</li>
<li><code v-pre>-XX:+UseParallelOldGC</code>：指定使用 ParNew + ParNew Old 垃圾回收器组合</li>
<li><code v-pre>-XX:+UseConcMarkSweepGC</code>：指定使用 CMS + Serial Old 垃圾回收器组合</li>
<li><code v-pre>-XX:+PrintGC</code>：开启打印 GC 信息</li>
<li><code v-pre>-XX:+PrintGCDetail</code>：打印 GC 详细信息</li>
</ul>
<h3 id="jvm-调优步骤" tabindex="-1"><a class="header-anchor" href="#jvm-调优步骤" aria-hidden="true">#</a> JVM 调优步骤</h3>
<ol>
<li>分析 GC 日志及 dump 文件，判断是否需要优化，确定瓶颈问题点；</li>
<li>确定 JVM 调优量化目标；</li>
<li>确定 JVM 调优参数；</li>
<li>调优一台服务器，对比观察调优前后的差异；</li>
<li>不断分析和调整，直到找到合适的 JVM 参数配置；</li>
<li>找到最合适的参数，讲这些参数应用到所有服务器，并进行后序跟踪；</li>
</ol>
</div></template>


