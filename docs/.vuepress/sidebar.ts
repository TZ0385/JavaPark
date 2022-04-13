import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  // "",
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
        icon: "basic",
        collapsable: true,
        prefix: "java-se/",
        children: [
          "1",
          "2"
        ],
      },
      {
        text: "Java SE",
        icon: "basic",
        collapsable: true,
        prefix: "java-se/",
        children: [
          "1",
          "2"
        ],
      }
    ],
  },
  {
    text: "计算机基础",
    icon: "computer",
    prefix: "cs-basics/",
    collapsable: true,
    children: [
      {
        text: "网络",
        prefix: "network/",
        icon: "network",
        collapsable: true,
        children: [
        ],
      },
      {
        text: "操作系统",
        prefix: "operating-system/",
        icon: "caozuoxitong",
        collapsable: true,
        children: [
        ],
      },
      {
        text: "数据结构",
        prefix: "data-structure/",
        icon: "people-network-full",
        collapsable: true,
        children: [
        ],
      },
      {
        text: "算法",
        prefix: "algorithms/",
        icon: "suanfaku",
        collapsable: true,
        children: [
        ],
      },
    ],
  },
  {
    text: "数据库",
    icon: "database",
    prefix: "database/",
    collapsable: true,
    children: [
      "basis",
      "character-set",
      {
        text: "MySQL",
        prefix: "mysql/",
        icon: "mysql",
        collapsable: true,
        children: [
          "mysql-questions-01",
          "a-thousand-lines-of-mysql-study-notes",
          "mysql-high-performance-optimization-specification-recommendations",
        ],
      },
      {
        text: "Redis",
        prefix: "redis/",
        icon: "redis",
        collapsable: true,
        children: [
          "redis-questions-01",
          {
            text: "重要知识点",
            icon: "important",
            collapsable: true,
            children: [
              "3-commonly-used-cache-read-and-write-strategies",
              "redis-memory-fragmentation",
            ],
          },
        ],
      },
    ],
  },
  {
    text: "开发工具",
    icon: "Tools",
    prefix: "tools/",
    collapsable: true,
    children: [
      {
        text: "IDEA",
        icon: "intellijidea",
        children: ["docker-intro", "docker-in-action"],
      },
    ],
  },
]);
