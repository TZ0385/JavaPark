import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";
import { removePWAPlugin } from "vuepress-plugin-remove-pwa";

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
    removePWAPlugin({
      // 你的选项
    }),
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
});
