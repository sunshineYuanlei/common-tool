const Guide = [{ text: "Get Started", link: "/guide/" }];

const functions = [Guide, { text: "getDevice", link: "/core/getDevice/" }];

const vueHooks = [functions, { text: "建设中", link: "" }];

const reactHooks = [functions, { text: "建设中", link: "" }];

const DefaultSideBar = [
  { text: "指导", items: Guide },
  { text: "工具函数集合", items: functions },
  { text: "Vue Hooks集合", items: vueHooks },
  { text: "React Hooks集合", items: reactHooks },
];

export default {
  base: "/common-tool/",
  title: "lei-common-tool",
  lang: "zh-CN",
  themeConfig: {
    logo: "/logo.png",
    lastUpdated: true,
    lasUtpdatedText: "最后修改时间",
    socialLinks: [{ icon: "github", link: "https://github.com/vmejs/vmejs" }],
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "函数集合", link: "/core/getDevice/" },
    ],
    // 侧边栏
    sidebar: {
      "/guide/": [
        {
          text: "",
          items: DefaultSideBar,
        },
      ],
      "/core/": [
        {
          text: "",
          items: DefaultSideBar,
        },
      ],
    },
  },
};
