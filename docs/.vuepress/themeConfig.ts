import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://cunyu1943.github.io/JavaPark",
  triggerWords: 30,

  author: {
    name: "村雨遥",
    url: "https://cunyu1943.github.io/JavaPark",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.png",
  favicon: "favicon.icon",

  repo: "cunyu1943/JavaPark",

  docsDir: "docs/",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "更多精彩内容，尽在公众号：<b>「村雨遥」</b></br></br><img src=\"https://github.com/cunyu1943/cunyu1943/blob/main/imgs/wepublic.gif?raw=true\" width=\"100\" alt=\"公众号\" />",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime","Word"],

  // 博客信息
  blog: {
    description: "CSDN 博客专家、阿里云专家博主、华为云云享专家",
    // intro: "/intro.html",
    medias: {
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:747731461@qq.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      Gitee: "https://gitee.com/cunyu1943",
      GitHub: "https://github.com/cunyu1943",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      Wechat: "cunyu1943",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      Zhihu: "https://www.zhihu.com/people/cunyu1943",
    },
  },

  // 加密
  // encrypt: {
  //   config: {
  //     "/java/": ["1234"],
  //   },
  // },

  plugins: {

    // Feed 支持
    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    // 版权信息
    copyright: true,
    search: {
      locales: {
        "/zh/": {
          placeholder: "搜索",
        },
      },
    },

    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using giscus
       */
      // type: "giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      type: "waline",
      serverURL: "https://waline-bz1ai9zkr-cunyu1943.vercel.app/",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
