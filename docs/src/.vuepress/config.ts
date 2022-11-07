import { defineUserConfig } from "vuepress";
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

});
