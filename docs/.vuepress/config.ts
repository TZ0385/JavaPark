import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "zh-CN",
  title: "JavaPark",
  description: "Java 自学编程之路",

  base: "/JavaPark/",

  head: [
    // 百度统计
    [
      "script", {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0e04a42f3ef801de0a628947884a3bcd";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
    [
      "link",
      {
        rel: "stylesheet",
        // href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
        href: "//at.alicdn.com/t/font_3334252_h2harfu01t.css",
      },
    ],
  ],

  themeConfig,
});
