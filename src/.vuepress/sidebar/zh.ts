import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      icon: "java",
      text: "Java",
      prefix: "md/java/",
      collapsable: true,
      children: "structure",
    },

    {
      icon: "guide",
      text: "面试宝典",
      prefix: "md/interview/",
      link: "md/interview/",
      collapsable: true,
      children: "structure",
    },

    {
      icon: "code",
      text: "开发工具",
      prefix: "md/dev-tools/",
      collapsable: true,
      children: "structure",
    },
  ],
});
