<template><div><h2 id="数据库基础" tabindex="-1"><a class="header-anchor" href="#数据库基础" aria-hidden="true">#</a> 数据库基础</h2>
<h3 id="使用数据库的优点" tabindex="-1"><a class="header-anchor" href="#使用数据库的优点" aria-hidden="true">#</a> 使用数据库的优点</h3>
<p>最开始，我们是将数据保存在 <strong>内存</strong> 中，这能够保证我们十分 <strong>快速存取，但是一旦断电，数据就丢失了，无法永久保存。</strong> 于是我们将数据存放在 <strong>文件</strong> 中，这样一来我们就 <strong>能够将数据永久保存，但每次都要进行频繁的 IO 操作，相对于内存来讲速度就慢了许多，而且进行查询操作也不方便。</strong> 于是，我们转移到了 <strong>数据库</strong> 存储，通过这种方式不但 <strong>能将永久保存数据，而且查询管理也更加高效方便</strong>。</p>
<h3 id="什么是-mysql" tabindex="-1"><a class="header-anchor" href="#什么是-mysql" aria-hidden="true">#</a> 什么是 MySQL</h3>
<p>MySQL 是一个关系型数据库管理系统，开源免费，且易扩展，是当前最流行的关系型数据库管理系统之一，在 Java Web 应用方面的应用十分广泛。其默认端口为 <strong>3306</strong>。</p>
<h3 id="数据库三大范式" tabindex="-1"><a class="header-anchor" href="#数据库三大范式" aria-hidden="true">#</a> 数据库三大范式</h3>
<ol>
<li><strong>第一范式：属性原子性</strong></li>
</ol>
<p>最基本的范式，若数据库表中 <strong>所有字段值均为不可分解的原子值</strong>，则满足第一范式；</p>
<ol start="2">
<li><strong>第二范式：记录唯一性，确保表中每列均与主键相关</strong></li>
</ol>
<p>在第一范式的基础上更进一步，需要确保数据库表中的每列均与主键相关，而不能只与主键的某一部分相关（主要针对联合主键）。即 <strong>在一个数据库表中，一个表中只能保存一种数据，不能将多种数据保存在同一张数据库表中</strong>；</p>
<ol start="3">
<li><strong>第三范式：字段冗余性，确保每列均与主键列直接相关，不存在传递依赖</strong></li>
</ol>
<p>在第二范式的基础上，确保数据表中的 <strong>每列数据和主键直接相关，而不依赖于其他非主键，即任何字段不能由其他字段派生</strong>；</p>
<h3 id="mysql-中自带的权限表" tabindex="-1"><a class="header-anchor" href="#mysql-中自带的权限表" aria-hidden="true">#</a> MySQL 中自带的权限表</h3>
<p>MySQL 通过权限表来控制用户对数据库的访问，一般是存放在 <code v-pre>mysql</code> 表中，由 <code v-pre>mysql_install_db</code> 脚本进行初始化，分别包括：</p>
<ul>
<li><strong>user</strong>：记录允许连接服务器的用户账号信息，权限是全局性的；</li>
<li><strong>db</strong>：记录各个账号在不同数据库上的操作权限；</li>
<li><strong>table_priv</strong>：记录数据表级别的操作权限；</li>
<li><strong>columns_priv</strong>：记录数据列级别的操作权限；</li>
<li><strong>host</strong>：配合 <strong>db</strong> 表对给定主机上数据库级别的操作权限进行更进一步的控制，权限不受 <strong>GRANT</strong> 和 <strong>REVOKE</strong> 的影响；</li>
</ul>
<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2>
<p>主要可以分为 5 大类型，而大类型下又具体划分了不同的子类型：</p>
<p><img src="https://s1.ax1x.com/2020/08/21/dNPfJ0.png" alt="" loading="lazy"></p>
<table>
<thead>
<tr>
<th><strong>分类</strong></th>
<th><strong>类型名称</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>整数类型</strong></td>
<td><code v-pre>tinyInt</code></td>
<td>很小的整数(8位二进制)</td>
</tr>
<tr>
<td></td>
<td><code v-pre>smallint</code></td>
<td>小的整数(16位二进制)</td>
</tr>
<tr>
<td></td>
<td><code v-pre>mediumint</code></td>
<td>中等大小的整数(24位二进制)</td>
</tr>
<tr>
<td></td>
<td><code v-pre>int(integer)</code></td>
<td>普通大小的整数(32位二进制)</td>
</tr>
<tr>
<td><strong>实数类型</strong></td>
<td><code v-pre>float</code></td>
<td>单精度浮点数</td>
</tr>
<tr>
<td></td>
<td><code v-pre>double</code></td>
<td>双精度浮点数</td>
</tr>
<tr>
<td></td>
<td><code v-pre>decimal(m,d)</code></td>
<td>压缩严格的定点数</td>
</tr>
<tr>
<td><strong>枚举类型</strong></td>
<td><code v-pre>enum</code></td>
<td></td>
</tr>
<tr>
<td><strong>日期和时间类型</strong></td>
<td><code v-pre>year</code></td>
<td>YYYY 1901~2155</td>
</tr>
<tr>
<td></td>
<td><code v-pre>time</code></td>
<td>HH:MM:SS -838:59:59~838:59:59</td>
</tr>
<tr>
<td></td>
<td><code v-pre>date</code></td>
<td>YYYY-MM-DD 1000-01-01~9999-12-3</td>
</tr>
<tr>
<td></td>
<td><code v-pre>datetime</code></td>
<td>YYYY-MM-DD HH:MM:SS 1000-01-01 00:00:00~ 9999-12-31 23:59:59</td>
</tr>
<tr>
<td></td>
<td><code v-pre>timestamp</code></td>
<td>YYYY-MM-DD HH:MM:SS 19700101 00:00:01 UTC~2038-01-19 03:14:07UTC</td>
</tr>
<tr>
<td><strong>字符串类型</strong></td>
<td><code v-pre>CHAR(M)</code></td>
<td>M为0~255之间的整数</td>
</tr>
<tr>
<td></td>
<td><code v-pre>VARCHAR(M)</code></td>
<td>M为0~65535之间的整数</td>
</tr>
<tr>
<td></td>
<td><code v-pre>TINYBLOB</code></td>
<td>允许长度0~255字节</td>
</tr>
<tr>
<td></td>
<td><code v-pre>BLOB</code></td>
<td>允许长度0~65535字节</td>
</tr>
<tr>
<td></td>
<td><code v-pre>MEDIUMBLOB</code></td>
<td>允许长度0~167772150字节</td>
</tr>
<tr>
<td></td>
<td><code v-pre>LONGBLOB</code></td>
<td>允许长度0~4294967295字节</td>
</tr>
<tr>
<td></td>
<td><code v-pre>TINYTEXT</code></td>
<td>允许长度0~255字节</td>
</tr>
<tr>
<td></td>
<td><code v-pre>TEXT</code></td>
<td>允许长度0~65535字节</td>
</tr>
<tr>
<td></td>
<td><code v-pre>MEDIUMTEXT</code></td>
<td>允许长度0~167772150字节</td>
</tr>
<tr>
<td></td>
<td><code v-pre>LONGTEXT</code></td>
<td>允许长度0~4294967295字节</td>
</tr>
<tr>
<td></td>
<td><code v-pre>VARBINARY(M)</code></td>
<td>允许长度0~M个字节的变长字节字符串</td>
</tr>
<tr>
<td></td>
<td><code v-pre>BINARY(M)</code></td>
<td>允许长度0~M个字节的定长字节字符串</td>
</tr>
</tbody>
</table>
<h2 id="存储引擎" tabindex="-1"><a class="header-anchor" href="#存储引擎" aria-hidden="true">#</a> 存储引擎</h2>
<p>要查看 MySQL 中所提供的引擎，可以通过如下命令：</p>
<blockquote>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">show</span> engines<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<p><img src="https://s1.ax1x.com/2020/09/08/wQJaan.png" alt="" loading="lazy"></p>
<h3 id="常用存储引擎" tabindex="-1"><a class="header-anchor" href="#常用存储引擎" aria-hidden="true">#</a> 常用存储引擎</h3>
<table>
<thead>
<tr>
<th>引擎</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>InnoDB</code></td>
<td><strong>提供对数据库 ACID 事务的支持，同时提供了行级锁和外键的约束</strong>，其设计目标是处理大数据</td>
</tr>
<tr>
<td><code v-pre>MyIASM</code></td>
<td><strong>默认引擎</strong>，<strong>不提供事务的支持，也不支持行级锁和外键</strong></td>
</tr>
<tr>
<td><code v-pre>MEMORY</code></td>
<td>所有数据均存于内存，存取速度快，但是安全性低</td>
</tr>
</tbody>
</table>
<h3 id="innodb-vs-myisam" tabindex="-1"><a class="header-anchor" href="#innodb-vs-myisam" aria-hidden="true">#</a> InnoDB vs MyISAM</h3>
<ul>
<li>InnoDB 的 4 大特性</li>
</ul>
<ol>
<li><strong>插入缓冲（Insert Buffer）</strong></li>
<li><strong>二次写（Double Write）</strong></li>
<li><strong>自适应哈希索引（Ahi）</strong></li>
<li><strong>预读（Read Ahead）</strong></li>
</ol>
<ul>
<li>两者区别</li>
</ul>
<table>
<thead>
<tr>
<th>对比项</th>
<th>MyISAM</th>
<th>Innodb</th>
</tr>
</thead>
<tbody>
<tr>
<td>存储结构</td>
<td>每张表被存放在三个文件：<br />1. <code v-pre>.frm</code>-表格定义<br />2. <code v-pre>.MYD</code>(MYData)-数据文件<br />3. <code v-pre>.MYI</code>(MYIndex)-索引文件</td>
<td>所有的表都保存在同一个数据文件中（也可能是多个文件，或者是独立的表空间文件），大小只受限于操作系统文件的大小，一般为 2GB</td>
</tr>
<tr>
<td>存储空间</td>
<td>可被压缩，存储空间较小</td>
<td>需要更多的内存和存储，会在主内存中建立其专用的缓冲池用于高速缓冲数据和索引</td>
</tr>
<tr>
<td>可移植性、备份及恢复</td>
<td>数据以文件形式存储，在跨平台的数据转移中会很方便，在备份和恢复时可单独针对某个表进行操作</td>
<td>免费的方案可以是拷贝数据文件、备份 binlog，或者用 mysqldump，在数据达到一定量（几十 G）的时候就相对痛苦了</td>
</tr>
<tr>
<td>文件格式</td>
<td>数据和索引是分别存储的，数据<code v-pre>.MYD</code>，索引<code v-pre>.MYI</code></td>
<td>数据和索引是集中存储的，<code v-pre>.ibd</code></td>
</tr>
<tr>
<td>记录存储顺序</td>
<td>按记录插入顺序保存</td>
<td>按主键大小有序插入</td>
</tr>
<tr>
<td><strong>外键</strong></td>
<td><strong>不支持</strong></td>
<td><strong>支持</strong></td>
</tr>
<tr>
<td><strong>事务</strong></td>
<td><strong>不支持</strong></td>
<td><strong>支持（默认 REPEATABLE-READ）</strong></td>
</tr>
<tr>
<td><strong>锁支持</strong></td>
<td><strong>表级锁定</strong></td>
<td><strong>行级锁定、表级锁定，锁定力度小并发能力高</strong></td>
</tr>
<tr>
<td><strong>MVVC 支持</strong></td>
<td><strong>不支持</strong></td>
<td><strong>支持</strong></td>
</tr>
<tr>
<td><strong>崩溃修复</strong></td>
<td><strong>不支持</strong></td>
<td><strong>支持</strong></td>
</tr>
<tr>
<td><strong>哈希索引</strong></td>
<td><strong>不支持</strong></td>
<td><strong>支持</strong></td>
</tr>
<tr>
<td><strong>全文索引</strong></td>
<td><strong>支持</strong></td>
<td><strong>不支持</strong></td>
</tr>
<tr>
<td>查询性能</td>
<td>更佳</td>
<td></td>
</tr>
<tr>
<td>增删改性能</td>
<td></td>
<td>更佳</td>
</tr>
<tr>
<td>统计数据量</td>
<td>更快，内部维护了一个计数器，可以直接调取。</td>
<td></td>
</tr>
<tr>
<td>索引的实现方式</td>
<td>B+ 树索引，myisam 是堆表</td>
<td>B+ 树索引，Innodb 是索引组织表</td>
</tr>
</tbody>
</table>
<p>两者主要区别如下：</p>
<ol>
<li>InnoDB 索引是聚簇索引，而 MyISAM 是非聚簇索引；</li>
<li>InnoDB 的主键索引的叶子节点存储着行数据，因此主键索引效率高；MyISAM 索引的叶子节点存储的是行数据地址，需要多进行一次寻址操作才能够得到数据；</li>
<li>InnoDB 非主键索引的叶子节点存储的是主键和其他带索引的列数据，因此查询时做到覆盖索引更加高效；</li>
</ol>
<h3 id="如何选择存储引擎" tabindex="-1"><a class="header-anchor" href="#如何选择存储引擎" aria-hidden="true">#</a> 如何选择存储引擎</h3>
<ul>
<li><strong>MyISAM</strong>：默认的 MySQL 插件式存储引擎，适合 <strong>以读写插入为主</strong>，是 Web、数据仓库和其他应用环境下最常使用的引擎之一；</li>
<li><strong>InnoDB</strong>：用于事务处理应用程序，如果 <strong>更新删除等操作频率也高</strong>，或者要 <strong>保证数据完整性</strong>，支持 <strong>高并发、外键和事务等</strong>；</li>
<li><strong>Memory</strong>：将所有数据保存在 <code v-pre>RAM</code> 中，在需要快速查找引用和其他类似数据情况下，能提供较快的访问；</li>
<li><strong>Merge</strong>：允许 MySQL DBA 或开发人员将一系列等同的 MyISAM 表以逻辑方式组合在一起并作为一个对象引用，适合于数据仓库等 VLDB 环境；</li>
</ul>
<h2 id="存储过程" tabindex="-1"><a class="header-anchor" href="#存储过程" aria-hidden="true">#</a> 存储过程</h2>
<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3>
<p>存储过程是一个可编程的函数，在数据库中创建并保存，由 SQL  语句和一些特殊的控制结构组成。优点是 <strong>允许模块化设计，即一次创建，多次调用。</strong> 是一个预编译的 SQL 语句，当需要多次执行 SQL 语句时，使用存储过程比单纯 SQL 语句效率更高。</p>
<h3 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h3>
<ul>
<li><strong>优点</strong></li>
</ul>
<ol>
<li>由于是预编译，所以执行效率高；</li>
<li>存储过程的代码直接在数据库中，通过存储过程名直接调用，能够减少网络通讯；</li>
<li>安全性高，执行存储过程需要有一定权限的用户；</li>
<li>能够重复使用，提高开发效率；</li>
</ol>
<ul>
<li><strong>缺点</strong></li>
</ul>
<ol>
<li>调试困难</li>
<li>移植困难</li>
<li>重新编译问题，由于存储过程是运行前编译，因此如果带有引用关系的对象发生改变时，受到影响的存储过程、包需要重新编译</li>
<li>若在一个程序中大量使用存储过程，到交付使用时就会随着用户需求的改变而导致数据结构变化，此时系统维护成本较高</li>
</ol>
<h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2>
<h3 id="事务定义" tabindex="-1"><a class="header-anchor" href="#事务定义" aria-hidden="true">#</a> 事务定义</h3>
<p>事务是一个不可分割的数据库操作序列，也是数据库并发控制的基本单位，其执行结果必须使数据库从一种一致性状态切换到另一中一致性状态。事务是逻辑上的一组操作，要么都执行，要么都不执行。事务能够在数据库提交工作时确保要么所有修改都保存，要么所有修改都不保存。<strong>即事务是逻辑上的一组操作，要么都执行，要么都不执行</strong>。</p>
<h3 id="事务的-4-大特性" tabindex="-1"><a class="header-anchor" href="#事务的-4-大特性" aria-hidden="true">#</a> 事务的 4 大特性</h3>
<p>关系型数据库都需要遵循 ACID 规则：</p>
<ol>
<li><strong>原子性（Atomicity）</strong></li>
</ol>
<p>原子性是整个数据库事务中不可分割的工作单位，只有事务中的所有的数据库操作都执行成功，才代表整个事务成功，如果其中任一环节执行失败，那么就算已经执行成功的 SQL 语句也必须撤销，回滚到事务执行前的状态。即原子性能够保证 <strong>动作要么全部完成，要么完全不起作用。</strong> <strong>即事务是最小的执行单位，不允许分割</strong>。</p>
<ol start="2">
<li><strong>一致性（Consistency）</strong></li>
</ol>
<p>指事务将数据库从一种一致性状态变为另一种一致性状态。在事务开始前后，数据库的完整性约束未被破坏。<strong>在事务执行前后，数据能够保持一致，多个事务对统一数据读取的结果相同</strong>。</p>
<ol start="3">
<li><strong>隔离性（Isolation）</strong></li>
</ol>
<p>并发访问数据库时，隔离性要求每个读写事务对其他事务的操作对象能够相互分离，即一个用户的事务不被其他事务所干扰，各并发事务间数据库是独立的；</p>
<ol start="4">
<li><strong>持久性（Durability）</strong></li>
</ol>
<p>表示事务一旦被提交，其结果就是永久性的，它对数据库中数据的改变是持久的，即便数据库发生故障也不应该对其产生影响；</p>
<h3 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h3>
<h4 id="脏读、幻读-不可重复读" tabindex="-1"><a class="header-anchor" href="#脏读、幻读-不可重复读" aria-hidden="true">#</a> 脏读、幻读 &amp; 不可重复读</h4>
<p>了解事务隔离级别之前，先来看看这几个读的概念：</p>
<ol>
<li><strong>脏读（Dirty Read）</strong></li>
</ol>
<p>表示某一事务已经更新了一份数据，另一个事务在此时读取了同一份数据。当前一个事务撤销操作后，就会导致后一个事务所读取的数据不正确。</p>
<ol start="2">
<li><strong>幻读（Phantom Read）</strong></li>
</ol>
<p>在一个事务的两次查询中数据量不一致，假如有一个事务查询了几列数据，同时另一个事务中在此时查询了新的数据，则查询事务在后续查询中，就会发现数据比最开始的查询数据更丰富。</p>
<ol start="3">
<li><strong>不可重复读（Non-repeatable Read）</strong></li>
</ol>
<p>一个事务中两次查询数据不一致，有可能是因为两次查询过程中插入了一个更新原有数据的事务。</p>
<p><strong>注意：不可重复读和幻读的区别在于：</strong></p>
<blockquote>
<p><strong>不可重复读的重点在于修改，</strong> 比如多次读取一条记录发现其中某些列的值被修改，而 <strong>幻读的重点在于新增或删除</strong>，比如多次读取一条记录发现记录增多或减少了。</p>
</blockquote>
<h4 id="隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离级别" aria-hidden="true">#</a> 隔离级别</h4>
<p>SQL 标准定义了 4 个隔离级别，隔离级别从低到高分别是：</p>
<ol>
<li><strong>READ-UNCOMMITTED（读取未提交）</strong></li>
</ol>
<p>最低的隔离级别，允许读取尚未提交的数据变更，<strong>可能导致脏读、幻读或不可重复读</strong>。</p>
<ol start="2">
<li><strong>READ-COMMITTED（读取已提交）</strong></li>
</ol>
<p>允许读取并发事务已经提交的数据，<strong>能够阻止脏读，但可能导致幻读或不可重复读</strong>。</p>
<ol start="3">
<li><strong>REPEATABLE-READ（可重复读）</strong></li>
</ol>
<p>对同一字段的多次读取结果时一致的，除非数据是被本身事务自己所修改，<strong>能够阻止脏读和不可重复读，但可能导致幻读</strong>。</p>
<ol start="4">
<li><strong>SERIALIZABLE（可串行化）</strong></li>
</ol>
<p>最高的隔离级别，完全服从 ACID 的隔离级别，所有事务依次逐个执行，这样事务之间就完全不可能产生干扰，<strong>能够防止脏读、幻读以及不可重复读</strong>、</p>
<table>
<thead>
<tr>
<th>隔离级别</th>
<th>脏读</th>
<th>不可重复读</th>
<th>幻读</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>READ-UNCOMMITTED</code></td>
<td>✔</td>
<td>✔</td>
<td>✔</td>
</tr>
<tr>
<td><code v-pre>READ-COMMITTED</code></td>
<td>❌</td>
<td>✔</td>
<td>✔</td>
</tr>
<tr>
<td><code v-pre>REPEATABLE-READ</code></td>
<td>❌</td>
<td>❌</td>
<td>✔</td>
</tr>
<tr>
<td><code v-pre>SERIALIZABLE</code></td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
</tbody>
</table>
<h2 id="锁" tabindex="-1"><a class="header-anchor" href="#锁" aria-hidden="true">#</a> 锁</h2>
<h3 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h3>
<p>当数据库中存在并发事务时，可能会导致数据库中的数据不一致，此时为了保证访问次序，我们就需要用到锁机制。</p>
<p>锁是为了支持对共享资源进行并发访问，提供数据的完整性和一致性，从而保证在高并发的情况下，访问数据库时不会出现问题；</p>
<h3 id="事务隔离级别与锁的关系" tabindex="-1"><a class="header-anchor" href="#事务隔离级别与锁的关系" aria-hidden="true">#</a> 事务隔离级别与锁的关系</h3>
<table>
<thead>
<tr>
<th>隔离级别</th>
<th>锁</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>READ-UNCOMMITTED</code></td>
<td>读取无需加共享锁</td>
</tr>
<tr>
<td><code v-pre>READ-COMMITTED</code></td>
<td>读操作需要加共享锁，语句执行完后释放</td>
</tr>
<tr>
<td><code v-pre>REPEATABLE-READ</code></td>
<td>读操作需要加共享锁，事务执行完毕后释放</td>
</tr>
<tr>
<td><code v-pre>SERIALIZABLE</code></td>
<td><strong>锁定整个范围的键</strong>，并一直持有锁，直到事务完成</td>
</tr>
</tbody>
</table>
<h3 id="数据库中死锁的定义及解决方法" tabindex="-1"><a class="header-anchor" href="#数据库中死锁的定义及解决方法" aria-hidden="true">#</a> 数据库中死锁的定义及解决方法</h3>
<ul>
<li><strong>定义</strong></li>
</ul>
<p>所谓死锁，<strong>指的是两个或多个以上进程在同一资源上相互占用，并请求锁定对方的资源，从而导致恶性循环的现象</strong>。</p>
<ul>
<li><strong>解决方法</strong></li>
</ul>
<ol>
<li><strong>若不同程序间并发存取多个表，则尽量约定以相同的顺序来访问表，从而大大降低死锁发生的概率；</strong></li>
<li><strong>同一事务中，尽量一次性锁定所需的所有资源，降低死锁发生的概率；</strong></li>
<li><strong>对于易发生死锁的业务部分，尝试使用升级锁定颗粒度；</strong></li>
</ol>
<h3 id="乐观锁-悲观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁-悲观锁" aria-hidden="true">#</a> 乐观锁 &amp; 悲观锁</h3>
<ul>
<li><strong>定义</strong></li>
</ul>
<p>并发控制能够确保多个事务同时存取数据库中同一数据时不破坏事务的隔离性和统一性，以及数据库的统一性，而并发控制主要可分为乐观锁（乐观并发控制）和悲观锁（悲观并发控制）。</p>
<ol>
<li><strong>乐观锁</strong></li>
</ol>
<p>假定不会发生并发冲突，只在提交事务时检查时候违反数据完整性。修改数据时将事务加锁，通过 <code v-pre>version</code> 的方式来进行锁定，<strong>一般使用版本号机制或CAS算法来实现</strong> ；</p>
<ol start="2">
<li><strong>悲观锁</strong></li>
</ol>
<p>假定会发生并发冲突，屏蔽一切可能违反数据完整性的操作。查询完数据时将事务加锁，直到提交事务，<strong>一般使用数据库中的锁机制来实现</strong>；</p>
<ul>
<li><strong>使用场景</strong></li>
</ul>
<p><strong>乐观锁</strong> 适合于 <strong>读操作频繁，但写操作较少</strong> 的情况，即冲突很少发生的场景，这样能够省去锁的开销，同时加大系统的吞吐量；</p>
<p><strong>悲观锁</strong>  适合于 <strong>写操作频繁，但读操作较少</strong> 的情况，即冲突频发的场景；</p>
<h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2>
<h3 id="定义-2" tabindex="-1"><a class="header-anchor" href="#定义-2" aria-hidden="true">#</a> 定义</h3>
<p>所谓索引，就是一种特殊的文件，<strong>包含数据表中所有记录的引用指针</strong>。它是一种数据结构，数据库索引是数据库管理系统中一个排序的数据结构，能够协助快速查询、更新数据库表中数据，同时使用 B 树及其变种 B+ 树来实现。用通俗的话来讲就是相当于我们日常字典中的目录，能够帮助我们快速找到想要的字或词。</p>
<h3 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理" aria-hidden="true">#</a> 基本原理</h3>
<p>使用索引的最终目录是快速查找具有特定值的记录，如果没有索引，当我们需要查找某一个值时，只能遍历整张表来查找，这样做查找效率就会大打折扣。</p>
<p>索引的原理也很简单，即 <strong>将无序数据变为有序的查询</strong>，根据索引查询数据的步骤如下：</p>
<ol>
<li><strong>将创建了索引的列的内容进行排序</strong></li>
<li><strong>对排序结果生成倒排表</strong></li>
<li><strong>在倒排内容上拼上数据地址链</strong></li>
<li><strong>在查询时，先拿到倒排表内容，然后取出数据地址链，从而取出具体数据</strong></li>
</ol>
<h3 id="索引优缺点" tabindex="-1"><a class="header-anchor" href="#索引优缺点" aria-hidden="true">#</a> 索引优缺点</h3>
<ul>
<li><strong>优点</strong></li>
</ul>
<ol>
<li>第一点毫无疑问是 <strong>加快数据的检索速度</strong>；</li>
<li>第二点则是 <strong>通过使用索引，能够在查询过程中使用优化隐藏器，提高性能</strong>。</li>
</ol>
<ul>
<li><strong>缺点</strong></li>
</ul>
<ol>
<li><strong>时间方面</strong>：虽然能够加快检索速度，但是创建和维护索引也需要时间，而且随着数据的增多，索引也需要动态维护，这样将会降低增/删/改的执行效率；</li>
<li><strong>空间方面</strong>：索引也是需要占据独立空间的，所以会随着数据的增多而占用更多的物理空间；</li>
</ol>
<h3 id="索引类型" tabindex="-1"><a class="header-anchor" href="#索引类型" aria-hidden="true">#</a> 索引类型</h3>
<h4 id="逻辑角度" tabindex="-1"><a class="header-anchor" href="#逻辑角度" aria-hidden="true">#</a> 逻辑角度</h4>
<p>索引从逻辑角度主要可分为 4 种索引，分别是：</p>
<ol>
<li><strong>主键索引</strong></li>
</ol>
<p>数据列不允许重复，不允许为 <code v-pre>NULL</code>，一个表中只能有一个主键；</p>
<ol start="2">
<li><strong>唯一索引</strong></li>
</ol>
<p>数据列不允许重复，允许为 <code v-pre>NULL</code> 值，一个表中允许多个列创建唯一索引，可以通过如下两种方式进行创建唯一索引：</p>
<ul>
<li><strong>创建唯一索引</strong>：<code v-pre>ALTER TABLE table_name ADD UNIQUE(column)</code></li>
<li><strong>创建唯一组合索引</strong>：<code v-pre>ALTER TABLE table_name ADD UNIQUE(column1, column2)</code>；</li>
</ul>
<ol start="3">
<li><strong>普通索引</strong></li>
</ol>
<p>最基本的索引类型，没有唯一性的限制，允许为 <code v-pre>NULL</code> 值，通过如下两种方式来创建唯一索引：</p>
<ul>
<li><strong>创建普通索引</strong>：<code v-pre>ALTER TABLE table_name ADD INDEX index_name (column)</code>；</li>
<li><strong>创建普通索引组合</strong>：<code v-pre>ALTER TABLE table_name ADD INDEX index_name (column1, column2)</code>；</li>
</ul>
<ol start="4">
<li><strong>全文索引</strong></li>
</ol>
<p>搜索引擎中也在使用的一种技术，通过 <code v-pre>ALTER TABLE table_name ADD FULLTEXT (column)</code> 来创建全文索引；</p>
<ol start="5">
<li><strong>组合索引</strong></li>
</ol>
<p>多列值组成一个索引，专门用于组合搜索，其效率大于索引合并；</p>
<h4 id="物理存储角度" tabindex="-1"><a class="header-anchor" href="#物理存储角度" aria-hidden="true">#</a> 物理存储角度</h4>
<ol>
<li><strong>聚集索引（clustered index）</strong></li>
<li><strong>非聚集索引（non-clustered index）</strong></li>
</ol>
<h4 id="数据结构角度" tabindex="-1"><a class="header-anchor" href="#数据结构角度" aria-hidden="true">#</a> 数据结构角度</h4>
<ol>
<li><strong>BTREE</strong></li>
<li><strong>HASH</strong></li>
<li><strong>FULLTEXT</strong></li>
<li><strong>R-Tree</strong></li>
</ol>
<h3 id="索引算法" tabindex="-1"><a class="header-anchor" href="#索引算法" aria-hidden="true">#</a> 索引算法</h3>
<p>常用的索引算法有 <strong>Hash 算法 和 B 树算法</strong>，分别多两个算法进行简单介绍：</p>
<ol>
<li><strong>B+ 树算法</strong></li>
</ol>
<p>最常用的 MySQL 算法，也是 MySQL 默认算法，既能够用于比较操作符（<code v-pre>=、&gt;、&lt;、between</code> 等），也能够用于 <code v-pre>like</code> 操作符，只要其查询条件是一个 <strong>不以通配符开头的常量</strong>。底层实现的是 <strong>多路平衡查找树</strong>，每次查询都要从根节点出发，查找到叶子节点方可获得所查询的键值，然后根据查询判断是否需要回表查询数据。</p>
<ol start="2">
<li><strong>Hash 算法</strong></li>
</ol>
<p>Hash 算法索引只能用于对等比较（<code v-pre>=、&gt;=、&lt;=</code>），而且不像 B 树索引需要从根节点到枝节点，最后才能范文到页节点进行多次读写操作，它只需要一次定位数据，所以检索效率远高于 B 树索引。其底层是 Hash 表，进行查找时，调用一次 <code v-pre>Hash</code> 函数就能获取相应键值，然后进行回表查询获得实际数据。</p>
<ol start="3">
<li><strong>两者对比</strong></li>
</ol>
<ul>
<li>Hash 索引进行等值查询更快，但是不能进行范围查询；</li>
<li>Hash 索引不支持使用索引进行排序；</li>
<li>Hash 索引不支持模糊查询以及多列索引的最左前缀匹配，因为 Hash 函数的结果不可预测；</li>
<li>Hash 索引无法避免回表查询数据，但 B+ 树在一定条件下（聚簇索引、覆盖索引等）只需要通过索引完成查询；</li>
<li>Hash 索引在等值查询时较快，但不稳定，性能不可预测；但 B+ 树的查询效率较稳定，对所有查询均是从根节点到叶子节点，且树的高度较低；</li>
</ul>
<h3 id="设计和创建索引的原则" tabindex="-1"><a class="header-anchor" href="#设计和创建索引的原则" aria-hidden="true">#</a> 设计和创建索引的原则</h3>
<h4 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h4>
<ol>
<li><strong>选择唯一性索引</strong></li>
</ol>
<p>唯一性索引的值唯一，能够更加快速地通过该索引来确定某条记录；</p>
<ol start="2">
<li><strong>为经常需要排序、分组和联合操作的字段建立索引</strong></li>
</ol>
<p>对于经常需要 <code v-pre>ORDER BY、GROUP BY、DISTINCT、UNION</code> 等操作的字段，排序时会浪费许多时间，因此我们可以为其建立索引，避免排序操作；</p>
<ol start="3">
<li><strong>为经常作为查询条件的字段建立索引</strong></li>
</ol>
<p>若某个字段经常作为查询条件，则该字段的查询速度将影响整个表的查询速度，此时可以给该字段建立索引，从而提高整个表的查询速度；</p>
<ol start="4">
<li><strong>限制索引数目</strong></li>
</ol>
<p>索引并非越多越好，每个索引都需要占用物理空间，索引越多占用的物理空间越大，修改表时对索引的重构和更新将十分麻烦；</p>
<ol start="5">
<li><strong>尽量使用数据量少的索引</strong></li>
</ol>
<p>如果索引值较长，查询速度也会受到影响；</p>
<ol start="6">
<li><strong>使用短索引，尽量使用前缀来索引</strong></li>
</ol>
<p>如果某索引字段值较长，最好使用值的前缀来进行索引；</p>
<ol start="7">
<li><strong>删除不再使用或很少使用的索引</strong></li>
</ol>
<p>表中数据被大量更新，或者数据使用方式被改变落后，原有的一些索引可能不再需要，此时需要对这些索引进行删除，减少索引对更新操作的影响；</p>
<h4 id="创建原则" tabindex="-1"><a class="header-anchor" href="#创建原则" aria-hidden="true">#</a> 创建原则</h4>
<p>使用索引能够在一定程度上提高检索效率，但也不能无限制的使用，创建索引时，最好能够满足如下原则：</p>
<ol>
<li><strong>最左前缀匹配原则</strong></li>
<li><strong>频繁查询的字段才创建索引</strong></li>
<li><strong>更新频繁的字段不适合创建索引</strong></li>
<li><strong>区分度不高的字段不适合做索引</strong></li>
<li><strong>尽量扩展索引，而不用去创建新的索引</strong></li>
<li><strong>定义有外键的数据列一定要建立索引</strong></li>
<li><strong>对于查询中很少涉及，而且重复值较多的字段无需建立索引</strong></li>
<li><strong>对于 <code v-pre>text、image、bit</code> 类型的字段不要建立索引</strong></li>
</ol>
<h3 id="b-树索引-和-hash-索引底层实现" tabindex="-1"><a class="header-anchor" href="#b-树索引-和-hash-索引底层实现" aria-hidden="true">#</a> B+ 树索引 和 Hash 索引底层实现</h3>
<ol>
<li><strong>Hash 索引</strong></li>
</ol>
<p>Hash 索引底层其实就是 Hash 表，进行查找时，调用一次 Hash 函数就能获取到响应的键值，然后进行回表查询获取数据库中的数据；</p>
<ol start="2">
<li><strong>B+ 树索引</strong></li>
</ol>
<p>B+ 树底层实现是多路平衡查找树，对每次的查询均从根节点出发，查找到叶子节点就获得所要查询的键值，然后根据查询判断是否需要回表查询数据；</p>
<ol start="3">
<li><strong>Hash 索引与 B+ 树的不同</strong></li>
</ol>
<ul>
<li>Hash 索引进行等值查询更快，但无法进行范围查询。因为 <code v-pre>Hash</code> 索引中经过 <code v-pre>hash()</code> 函数建立索引后，索引顺序与与原顺序无法保持一致，不能支持范围查询；而 B+ 树的所有节点皆遵循（左节点小于父节点，父节点小于右节点），天然支持范围查询；</li>
<li>Hash 索引不支持使用索引进行排序；</li>
<li>Hash 索引不支持模糊查询以及多列索引的最左前缀匹配，原理也是因为 <code v-pre>hash()</code> 函数的不可预测；</li>
<li>Hash 索引任何时候都必须进行回表查询，但 B+ 树在符合某些条件时可以只通过索引完成查询；</li>
<li>Hash 索引虽然等值查询较快，但是极其不稳定，性能不可预测，但某一键值存在大量重复时，会发生 Hash 碰撞，此时效率可能十分低下；而 B+ 树的查询效率比较稳定，对于所有的查询均是从根节点到叶子节点，且树的高度较低；</li>
</ul>
<p>鉴于以上不同点，因此在大多数情况下，直接选用 B+ 树索引能够获得稳定且较好的查询速度，而不需要使用 Hash 索引；</p>
<h2 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h2>
<h3 id="视图定义" tabindex="-1"><a class="header-anchor" href="#视图定义" aria-hidden="true">#</a> 视图定义</h3>
<p>为了提高复杂 SQL 语句的复用性和表操作的安全性，MySQL 数据库管理系统提供了视图。</p>
<p>视图的本质是 <strong>一种虚拟表，在物理上不存在，其内容与真实的表相似，包含一系列带有名称的列和行数据。</strong>  但视图并不在数据库中以存储的数据值形式存在，行和列数据来自定义视图的查询所引用基本表，且在具体引用视图时动态生成；</p>
<p>视图的操作一般包括如下四部分：</p>
<ul>
<li><strong>创建视图</strong></li>
<li><strong>查看视图</strong></li>
<li><strong>删除视图</strong></li>
<li><strong>修改视图</strong></li>
</ul>
<h3 id="视图特点" tabindex="-1"><a class="header-anchor" href="#视图特点" aria-hidden="true">#</a> 视图特点</h3>
<ol>
<li>视图的列可以来自不同的表，是表的抽象在逻辑意义上建立的新关系；</li>
<li>视图是有基本表（实表）产生的表（虚表）；</li>
<li>视图的建立和删除不会对基本表造成影响；</li>
<li>对视图内容的更新（添加、删除和修改）会直接影响到基本表；</li>
<li>当视图来自多个基本表时，不允许添加和删除数据；</li>
</ol>
<h3 id="视图优缺点" tabindex="-1"><a class="header-anchor" href="#视图优缺点" aria-hidden="true">#</a> 视图优缺点</h3>
<h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4>
<ol>
<li><strong>查询简单化</strong>，视图能够简化用户操作，数据所见即所得；</li>
<li><strong>数据安全性</strong>，视图使用户能从多个角度看待同一数据，用户只能查询或修改他们所能见到得到的数据，能够对机密数据提供安全保护；</li>
<li><strong>逻辑数据独立性</strong>，视图对重构数据库提供了一定程度的逻辑独立性，屏蔽真实表结构变化所带来的影响；</li>
</ol>
<h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4>
<ol>
<li><strong>性能相对较差</strong>，简单的查询也会变得很复杂；</li>
<li><strong>修改限制</strong>，尝试修改视图时，必须将其转化为对比本表的某些行的修改。对于复杂的聚合视图，基本无法改变；</li>
</ol>
<h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2>
<h3 id="大表优化" tabindex="-1"><a class="header-anchor" href="#大表优化" aria-hidden="true">#</a> 大表优化</h3>
<p>当 MySQL 单表记录数过大时，数据库的 CURD 性能会明显下降，此时可以采取如下的优化措施：</p>
<ol>
<li><strong>限定数据范围</strong></li>
</ol>
<p>务必禁止不带任何限制数据范围条件的查询语句，此时会查询整个数据库，效率极低；</p>
<ol start="2">
<li><strong>读/写分离</strong></li>
</ol>
<p>最经典的数据库拆分方案，主库负责写，从库负责读；</p>
<ol start="3">
<li><strong>垂直分区</strong></li>
</ol>
<p>即根据数据库中数据表的相关性进行拆分，简单来讲就是指数据表的拆分，将一张列较多的表分为多张表。这样操作使得 <strong>列数据变小，在查询时减少了读取的 Block 数，减少了 I/O 次数。同时，垂直分区也能够简化表的结构，易于维护</strong>。但是，垂直拆分也存在一定缺点。首先拆分将 <strong>导致主键出现冗余，此时就需要管理冗余列，同时会引起 Join 操作，可以通过在应用层进行 Join 来解决。此外，拆分还会让事务变得更加复杂。</strong></p>
<ol start="4">
<li><strong>水平分区</strong></li>
</ol>
<p><strong>保持数据表结构不变，通过某一策略存储数据分片。这样一来每一片数据分散到不同表或库中，从而达到分布式的目的，而且通过水平切分能够支撑非常大的数据量。</strong></p>
<p>水平拆分是将数据表的行进行拆分，它能够 <strong>支撑非常大的数据量存储</strong>，应用端改造也少，但是 <strong>分片事务难以解决，跨节点 Join 性能较差，逻辑复杂。</strong></p>
<p>一般来讲数据库分片操作的两种常见方案如下：</p>
<ul>
<li><strong>客户端代理：分片逻辑在应用端，封装在 jar 包中，通过修改或封装 JDBC 层来实现。</strong></li>
<li><strong>中间件代理：在应用和数据间加一个代理层，分片逻辑统一维护在中间件服务中。</strong></li>
</ul>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<h3 id="sql-注入" tabindex="-1"><a class="header-anchor" href="#sql-注入" aria-hidden="true">#</a> sql 注入</h3>
<p>用户传入的参数中符合 sql 的语法，从而破坏原有 sql 结构语义，从而达到攻击效果；</p>
<h3 id="null-和空串" tabindex="-1"><a class="header-anchor" href="#null-和空串" aria-hidden="true">#</a> NULL 和空串</h3>
<p><code v-pre>NULL</code> 是没有值的，不是空串，如果只指定 ‘’ （两个单引号，中间无任何字符），对于 <code v-pre>NOT NULL</code> 列是允许的，空串也是一个有效的值；</p>
<p>要对 <code v-pre>NULL</code> 进行判断，则需要使用 <code v-pre>IS NULL</code> 或者 <code v-pre>IS NOT NULL</code>；</p>
<h3 id="如何创建用户并授权" tabindex="-1"><a class="header-anchor" href="#如何创建用户并授权" aria-hidden="true">#</a> 如何创建用户并授权</h3>
<ol>
<li><strong>创建用户</strong></li>
</ol>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">'username'</span><span class="token variable">@'host'</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">'password'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li><strong>授权</strong></li>
</ol>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">GRANT</span> <span class="token keyword">privileges</span> <span class="token keyword">ON</span> databasename<span class="token punctuation">.</span>tablename <span class="token keyword">TO</span> <span class="token string">'username'</span><span class="token variable">@'host'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="如何删除表" tabindex="-1"><a class="header-anchor" href="#如何删除表" aria-hidden="true">#</a> 如何删除表</h3>
<table>
<thead>
<tr>
<th>方式</th>
<th>说明</th>
<th>实例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>delete</code></td>
<td>仅删除表数据，支持条件过滤，支持回滚，记录日志，因此较慢</td>
<td><code v-pre>delete from table_name</code></td>
</tr>
<tr>
<td><code v-pre>truncate</code></td>
<td>仅删除所有数据，不支持条件过滤，不支持回滚，不记录日志，效率高于 <code v-pre>delete</code></td>
<td><code v-pre>truncate table table_name</code></td>
</tr>
<tr>
<td><code v-pre>drop</code></td>
<td>删除表数据同时删除表结构，将表所占空间均释放，删除效率最高</td>
<td><code v-pre>drop table table_name</code></td>
</tr>
</tbody>
</table>
</div></template>


