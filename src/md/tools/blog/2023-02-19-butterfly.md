---
title: Hexo + Butterfly 博客搭建教程
index: false
isOriginal: true
icon: hexo
order: 2
category:
  - 博客搭建
date: 2023-02-19
---

## 1. Hexo 博客搭建

```shell
hexo init butterfly-blog
```

![](https://img-blog.csdnimg.cn/5eab7b3da0e04d76806a4ba9313f3e78.png)

## 2. 主题设置

### 2.1 主题安装

进入刚才初始化后的博客根目录中，然后安装 `Butterfly` 主题。但是需要注意的是，该方法只适合于 `Hexo 5.0.0` 以上的版本。

```shell
npm i hexo-theme-butterfly
```

![](https://img-blog.csdnimg.cn/0d126d303a1d4f2c8e8cfa98d7b0ba2f.png)

如果想要后续想要升级主题，那么只需要在博客根目录中执行以下命令即可。

```shell
npm update hexo-theme-butterfly
```

### 2.2 主题应用

然后修改 `Hexo` 根目录中的 `_config.yml` 配置，将 `theme` 设置为 `butterfly`.

```yml
theme: butterfly
```

### 2.3 插件安装

初次安装 `Butterfly` 时，是需要安装相关渲染插件的，所以需要执行以下命令安装 `pug` 以及 `stylus` 渲染器。

```shell
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

### 2.4 主题配置

因为主题的升级是比较频繁的，如果想要减少后续主题升级后带来的麻烦，那么推荐在博客根目录下创建一个 `_config.butterfly.yml` 文件，然后把主题目录中 `_config.yml` 中的内容复制到该文件中。

### 2.5 标签、分类、友链页

1.   **标签页**

进入博客根目录，然后用以下命令创建标签页。

```shell
hexo new page tags
```

然后会在 `source/tags/` 目录下找到 `index.md` 文件，然后将 `type: "tags"` 加入，同时将该页的评论关闭，得到最终的内容如下：

```md
---
title: 标签
comments: false
date: 2023-02-19 21:42:32
type: "tags"
---
```

2.   **分类页**

进入博客根目录，然后用以下命令创建分类页。

```shell
hexo new page categories
```

然后会在 `source/categories/` 目录下找到 `index.md` 文件，然后将 `type: "categories"` 加入，同时将该页的评论关闭，得到最终的内容如下：

```md
---
title: 分类
comments: false
date: 2023-02-19 21:46:22
type: "categories"
---
```

3.   **友链页**

进入博客根目录，然后用以下命令创建友链页。

```shell
hexo new page link
```

然后会在 `source/link/` 目录下找到 `index.md` 文件，然后将 `type: "link"` 加入，同时将该页的评论关闭，得到最终的内容如下：

```md
---
title: 友链
date: 2023-02-19 21:51:46
type: "link"
---
```

接着在博客根目录下的 `source` 目录中创建 `_data` 文件夹，然后在其中创建一个文件 `link.yml`，接着在其中以以下格式添加友链即可。

```yml
- class_name: 其他平台
  class_desc: 我在其他平台的身影
  link_list:
    - name: JavaPark
      link: https://cunyu1943.github.io/JavaPark
      avatar: https://cunyu1943.gitee.io/JavaPark/logo.png
      descr: Java 自学指南
```

4.   **关于页**

进入博客根目录，然后用以下命令创建关于页。

```shell
hexo new page about
```

然后会在 `source/about/` 目录下找到 `index.md` 文件，然后将 `type: "about"` 加入，得到最终的内容如下：

```md
---
title: 关于
date: 2023-02-19 21:58:37
type: "about"
---
```

### 2.6 404 页面

`Butterfly` 主题中已经内置了一个简单的 `404` 页面，可以在 `_config.butterfly.yml` 中配置。

```yml
error_404:
  enable: true
  subtitle: "页面未找到"
  background: 
```

### 2.7 导航菜单

在主题配置文件 `_config.butterfly.yml` 中配置导航菜单，注意，结尾必须是 `/xxx/`，然后用 `||` 分隔开，最后加上图标名即可。当然，如果不想显示图标，也可以不用写图标。

```yml
menu:
  主页: / || fas fa-home
  目录||fas fa-list:
    归档: /archives/ || fas fa-archive
    分类: /categories/ || fas fa-folder-open
    标签: /tags/ || fas fa-tags
  友链: /link/ || fas fa-link
  关于: /about/ || fas fa-heart
```

### 2.8 导航栏设置

在主题配置文件 `_config.butterfly.yml` 中，设置相关参数。

```yml
nav:
  logo: #image
  display_title: true
  fixed: false # fixed navigation bar
```

| 参数            | 解释                                       |
| --------------- | ------------------------------------------ |
| `logo`          | 网站的 `logo`，支持图片，直接填入图片链接  |
| `display_title` | 是否显示网站标题，填写 `true` 或者 `false` |
| `fixed`         | 是否固定状态栏，填写 `true` 或者 `false`   |

### 2.9 代码相关

1.   **代码主题**

修改主题配置文件 `_config.butterfly.yml`，设置文章中代码的主题即可。

| 主题         | 预览                                                                  |
| ------------ | --------------------------------------------------------------------- |
| `darker`     | ![](https://img-blog.csdnimg.cn/3f40c34a3da94938a5222a78a9fcf9fc.png) |
| `pale night` | ![](https://img-blog.csdnimg.cn/a10898f482f74e2dae644962421bd65d.png) |
| `ocean`      | ![](https://img-blog.csdnimg.cn/550a008bb28d4e1f88335c35961f5ca7.png) |
| `light`      | ![](https://img-blog.csdnimg.cn/f1d0d5afda2b48fa85c696c251443947.png) |
| `mac`        | ![](https://img-blog.csdnimg.cn/d774c47d864740c382af0db4e2fd5875.png) |
| `mac light`  | ![](https://img-blog.csdnimg.cn/da759525591844338db48edc3f0d0f39.png) |

```yml
highlight_theme: mac
```

2.   **代码复制**

```yml
highlight_copy: true
```

3.   **代码框展开/关闭**

-   `true`：全部代码框不展开，需要点击 `>` 打开
-   `false`：代码框展开，有 `>` 点击按钮
-   `none`：不显示 `>` 按钮

```yml
highlight_shrink: true
```

4.   **代码换行**

默认情况下，`Hexo` 在编译时不会实现代码自动换行，如果不想代码块区域有横线滚动条，则可以开启。

```yml
code_word_wrap: true
```

但是需要修改站点的配置文件 `_config.yml`，无论是使用 `highlight` 还是 `prismjs` 渲染，则需要将 `line_number` 改为 `false.`

5.   **代码高度**

配置代码高度限制，超过的部分会隐藏，但会显示展开按钮。

```yml
highlight_height_limit: 300
```

### 2.10 社交图标

`Butterfly` 中支持 [`font-awesome V6`](https://fontawesome.com/icons?from=io) 图标，书写格式为：

```yml
图标名: url || 描述
```

```yml
social:
  fab fa-github: https://github.com/cunyu1943/JavaPark || JavaPark
  fa-solid fa-c: https://cunyu1943.blog.csdn.net || CSDN
  fas fa-envelope: mailto:747731461@qq.com || Email
```

### 2.10 主页文章节选

`Butterfly` 主题中提供了以下 4 中可选择。

1.   **description**：只显示 `description`
2.   **both**：优先选择 `description`，如果无相关配置 `description`，那么就自动节选的内容
3.   **auto_excerpt**：只显示自动节选
4.   **false**：不显示文章内容

```yml
index_post_content:
  method: 2
  length: 300
```

### 2.11 顶部图

如果不需要显示顶部图，那么直接禁用即可。

```yml
disable_top_img: true
```

### 2.12 文章置顶

如果想要把文章置顶，需要在文章 `front-matter` 区域中添加 `sticky: 1` 属性把文章置顶即可。其中数值越大，置顶的优先级越高。

### 2.13 文章封面

1.   **是否显示**

如果要显示文章封面，则将主题设置的 `cover` 属性中的 `index_enable` 设置为 `true` 即可。如果不想显示文章封面，则将该属性设置为 `false`。

```yml
cover:
  index_enable: true
```

2.   **单独设置**

如果要单独给每篇文章设置不同的封面，那就需要在文章的 `Front-matter` 中添加 `cover` 属性，设置封面的图片地址即可。

3.   **封面显示的位置**

主要分为三种：

-   **left**：全部显示在左边
-   **right**：全部显示在右边
-   **both**：封面位置左右交替显示

4.   **设置默认封面**

如果不想每次给文章设置单独封面，那么可以配置默认的封面，然后主题会自动从中选择一个封面配置给文章。

```yml
default_cover:
  - https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_960_720.png
  - https://cdn.pixabay.com/photo/2023/01/10/10/47/space-7709489_960_720.jpg
  - https://cdn.pixabay.com/photo/2022/10/31/12/40/sorrow-7559727_960_720.jpg
```

### 2.14 文章页配置

1.   **文章 meta 显示**

```yml
post_meta:
  page:
    date_type: updated # created or updated or both 主页文章日期是创建日或者更新日或都显示
    date_format: date # date/relative 显示日期还是相对日期
    categories: true # true or false 主页是否显示分类
    tags: true # true or false 主页是否显示标签
    label: false # true or false 显示描述性文字
  post:
    date_type: updated # created or updated or both 文章页日期是创建日或者更新日或都显示
    date_format: date # date/relative 显示日期还是相对日期
    categories: true # true or false 文章页是否显示分类
    tags: true # true or false 文章页是否显示标签
    label: false # true or false 显示描述性文字
```

2.   **文章版权**

通过添加相关配置后，为博客文章展示文章版权和许可协议。

```yml
post_copyright:
  enable: true
  decode: false
  author_href:
  license: CC BY-NC-SA 4.0
  license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/
```

3.   **文章打赏**

配置打赏相关信息，让你的读者可以该方式给你打赏。

在博客根目录下的 `source` 目录下新建 `img` 目录，然后将支付宝和微信收款二维码加入后配置即可。

```yml
reward:
  enable: true
  QR_code:
    - img: /img/wechat.jpg
      link:
      text: 微信支付
    - img: /img/alipay.jpg
      link:
      text: 支付宝
```

4.   **TOC**

```yml
toc:
  post: true
  page: true
  number: false
  expand: true
  style_simple: true
  scroll_percent: true
```

5.   **相关文章**

```yml
related_post:
  enable: true
  limit: 6
  date_type: updated
```

6.   **文章分页**

-   **1**：下一篇显示的是旧文章
-   **2**：下一篇显示的是新文章
-   **false**：关闭分页按钮

```yml
post_pagination: 2
```

7.   **文章过期提醒**

-   **limit_day**： 距离更新时间多少天才显示文章过期提醒
-   **message_prev** ： 天数之前的文字
-   **message_next**：天数之后的文字

```yml
noticeOutdate:
  enable: true
  style: flat # style: simple/flat
  limit_day: 365 # When will it be shown
  position: top # position: top/bottom
  message_prev: 距离本文上一次更新已经过去
  message_next: 天，相关内容可能已不具备时效性，请注意！
```



### 2.15 头像

```yml
avatar:
  img: /img/avatar.png
  effect: true # 头像会一直转圈
```

### 2.16 图片描述

```yml
photofigcaption: true
```

### 2.17 复制相关配置

```yml
copy:
  enable: true
  copyright:
    enable: true
    limit_count: 50
```

| 配置         | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| enable       | 是否开启网站复制权限                                         |
| copyright    | 复制的内容后面加上版权信息                                   |
| enable       | 是否开启复制版权信息添加                                     |
| limit\_count | 字数限制，当复制文字大于这个字数限制时，将在复制的内容后面加上版权信息 |

### 2.18 Footer



```yml
footer:
  owner:
    enable: true
    since: 2018
  custom_text:
  copyright: false
```

### 2.19 右下角按钮

1.   **简繁转换**

```yml
translate:
  enable: true
  default: 繁
  defaultEncoding: 2
  translateDelay: 0
  msgToTraditionalChinese: "繁"
  msgToSimplifiedChinese: "簡"
```

2.   **夜间模式**

```yml
darkmode:
  enable: true
  button: true
  autoChangeMode: 1
```

autoChangeMode: 1 跟随系统而变化，不支持的浏览器/系统将按照时间晚上6点到早上6点之间切换为 dark mode

autoChangeMode: 2 只按照时间 晚上6点到早上6点之间切换为 dark mode,其余时间为light mode

autoChangeMode: false 取消自动切换

3.   **阅读模式**

```yml
readmode: true
```

4.   **滚动状态百分比**

```yml
rightside_scroll_percent: true
```

5.   **按钮排序**

```yml
rightside_item_order:
  enable: true
  hide: # readmode,translate,darkmode,hideAside
  show: readmode,translate,darkmode,comment,toc # toc,chat,comment
```



## 3. 站点配置

### 3.1 语言

修改博客根目录的配置文件 `_config.yml`，支持三种语言：

-   `default(en)`
-   `zh-CN`（简体中文）
-   `zh-TW`（繁体中文）

### 3.2 站点资料

修改站点相关的各种资料，比如标题、副标题以及邮箱等，修改根目录中的 `_config.yml` 即可。

```yml
title: JavaPark
subtitle: 'JavaPark 自学指南'
description: '「Java 自学指南」Java 学习保姆级教程、面试总结、计算机基础、数据库、实战实践、效率工具、资源分享、程序人生'
keywords: 'Java、Spring、Spring Boot、Spring Cloud、面试、效率工具、教程'
author: 村雨遥
language: zh-CN
timezone: 'Asia/Shanghai'
```



