import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  "",
  // "home",
  // "slide",
  {
    text: "Java",
    icon: "java",
    prefix: "java/",
    collapsable: true,
    children: [
      {
        text: "Java SE",
        prefix: "java-se/",
        icon: "java",
        collapsable: true,
        children: [
          "jdk-install-and-hello-world",
          "learn-java-with-idea",
          "variable-and-datatype",
          "operator",
          "control-process",
          "how-to-operate-array",
          "oop-1",
          "oop-2",
          "all-kinds-of-variable",
          "in-out-stream",
          "reflection",
          "annotations",
          "jdbc-introduction",
          "test-with-junit",
          "lombok-install-and-usage",
        ],
      },
      {
        text: "Java Web",
        prefix: "java-web/",
        icon: "html",
        collapsable: true,
        children:[
          "create-deploy-javaweb-with-idea",
        ],
      },
      {
        text: "Maven",
        prefix: "maven/",
        icon: "Apache",
        collapsable: true,
        children:[
          "maven-intro-install",
          "maven-command-skeleton",
          "maven-warehouse-dependency",
          "maven-project-with-idea",
        ],
      },
      {
        text: "Spring Boot",
        prefix: "spring-boot/",
        icon: "leaf",
        collapsable: true,
        children: [
          "introduction",
          "the-methods-to-create-springboot-project",
          "configuration",
          "integrated-swagger2",
          "integrated-swagger3",
          "integrated-freemarker",
          "integrated-thymeleaf",
        ],
      },
    ],
  },
  {
    text: "效率工具",
    icon: "tool",
    prefix: "efficiency/",
    collapsable: true,
    children: [
      {
        text: "博客搭建",
        prefix: "blog/",
        icon: "blog",
        collapsable: true,
        children: [
          "hexo",
          "halo",
          "vuepress-github-action",
          "docsify",
        ],
      },
    ],
  },

  // {
  //   text: "如何使用",
  //   icon: "creative",
  //   prefix: "guide/",
  //   link: "guide/",
  //   children: "structure",
  // },
  // {
  //   text: "文章",
  //   icon: "note",
  //   prefix: "posts/",
  //   children: [
  //     {
  //       text: "文章 1-4",
  //       icon: "note",
  //       collapsable: true,
  //       prefix: "article/",
  //       children: ["article1", "article2", "article3", "article4"],
  //     },
  //     {
  //       text: "文章 5-12",
  //       icon: "note",
  //       children: [
  //         {
  //           text: "文章 5-8",
  //           icon: "note",
  //           collapsable: true,
  //           prefix: "article/",
  //           children: ["article5", "article6", "article7", "article8"],
  //         },
  //         {
  //           text: "文章 9-12",
  //           icon: "note",
  //           children: ["article9", "article10", "article11", "article12"],
  //         },
  //       ],
  //     },
  //   ],
  // },
]);
