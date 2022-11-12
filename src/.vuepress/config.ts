import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/JavaPark/",
  lang: "zh-CN",

  locales: {
    "/": {
      title: "JavaPark",
      description: "Java 自学指南",
    },
  },

  theme,

  shouldPrefetch: false,

  plugins: [
    docsearchPlugin({
      // 你的选项
      // appId, apiKey 和 indexName 是必填的
      appId: "fds",
      apiKey: "fds",
      indexName: "fsd",
    }),
  ]

});
