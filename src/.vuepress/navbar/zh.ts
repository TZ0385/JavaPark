import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "Java",
    icon: "java",
    prefix: "/md/java/",
    children: [
      {
        text: "SE 菜鸟入门",
        icon: "java",
        link: "se/",
      },

      {
        text: "SE 实训营",
        icon: "java",
        link: "se-in-action/",
      },

      {
        text: "Java  Web",
        icon: "web",
        link: "web/",
      },

      {
        text: "Maven 入门",
        icon: "apache",
        link: "maven/",
      },

      {
        text: "Spring 教程",
        icon: "spring",
        link: "spring/",
      },

      {
        text: "Spring MVC",
        icon: "spring",
        link: "springmvc/",
      },

      {
        text: "MyBatis 指北",
        icon: "mybatis",
        link: "mybatis/",
      },

      {
        text: "MyBatis Plus",
        icon: "mybatis",
        link: "mybatisplus/",
      },

      {
        text: "Spring Boot",
        icon: "spring",
        link: "springboot/",
      },

      {
        text: "Vue3 笔记",
        icon: "vue",
        link: "vue3/",
      },

      {
        text: "Nginx 笔记",
        icon: "nginx",
        link: "nginx/",
      },
    ],
  },

  {
    text: "面试宝典",
    icon: "interview",
    link: "/md/interview",
  },

  {
    text: "优质书籍",
    icon: "book",
    link: "https://github.com/cunyu1943/ebooks",
  },

  {
    text: "效率神器",
    icon: "rocket",
    link: "https://www.yuque.com/cunyu1943/nav/",
  },

  {
    text: "更新日志",
    icon: "timeline",
    link: "/timeline",
  },
]);
