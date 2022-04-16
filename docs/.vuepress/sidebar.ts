import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  "",
  // Java
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
  // 效率工具
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
  // 实战训练
  {
    text: "实战训练",
    icon: "app",
    prefix: "practical-training-camp/",
    collapsable: true,
    children: [
      {
        text: "Java 编程实例",
        prefix: "java-instance/",
        icon: "java",
        collapsable: true,
        children: [
          "1-5",
          "6-10",
          "11-15",
          "16-20",
          "21-25",
          "26-30",
          "31-35",
          "36-40",
          "41-45",
          "46-50",
          "51-55",
          "56-60",
          "61-65",
          "66-70",
          "71-75",
        ],
      },
    ],
  },
]);
