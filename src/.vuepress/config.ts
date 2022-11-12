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
      appId: "D8MI4BWH3Z",
      apiKey: "e0bcfe17fa5b06e346c79a4da439935e",
      indexName: "JavaPark",
    }),
  ]

});
