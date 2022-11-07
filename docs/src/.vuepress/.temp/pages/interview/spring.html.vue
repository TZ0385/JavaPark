<template><div><h2 id="spring-特点" tabindex="-1"><a class="header-anchor" href="#spring-特点" aria-hidden="true">#</a> Spring 特点</h2>
<p>Spring 主要有如下特点：</p>
<ol>
<li><strong>轻量级</strong>：Spring 是非侵入式，其中的对象不依赖 Spring 的特定类；</li>
<li><strong>控制反转（IoC）</strong>：通过 IoC，促进了低耦合，一个对象依赖的其他对象通过被动的方式传递进来，而不用该对象主动创建或查找；</li>
<li><strong>面向切面（AOP）</strong>：支持面向切面编程，将应用业务逻辑层和系统服务层分开；</li>
<li><strong>容器</strong>：包含并管理应用对象的配置以及生命周期，此时 Spring 就相当于一个容器；</li>
<li><strong>框架集合</strong>：能将简单的组件进行配置，组合成为更为复杂的应用；在 Spring 中，应用对象被声明式地组合在一个 XML 文件中；此外，Spring 也提供了事务管理、 持久化框架集成等基础功能，将应用逻辑的开发留给开发者；</li>
</ol>
<h2 id="spring-核心组件" tabindex="-1"><a class="header-anchor" href="#spring-核心组件" aria-hidden="true">#</a> Spring 核心组件</h2>
<p><img src="https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/uPic/2021/03/UD3qht.png" alt="图片源自网络" loading="lazy"></p>
<p>Spring 是一个分层架构，主要由如下 7 大模块所构成。Spring 模块位于核心容器，定义了创建、配置和管理 Bean 的方式。</p>
<ol>
<li><strong>Spring Core</strong>：提供 Spring 框架基本功能，主要组件是 BeanFactory，是工厂模式的实现，通过 IOC 机制将应用程序的配置和依赖性规范与实际的应用程序代码分开。</li>
<li><strong>Spring Context</strong>：一个配置文件，给 Spring 框架提供上下文信息，上下文包括 JNDI、EJB、电子邮件、国际化、校验和调度等企业服务。</li>
<li><strong>Spring AOP</strong> ：通过配置管理特性，Spring AOP 直接将 AOP（面向切面）功能集成到 Spring 框架。从而我们能够十分方便的使用 Spring 框架来管理任何支持 AOP 的对象。模块为基于 Spring 的应用程序中的对象提供了事务管理服务。通过使用该组件，可以不依赖其他组件九江声明性事务管理集成到应用程序中。</li>
<li><strong>Spring DAO</strong>：JDBC DAO 抽象层提供了有意义的异常层次结构，可以用来管理异常处理和不同数据库供应商抛出的错误信息。异常层次结构简化了错误处理，而且极大降低了需要编写的异常代码数量。Spring DAO 面向 JDBC 的异常遵从通用的 DAO 异常层次结构。</li>
<li><strong>Spring ORM</strong>：Spring 框架中插入了若干个 ORM 框架，从而提供了 ORM 的对象关系工具，其中包括 JDO、Hibernate 和 iBatis SQL Map，这些都遵从 Spring 的通用事务和 DAO 异常层次结构；</li>
<li><strong>Spring Web</strong>：Web 上下文模块建立在应用程序上下文模块之上，为基于 Web 的应用程序提供了上下文，所以 Spring 框架支持与 Jakarta Structs 的集成。同时该模块还简化了处理多部分请求以及请求参数绑定到域对象的工作。</li>
<li><strong>Spring MVC</strong>：MVC 是一个全功能的构建 Web 应用的 MVC 实现，可以通过策略接口对 MVC 框架实现高度可配置。而且 MVC 还容纳了 JSP、Velocity、Tiles 等视图技术。</li>
</ol>
<h2 id="spring-常用注解" tabindex="-1"><a class="header-anchor" href="#spring-常用注解" aria-hidden="true">#</a> Spring 常用注解</h2>
<table>
<thead>
<tr>
<th>注解</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@Controller</code></td>
<td>1. 用于标注控制层组件<br />2. 用于标记一个类，表示它是一个 SpringMVC Controller 对象<br />3. 分发处理器将扫描使用了该注解的类的方法，同时检测方法是否使用 <code v-pre>@RequestMapping</code><br />4. 能够将 <code v-pre>Request</code> 请求 <code v-pre>header</code> 部分的值绑定到方法的参数上</td>
</tr>
<tr>
<td><code v-pre>@RestController</code></td>
<td>相当于 <code v-pre>@Component</code> 与 <code v-pre>@ResponseBody</code> 的组合</td>
</tr>
<tr>
<td><code v-pre>@Component</code></td>
<td>泛指组件，当组件不好归类时进行注解</td>
</tr>
<tr>
<td><code v-pre>@Repository</code></td>
<td>用于注解 <code v-pre>DAO</code> 层，在 <code v-pre>DaoImpl</code> 类中注解</td>
</tr>
<tr>
<td><code v-pre>@Service</code></td>
<td>用于注解业务层组件</td>
</tr>
<tr>
<td><code v-pre>@ResponseBody</code></td>
<td>1. 异步请求<br />2. 用于将 <code v-pre>Controller</code> 的方法返回的对象，通过适当的 <code v-pre>HttpMessageConverter</code> 转换为指定格式后，写入到 <code v-pre>Response</code> 对象的 <code v-pre>body</code> 数据区<br />3. 返回的数据并非 <code v-pre>html</code> 的页面，而是其他某种格式的数据（json、xml）时使用</td>
</tr>
<tr>
<td><code v-pre>@RequestMapping</code></td>
<td>用于处理请求地址映射的注解，用于类或方法，用于类时，表示类中所有响应请求的方法都以该地址作为父路径</td>
</tr>
<tr>
<td><code v-pre>@Autowired</code></td>
<td>对类成员变量、方法以及构造函数进行标注，从而完成自动装配，通过 <code v-pre>@Autowired</code> 的使用来消除 <code v-pre>get、set</code> 方法</td>
</tr>
<tr>
<td><code v-pre>@PathVariable</code></td>
<td>用于将请求 URL 中的模板变量映射到功能处理方法的参数上，即取出 URL 模板中的变量作为参数</td>
</tr>
<tr>
<td><code v-pre>@RequestParam</code></td>
<td>用于在 Spring MVC 后台控制层获取参数，类似 <code v-pre>request.getParameter(&quot;name&quot;)</code></td>
</tr>
<tr>
<td><code v-pre>@RequestHeader</code></td>
<td>将 <code v-pre>Request</code> 请求 <code v-pre>header</code> 部分的值绑定到方法的参数上</td>
</tr>
<tr>
<td><code v-pre>@ModelAttribute</code></td>
<td>在该 <code v-pre>Controller</code> 所有方法在调用前，先执行该注解，可用于注解和方法参数中</td>
</tr>
<tr>
<td><code v-pre>@SessionAttributes</code></td>
<td>将值放到 <code v-pre>session</code> 作用域，写在 <code v-pre>Class</code> 上面</td>
</tr>
<tr>
<td><code v-pre>@Valid</code></td>
<td>实体数据校验，结合 Hibernate Validator 一起使用</td>
</tr>
<tr>
<td><code v-pre>@CookieValue</code></td>
<td>获取 <code v-pre>cookie</code> 中的值</td>
</tr>
</tbody>
</table>
<h2 id="ioc-原理" tabindex="-1"><a class="header-anchor" href="#ioc-原理" aria-hidden="true">#</a> IoC 原理</h2>
<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3>
<p>Spring 通过一个配置文件来描述 <code v-pre>Bean</code> 之间的相互依赖关系，利用 Java 的反射功能来实例化 <code v-pre>Bean</code> 并建立 <code v-pre>Bean</code> 之间的依赖关系。Spring 的 IoC 容器在完成这些底层工作的基础上，还提供 <code v-pre>Bean</code> 实例缓存、生命周期管理、<code v-pre>Bean</code> 实例代理、事件发布、资源装载等高级服务；</p>
<p>总结而言：<strong>IOC 负责创建对象、管理对象（通过依赖注入）、整合对象、配置对象以及管理对象的生命周期</strong>；</p>
<h3 id="spring-容器高层视图" tabindex="-1"><a class="header-anchor" href="#spring-容器高层视图" aria-hidden="true">#</a> Spring 容器高层视图</h3>
<p><img src="https://cdn.jsdelivr.net/gh/cunyu1943/image-hosting-for-blog/imgiIOC.png" alt="" loading="lazy"></p>
<ol>
<li>Spring 启动时先读取 <code v-pre>Bean</code> 配置信息，并在 Spring 容器中生成一份对应的 <code v-pre>Bean</code> 配置注册表；</li>
<li>根据上一步中生成的 <code v-pre>Bean</code> 配置注册表来实例化 <code v-pre>Bean</code>，并装配好 <code v-pre>Bean</code> 之间的依赖关系；</li>
<li>将实例化后的 <code v-pre>Bean</code> 装载到 Spring 容器中的 <code v-pre>Bean</code> 缓存池中，供上层的应用程序使用；</li>
</ol>
<h3 id="spring-bean-的作用域及生命周期" tabindex="-1"><a class="header-anchor" href="#spring-bean-的作用域及生命周期" aria-hidden="true">#</a> Spring Bean 的作用域及生命周期</h3>
<h4 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h4>
<p>Spring 中，用来组成应用程序的主体以及由 Spring IoC 容器所管理的对象叫做 Bean。简而言之，Bean 就是由 IoC 容器来进行初始化、装配和管理的对象。</p>
<p>Bean 的作用域主要有如下几种：</p>
<ol>
<li><strong>Singleton（单例）</strong></li>
</ol>
<p>作用域为 <code v-pre>Singleton</code>，<strong>该模式在多线程下不安全</strong>，表明 IoC  容器中只会存在一个共享 Bean 实例，而且所有对 Bean 的请求，主要 <code v-pre>id</code> 和该 Bean 定义相匹配，那么就会返回 Bean 的同一实例。<code v-pre>Singleton</code> 是单例模型，即在从创建容器的同时就会自动创建一个 Bean 的对象，无论是否使用，而且 <strong>每次获取到的对象都是同一对象</strong>。</p>
<ol start="2">
<li><strong>Prototype（原型）：每次创建时使用</strong></li>
</ol>
<p>作用域为 <code v-pre>Prototype</code>，表明一个 Bean 定义对应多个实例，该作用域中的 Bean 会导致在 <strong>每次对该 Bean 请求时均创建一个新的 Bean 实例</strong>。<code v-pre>Prototype</code> 是一个原型类型，在我们创建容器时并未实例化，而是当我们获取 Bean 时才去创建一个对象，而且每次获取到的对象都不一样。</p>
<ol start="3">
<li><strong>Request：一次 request 一个实例</strong></li>
</ol>
<p>作用域为 <code v-pre>Request</code>，<strong>表明在一次 <code v-pre>HTTP</code> 请求中，容器返回该 Bean 的同一个实例</strong>，即每个 <code v-pre>HTTP</code> 请求均有各自的 Bean 实例，依据某个 Bean 定义创建而成，只在基于 Web 的 Spring ApplicationContext 情形下有效。当一次 <code v-pre>HTTP</code> 请求处理结束时，该作用域中的 Bean 实例均被销毁。</p>
<ol start="4">
<li><strong>Session</strong></li>
</ol>
<p>作用域为 <code v-pre>Session</code> ，表明 <strong>在一个 <code v-pre>HTTP Session</code> 中，容器返回该 Bean 的同一个实例，对不同的 <code v-pre>Session</code> 请求则创建新的实例，该 <code v-pre>Bean</code> 实例仅在当前 <code v-pre>Session</code> 内有效</strong>，只在基于 Web 的 Spring ApplicationContext 情形下有效。当一个 <code v-pre>HTTP Session</code> 被废弃时，在该作用域内的 Bean 也将失效。</p>
<table>
<thead>
<tr>
<th>作用域类别</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>Singleton</code></td>
<td>Spring IoC 容器中仅存在一个 Bean 实例，以单例方式存在，是 Spring 中的默认值</td>
</tr>
<tr>
<td><code v-pre>Prototype</code></td>
<td>每次从容器中调用 Bean 时，均返回一个新的实例，即每次调用 <code v-pre>getBean()</code> 方法，相当于 <code v-pre>new</code> 一个新的对象</td>
</tr>
<tr>
<td><code v-pre>Request</code></td>
<td>每次 HTTP 请求均创建一个新的 Bean，仅适用于 WebApplicationContext 环境</td>
</tr>
<tr>
<td><code v-pre>Session</code></td>
<td>每次 HTTP Session 共享一个 Bean，不同 Session 使用不同的 Bean，仅适用于 WebApplicationContext 环境</td>
</tr>
</tbody>
</table>
<h4 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h4>
<ol>
<li>Spring 对 Bean 进行实例化；</li>
<li>Spring 将值和 Bean 的引用注入到 Bean 对应属性中；</li>
<li>若 Bean 实现了 BeanNameAware 接口，则 Spring 将 Bean 的 ID 传递给 setBeanName() 方法；</li>
<li>若 Bean 实现了 BeanFactoryAware 接口，Spring 将调用 <code v-pre>setBeanFactory()</code> 方法，将 Bean 所在应用引用传入进来；</li>
<li>若 Bean 实现了 ApplicationContextAware 接口，Spring 将调用 <code v-pre>setApplicationContext()</code> 方法，将 Bean 所在应用的引用传入进来；</li>
<li>若 Bean 实现了 BeanPostProcessor 接口，Spring 将调用 <code v-pre>post-ProcessBeforeInitalization()</code> 方法；</li>
<li>若 Bean 实现了 <code v-pre>InitializingBean</code> 接口，Spring 将调用他们的 <code v-pre>after-PropertiesSet()</code> 方法，类似地，如果 Bean 使用 <code v-pre>init-method</code> 声明了初始化方法，则该方法也会被调用；</li>
<li>若 Bean 实现了 BeanPostProcessor 接口，Spring 将调用他们的 <code v-pre>post-ProcessAfterInitialization()</code> 方法；</li>
<li>此时，Bean 已经准备就绪，我们就可以被应用程序使用，他们将一直驻留在应用上下文中，直到该应用被销毁；</li>
<li>若 Bean 实现了 DisposableBean 接口，Spring 将调用它的 <code v-pre>destory()</code> 接口方法；同样，若 Bean 使用 <code v-pre>destroy-method</code> 声明了销毁方法，该方法也将被调用；</li>
</ol>
<h3 id="spring-依赖注入的四种方式" tabindex="-1"><a class="header-anchor" href="#spring-依赖注入的四种方式" aria-hidden="true">#</a> Spring 依赖注入的四种方式</h3>
<ol>
<li><strong>构造器注入</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 带参，方便用构造器进行注入</span>
<span class="token keyword">public</span> <span class="token class-name">CatDaoImpl</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>CatDaoImpl<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.cunyu.CatDaoImpl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>constructor-arg</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>setter 方法注入</strong></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Id</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.cunyu.Id <span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1801333<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><strong>静态工厂注入</strong></li>
</ol>
<p>所谓静态工厂就是通过调用静态工厂的方法来获取自己所需对象，而且为了方便 Spring 管理，我们不能通过 “类.静态方法()” 来获取对象，而应该通过 Spring 注入的形式；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 静态工厂</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DaoFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">FactoryDao</span> <span class="token function">getStaticFactoryDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">StaticFacotryDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringAction</span> <span class="token punctuation">{</span>
    <span class="token comment">// 需要注入的对象</span>
    <span class="token keyword">private</span> <span class="token class-name">FactoryDao</span> staticFactoryDao<span class="token punctuation">;</span> 
    <span class="token comment">// 注入对象的 set 方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setStaticFactoryDao</span><span class="token punctuation">(</span><span class="token class-name">FactoryDao</span> staticFactoryDao<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>staticFactoryDao <span class="token operator">=</span> staticFactoryDao<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>springAction<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.cunyu.SpringAction<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--利用静态工厂的方法注入对象--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>staticFactoryDao<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>staticFactoryDao<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--从工厂类获取静态方法--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>staticFactoryDao<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.cunyu.DaoFactory<span class="token punctuation">"</span></span> <span class="token attr-name">factory-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getStaticFactoryDaoImpl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li><strong>实例工厂</strong></li>
</ol>
<p>实例工厂表示获取对象实例的方法不是静态的，所以需要先 <code v-pre>new</code> 工厂类，然后再调用普通的实例方法；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 实例工厂</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DaoFactory</span> <span class="token punctuation">{</span> 
    <span class="token keyword">public</span> <span class="token class-name">FactoryDao</span> <span class="token function">getFactoryDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FactoryDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringAction</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注入对象</span>
    <span class="token keyword">private</span> <span class="token class-name">FactoryDao</span> factoryDao<span class="token punctuation">;</span> 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setFactoryDao</span><span class="token punctuation">(</span><span class="token class-name">FactoryDao</span> factoryDao<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>factoryDao <span class="token operator">=</span> factoryDao<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>springAction<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.cunyu.SpringAction<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--使用实例工厂的方法注入对象,对应下面的配置文件--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>factoryDao<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>factoryDao<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--此处获取对象的方式是从工厂类中获取实例方法--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>daoFactory<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.cunyu.DaoFactory<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>factoryDao<span class="token punctuation">"</span></span> <span class="token attr-name">factory-bean</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>daoFactory<span class="token punctuation">"</span></span> <span class="token attr-name">factory-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getFactoryDaoImpl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spring-自动装配方式" tabindex="-1"><a class="header-anchor" href="#spring-自动装配方式" aria-hidden="true">#</a> Spring 自动装配方式</h3>
<p>要实现自动装配，主要从如下两个角度来进行实现：</p>
<ol>
<li><strong>组件扫描（Component Scanning）</strong>：Spring 会自动发现应用上下文中所创建的 Bean；</li>
<li><strong>自动装配（Autowiring）</strong>：Spring 自动满足 Bean 之间的依赖；</li>
</ol>
<p>Spring 装配包括 <strong>手动转配和自动装配</strong>，<strong>手动装配是通过 <code v-pre>XML</code> 装配、构造方法、<code v-pre>setter</code> 方法等方式；</strong></p>
<p>而自动装配有如下几种，使得 Spring 容器通过自动装配方式来进行依赖注入；</p>
<table>
<thead>
<tr>
<th>装配方式</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>no</code></td>
<td>默认不进行自动装配，通过显式设置 <code v-pre>ref</code> 属性来进行装配</td>
</tr>
<tr>
<td><code v-pre>byName</code></td>
<td>通过参数名自动装配，Spring 容器在配置文件中发现 <code v-pre>Bean</code> 的 <code v-pre>autowire</code> 属性被设置为 <code v-pre>byName</code> 后试图匹配、装载和该 <code v-pre>Bean</code> 的属性具有相同名字的 <code v-pre>Bean</code></td>
</tr>
<tr>
<td><code v-pre>byType</code></td>
<td>通过参数类型自动装配，Spring 容器在配置文件中发现 <code v-pre>Bean</code> 的 <code v-pre>autowire</code> 属性被设置为 <code v-pre>byType</code> 后试图匹配、装载和该 <code v-pre>Bean</code> 的属性具有相同了类型的 <code v-pre>Bean</code>，若发现多个 <code v-pre>Bean</code> 符合条件，则抛出错误</td>
</tr>
<tr>
<td><code v-pre>constructor</code></td>
<td>类似于 <code v-pre>byType</code>，但需要提供给构造器参数，若无固定的带参的构造器参数类型，则抛出异常</td>
</tr>
<tr>
<td><code v-pre>autodetect</code></td>
<td>首先尝试使用 <code v-pre>constructor</code> 来自动装配，若无法工作，则使用 <code v-pre>byType</code> 方式</td>
</tr>
</tbody>
</table>
<h3 id="ioc-的优缺点" tabindex="-1"><a class="header-anchor" href="#ioc-的优缺点" aria-hidden="true">#</a> IoC 的优缺点</h3>
<ol>
<li><strong>优点</strong>：组件之间的解耦，提高程序可维护性、灵活性；</li>
<li><strong>缺点</strong>：创建对象步骤复杂，有一定学习成本；利用反射创建对象，效率会降低；</li>
</ol>
<h2 id="aop-原理" tabindex="-1"><a class="header-anchor" href="#aop-原理" aria-hidden="true">#</a> AOP 原理</h2>
<h3 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h3>
<p>即剖开封装的对象内部，并将那些影响了多个类的公共行为封装到一个可重用模块，并将其命名为 <code v-pre>Aspect</code>，<strong>即切面</strong>。所谓切面即 <strong>与业务无关，但被业务模块所公用的逻辑，便于减少系统的重复代码，降低模块间的耦合度，利于后续的可操作性和可维护性</strong>。</p>
<p>通过使用横切，AOP 将软件切分为：<strong>核心关注点和横切关注点</strong>。业务处理的主要流程是核心关注点，与横切关注点关系不大。<strong>横切关注点的特点是经常发生在核心关注点的多处，且各处基本相似</strong>。AOP 的作用就在于 <strong>分离系统中的各种关注点，将核心关注点和横切关注点分离开</strong>。</p>
<h3 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h3>
<h3 id="aop-的两种代理方式" tabindex="-1"><a class="header-anchor" href="#aop-的两种代理方式" aria-hidden="true">#</a> AOP 的两种代理方式</h3>
<p>Spring 提供了两种方式来生成代理对象：JDK Proxy 和 CGlib，<strong>默认的策略是如果目标类是接口，则使用 JDK 动态代理技术，否则使用 CGlib 来生成代理</strong>；</p>
<ol>
<li><strong>JDK 动态接口代理</strong></li>
</ol>
<p>主要涉及 <code v-pre>Proxy</code> 和 <code v-pre>InvocationHandler</code>，<code v-pre>InvocationHandler</code> 是一个接口，通过实现该接口定义横切逻辑，并通过反射机制调用目标类的代码，动态地将横切逻辑与业务逻辑编制在一起。而 <code v-pre>Proxy</code> 则利用 <code v-pre>InvocationHandler</code> 动态创建一个符合某一接口的实例，生成目标类的代理对象；</p>
<ol start="2">
<li><strong>CGlib 动态代理</strong></li>
</ol>
<p>全称 <code v-pre>Code Generation Library</code>，<strong>是一个高性能高质量的代码生成类库，能在运行期间扩展 Java 类与实现 Java 接口。</strong> CGlib 封装了 ASM，能在运行期间动态生成新的类。</p>
<ol start="3">
<li><strong>JDK 动态代理和 CGlib 动态代理的区别</strong></li>
</ol>
<p>JDK 动态代理只能为接口创建代理实例，而对于没有通过接口定义业务方法的类，则需要通过 CGlib 创建动态代理；</p>
<h3 id="切面的通知类型" tabindex="-1"><a class="header-anchor" href="#切面的通知类型" aria-hidden="true">#</a> 切面的通知类型</h3>
<ol>
<li><strong>前置通知（Before）</strong>：目标方法在被调用前调用通知；</li>
<li><strong>后置通知（After）</strong>：目标方法完成后调用通知；</li>
<li><strong>返回通知（After-returning）</strong>：目标方法成功执行之后调用通知；</li>
<li><strong>异常通知（After-throwing）</strong>：目标方法抛出异常后调用通知；</li>
<li><strong>环绕通知（Around）</strong>：在被通知的方法调用之前和调用之后执行自定义的行为；</li>
</ol>
<h2 id="spring-mvc" tabindex="-1"><a class="header-anchor" href="#spring-mvc" aria-hidden="true">#</a> Spring MVC</h2>
<h3 id="什么是-mvc-框架" tabindex="-1"><a class="header-anchor" href="#什么是-mvc-框架" aria-hidden="true">#</a> 什么是 MVC 框架？</h3>
<p>MVC，全称 Model View Controller，是模型（model）-视图（view）-控制器（controller）的缩写，是一种软件设计典范。用一种业务逻辑、数据、界面显示分离的方法组织代码，将业务逻辑聚集到一个部件中，然后在改进和个性化定制界面及用户交互的同时，不用重写业务逻辑；</p>
<p>采用 MVC 设计模式主要有如下好处：</p>
<ol>
<li>通过分层设计，实现了业务系统各组件之间的结构，有利于业务系统的可扩展性和可维护性；</li>
<li>有利于系统的并行开发，提升开发效率；</li>
</ol>
<h3 id="springmvc" tabindex="-1"><a class="header-anchor" href="#springmvc" aria-hidden="true">#</a> SpringMVC</h3>
<h4 id="定义-2" tabindex="-1"><a class="header-anchor" href="#定义-2" aria-hidden="true">#</a> 定义</h4>
<p>Spring MVC 是 Spring 框架的一个模块，一个基于 MVC 的框架；</p>
<h4 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h4>
<ol>
<li><code v-pre>DispatcherServlet</code>：核心组件，前端控制器，也叫中央控制器，由它来调度相关组件，<strong>用于接收请求、响应结果，相当于转发器，有了 <code v-pre>DispatcherServlet</code> 就减少了其他组件之间的耦合度</strong>；</li>
<li><code v-pre>HandlerMapping</code>：处理器映射器，根据 URL 路径映射到不同的 <code v-pre>Handler</code>；</li>
<li><code v-pre>HandlerAdapter</code>：处理器适配器，按照 <code v-pre>HandlerAdapter</code> 的规则来执行 <code v-pre>Handler</code>；</li>
<li><code v-pre>Handler</code>：处理器，由我们自己根据业务进行开发；</li>
<li><code v-pre>ViewResolver</code>：视图解析器，将逻辑视图解析成具体的视图；</li>
<li><code v-pre>View</code>：一个接口，支持不同的视图类型；</li>
</ol>
<h4 id="mvc-工作流程" tabindex="-1"><a class="header-anchor" href="#mvc-工作流程" aria-hidden="true">#</a> MVC 工作流程</h4>
<ol>
<li>浏览器发送请求，前端控制区 <code v-pre>DispatcherServlet</code> 拦截该请求；</li>
<li><code v-pre>DispatcherServlet</code> 拦截到请求后，对请求 URL 进行解析，得到请求资源标识符 URI，根据 URI 调用 <code v-pre>HandlerMapping</code> 后获取对应 <code v-pre>Handler</code>；</li>
<li><code v-pre>DispatcherServlet</code> 拿到 <code v-pre>Handler</code> 之后，找到 <code v-pre>HandlerAdapter</code> ，通过它来访问 <code v-pre>Handler</code>，并执行处理器；</li>
<li>执行 <code v-pre>Handler</code> 的逻辑，返回一个 <code v-pre>ModelAndView</code> 对象给 <code v-pre>DispatcherServlet</code>；</li>
<li>然后 <code v-pre>DispatcherServlet</code> 请求 <code v-pre>ViewResolver</code> 解析视图，根据逻辑视图名解析真正的 <code v-pre>View</code>；</li>
<li>然后 <code v-pre>ViewResolver</code> 将解析后的 <code v-pre>View</code> 返回给 <code v-pre>DispatcherServlet</code>，然后对 <code v-pre>View</code> 进行渲染；</li>
<li>然后由 <code v-pre>DispatcherServlet</code> 响应视图给浏览器；</li>
</ol>
<h4 id="springmvc-的优点" tabindex="-1"><a class="header-anchor" href="#springmvc-的优点" aria-hidden="true">#</a> SpringMVC 的优点</h4>
<ol>
<li>具有 Spring 的特性；</li>
<li>支持多种视图；</li>
<li>配置方便，非侵入；</li>
<li>分层更加清晰，利于团队开发的代码维护，以及可读性好；</li>
</ol>
<h3 id="注解" tabindex="-1"><a class="header-anchor" href="#注解" aria-hidden="true">#</a> 注解</h3>
<h4 id="注解原理" tabindex="-1"><a class="header-anchor" href="#注解原理" aria-hidden="true">#</a> 注解原理</h4>
<p>注解本质上是一个集成了 <code v-pre>Annotation</code> 的特殊接口，其具体实现类是 Java 运行时生成的动态代理类。通过反射获取注解时，返回的是 Java 运行时生成的动态代理对象。通过代理对象调用自定义注解的方法，将最终调用 <code v-pre>AnnotationInvocationHandler</code> 的 <code v-pre>invoke</code> 方法，然后该方法从 <code v-pre>memberValues</code> 的 <code v-pre>Map</code> 中索引出对应的值；</p>
<h4 id="常用注解" tabindex="-1"><a class="header-anchor" href="#常用注解" aria-hidden="true">#</a> 常用注解</h4>
<table>
<thead>
<tr>
<th>注解</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@RequestMapping</code></td>
<td>用于处理请求 <code v-pre>url</code> 映射的注解，能用在类或方法上，用于类时表示所有响应请求的方法均以该地址作为父路径</td>
</tr>
<tr>
<td><code v-pre>@RequestBody</code></td>
<td>实现接收 <code v-pre>HTTP</code> 请求的 <code v-pre>json </code>数据，将 <code v-pre>json </code>转换为 Java 对象</td>
</tr>
<tr>
<td><code v-pre>@ResponseBody</code></td>
<td>实现将 <code v-pre>controller</code> 方法返回对象转化为 Json 对象响应给客户</td>
</tr>
</tbody>
</table>
</div></template>


