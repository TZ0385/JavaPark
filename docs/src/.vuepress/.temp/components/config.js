import { defineClientConfig } from "@vuepress/client";
import { h } from "vue";

import { useStyleTag } from "/Users/cunyu/Github/JavaPark/docs/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import FontIcon from "/Users/cunyu/Github/JavaPark/docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "/Users/cunyu/Github/JavaPark/docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "/Users/cunyu/Github/JavaPark/docs/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import CodePen from "/Users/cunyu/Github/JavaPark/docs/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import PDF from "/Users/cunyu/Github/JavaPark/docs/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import StackBlitz from "/Users/cunyu/Github/JavaPark/docs/node_modules/vuepress-plugin-components/lib/client/components/StackBlitz.js";
import VideoPlayer from "/Users/cunyu/Github/JavaPark/docs/node_modules/vuepress-plugin-components/lib/client/components/VideoPlayer.js";
import YouTube from "/Users/cunyu/Github/JavaPark/docs/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import BackToTop from "/Users/cunyu/Github/JavaPark/docs/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("FontIcon", FontIcon);
    app.component("Badge", Badge);
    app.component("BiliBili", BiliBili);
    app.component("CodePen", CodePen);
    app.component("PDF", PDF);
    app.component("StackBlitz", StackBlitz);
    app.component("VideoPlayer", VideoPlayer);
    app.component("YouTube", YouTube);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/c/font_3334252_cs9cfhq8gl9.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
