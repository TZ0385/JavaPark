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
        text: "Java Web",
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
        text: "JavaScript 笔记",
        icon: "javascript",
        link: "js/",
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
    text: "计算机基础",
    icon: "coputer",
    prefix: "/md",
    children: [
      {
        text: "数据结构与算法",
        icon: "algo",
        link: "/cs-basics/algorithm",
      },

      {
        text: "数据库",
        icon: "database",
        prefix: "/database",
        children: [
          {
            text: "MySQL",
            icon: "mysql",
            link: "/mysql",
          },

          {
            text: "PostgreSQL",
            icon: "postgresql",
            link: "/postgresql",
          },
        ],
      },
    ],
  },

  {
    text: "效率工具",
    icon: "rocket",
    prefix: "/md",
    children: [
      {
        text: "开发工具",
        icon: "terminal",
        prefix: "/dev-tools",
        children: [
          {
            text: "IntelliJ IDEA",
            icon: "intellijidea",
            link: "/idea",
          },

          {
            text: "Git 笔记",
            icon: "git",
            link: "/git",
          },
        ],
      },

      {
        text: "效率工具",
        icon: "rocket",
        prefix: "/tools",
        children: [
          {
            text: "博客搭建",
            icon: "blog",
            link: "/blog",
          },

          {
            text: "效率提升",
            icon: "rocket",
            link: "/efficiency",
          },

          {
            text: "资源推荐",
            icon: "resource",
            link: "/resource",
          },

          {
            text: "Windows",
            icon: "windows",
            link: "/windows",
          },

          {
            text: "macOS",
            icon: "macos",
            link: "/macos",
          },

          {
            text: "Linux",
            icon: "linux",
            link: "/linux",
          },
        ],
      },
    ],
  },

  {
    text: "考试提升",
    icon: "exam",
    prefix: "/md/exam",
    children: [
      {
        text: "软件设计师",
        icon: "robot",
        link: "/software-developer",
      },
    ],
  },

  {
    text: "优质书籍",
    icon: "book",
    link: "https://github.com/cunyu1943/ebooks",
  },

  {
    text: "旧版博客",
    icon: "blog",
    link: "https://cunyu1943.github.io",
  },
  // {
  //   text: "效率神器",
  //   icon: "rocket",
  //   link: "https://www.yuque.com/cunyu1943/nav/",
  // },

  {
    text: "更新日志",
    icon: "timeline",
    link: "/timeline",
  },
]);
