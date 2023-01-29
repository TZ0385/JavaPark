import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      icon: "java",
      text: "Java",
      prefix: "md/java/",
      collapsible: true,
      children: "structure",
    },

    {
      icon: "interview",
      text: "面试宝典",
      prefix: "md/interview/",
      link: "md/interview/",
      collapsible: true,
      children: "structure",
    },

    {
      icon: "computer",
      text: "计算机基础",
      prefix: "md/cs-basics/",
      collapsible: true,
      children: "structure",
    },

    {
      icon: "database",
      text: "数据库",
      prefix: "md/database/",
      collapsible: true,
      children: "structure",
    },

    {
      icon: "terminal",
      text: "开发工具",
      prefix: "md/dev-tools/",
      collapsible: true,
      children: "structure",
    },

    {
      icon: "rocket",
      text: "效率工具",
      prefix: "md/tools/",
      collapsible: true,
      children: "structure",
    },

    {
      icon: "exam",
      text: "考试提升",
      prefix: "md/exam/",
      collapsible: true,
      children: "structure",
    },
  ],
});
