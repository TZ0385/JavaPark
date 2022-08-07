import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "精选专栏",
    icon: "star",
    children: ["/java/java-se/", "/java/spring-boot/", "/dev-tools/idea"],
  },
  { text: "优质书籍", icon: "book", link: "https://github.com/cunyu1943/ebooks" },
  { text: "编程资源", icon: "folder", link: "https://github.com/cunyu1943/code-library" },
  { text: "RSS订阅", icon: "rss", link: "feed.json" },

]);
