import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // {
  //   text: "案例",
  //   icon: "discover",
  //   link: "/demo/"
  // },
  // {
  //   text: "指南",
  //   icon: "creative",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Demo",
  //       icon: "creative",
  //       prefix: "bar/",
  //       children: [
  //         "baz",
  //         {
  //           text: "...",
  //           icon: "more",
  //           link: ""
  //         }
  //       ],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "config",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "more", link: "" }],
  //     },
  //   ],
  // },
  {
    text: "Java",
    icon: "java",
    link: "/md/java/",
  },

  {
    text: "优质书籍",
    icon: "book",
    link: "https://github.com/cunyu1943/ebooks",
  },

  {
    text: "效率神器",
    icon: "toolbox",
    link: "https://www.yuque.com/cunyu1943/nav/",
  },

  {
    text: "更新日志",
    icon: "timeline",
    link: "/timeline",
  },
]);
