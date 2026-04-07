import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
    title: "Claude Code Study",
    description: "Claude Code 동작 원리 학습 노트",
    base: "/claude-code-study/",
    lang: "ko-KR",

    themeConfig: {
      nav: [
        { text: "Home", link: "/" },
        { text: "Context", link: "/context/" },
      ],

      sidebar: {
        "/context/": [
          {
            text: "Context",
            items: [
              { text: "개요", link: "/context/" },
              { text: "System Prompt", link: "/context/system-prompt" },
              { text: "CLAUDE.md", link: "/context/claude-md" },
              { text: "Memory", link: "/context/memory" },
              { text: "Compression", link: "/context/compression" },
            ],
          },
        ],
      },

      socialLinks: [
        { icon: "github", link: "https://github.com/yunhwane/claude-code-study" },
      ],

      outline: {
        level: [2, 3],
        label: "목차",
      },
    },

    mermaid: {},
  })
);
