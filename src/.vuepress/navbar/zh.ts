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
    text: "博客",
    icon: "blog",
    link: "https://cunyu1943.github.io",
  },
  {
    text: "订阅",
    icon: "rss",
    link: "/javapark-rss.xml"
  },
]);
