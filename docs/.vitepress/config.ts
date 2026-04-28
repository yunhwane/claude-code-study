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
        { text: "Architecture", link: "/architecture/" },
        { text: "Deep Dive", link: "/deep-dive/" },
      ],

      sidebar: {
        "/architecture/": [
          {
            text: "Architecture",
            items: [
              { text: "개요", link: "/architecture/" },
              { text: "System Prompt", link: "/architecture/system-prompt" },
              { text: "CLAUDE.md", link: "/architecture/claude-md" },
              { text: "Memory", link: "/architecture/memory" },
              { text: "Compression", link: "/architecture/compression" },
            ],
          },
        ],
        "/deep-dive/": [
          {
            text: "Deep Dive",
            items: [
              { text: "개요", link: "/deep-dive/" },
              { text: "Harness", link: "/deep-dive/harness" },
              { text: "Skill Creator", link: "/deep-dive/skill-creator" },
              { text: "Mattpocock Skills", link: "/deep-dive/mattpocock-skills" },
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
