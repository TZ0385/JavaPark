import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  themeColor: {
    blue: "#2196f3",
    // green: "#3eaf7c",
    red: "#f26d6d",
    orange: "#fb9b5f",
    purple: "#c56cf0",
  },

  hostname: "https://cunyu1943.github.io",

  author: {
    name: "村雨遥",
    url: "https://cunyu1943.github.io/JavaPark",
    email: "747731461@qq.com",
  },

  iconAssets: "//at.alicdn.com/t/c/font_3871871_q9xua0qirib.css",

  fullscreen: true,

  logo: "/logo.png",

  repo: "cunyu1943/JavaPark",

  docsDir: "JavaPark/src/md",

  pageInfo: ["Author", "Date", "Category", "Word", "ReadingTime", "PageView"],

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      // footer: "GPL Licensed | All rights reserved.",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 中编辑此页",
      },
    },
  },

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  plugins: {
    blog: true,

    copyright: {
      author: "村雨遥",
      license:
        "转载请注明以下信息：『作者：村雨遥，博客：https://cunyu1943.github.io/JavaPark』",
      global: true,
      triggerWords: 50,
    },

    feed: {
      rss: true,
      rssOutputFilename: "rss.xml",
    },

    sitemap: {
      sitemapFilename: "sitemap.xml",
    },

    components: {
      rootComponents: {
        addThis: "ra-63db55caf33c5b85",
        notice: [
          {
            showOnce: true,
            path: "/",
            title: "🎉🎉🎉",
            content:
              '<center>扫码加入<b><font color="green">JavaPark 官方交流群</font></b>，和大家一起成长！</br></br><img src="https://cunyu1943.gitee.io/JavaPark/assets/wechat-04088ce1.png" width="150"></center>',
            confirm: true,
            actions: [
              {
                text: "我已加入",
                // link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIyNTg2MjkzNw==&action=getalbum&album_id=2501145320567963650&scene=173&from_msgid=2247496990&from_itemidx=1&count=3&nolastread=1#wechat_redirect",
                // type: "primary",
              },
            ],
            fullscreen: true,
          },
        ],
      },
      components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "FontIcon",
        "PDF",
        "StackBlitz",
        "SiteInfo",
        "VideoPlayer",
        "XiGua",
        "YouTube",
      ],
    },

    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "cunyu1943/JavaPark",
      repoId: "R_kgDOHI1mog",
      category: "Announcements",
      categoryId: "DIC_kwDOHI1mos4CUBUV",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://waline-bz1ai9zkr-cunyu1943.vercel.app/",
    },

    // Disable features you don’t want here
    mdEnhance: {
      sub: true,
      sup: true,
      tabs: true,
      imgMark: true,
      imgLazyload: true,
      imgSize: true,
      vPre: true,
      vuePlayground: true,
      linkCheck: true,
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      include: true,
      katex: true,
      footnote: true,
      mark: true,
      mermaid: true,
      tasklist: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
