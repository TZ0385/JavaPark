import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://cunyu1943.github.io/JavaPark",


  author: {
    name: "村雨遥",
    url: "https://cunyu1943.github.io/JavaPark",
  },

  iconAssets: "iconfont",

  logo: "/logo.png",
  // favicon: "/favicon.icon",
  repo: "cunyu1943/JavaPark",

  docsDir: "docs/",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,



  footer: "更多精彩内容，尽在公众号：<b>「村雨遥」</b></br></br><img src=\"https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wepublic.gif\" width=\"100\" alt=\"公众号\" />",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "CSDN 博客专家、掘金优秀作者、阿里云专家博主、华为云云享专家，公众号：村雨遥",
    // intro: "/intro.html",
    medias: {
      Email: "mailto:747731461@qq.com",
      Zhihu: "https://www.zhihu.com/people/cunyu1943",
      Gitee: "https://gitee.com/cunyu1943",
      GitHub: "https://github.com/cunyu1943",
      Wechat: "https://cdn.jsdelivr.net/gh/cunyu1943/cunyu1943@main/imgs/wechat.gif",
      QQ: "747731461",

    },
  },
  // // 加密
  //   encrypt: {
  //     config: {
  //       "/guide/encrypt.html": ["1234"],
  //     },
  //   },

  //  主题色
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  //  全屏按钮
  fullscreen: true,

  plugins: {
    // Feed 支持
    feed: {
      atom: true,
      json: true,
      rss: true,
    },
    // 版权信息
    copyright: true,
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://waline-bz1ai9zkr-cunyu1943.vercel.app/",
    },

    mdEnhance: {
      tex: true,
      enableAll: false,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
