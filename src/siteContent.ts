export type ProjectLink = {
  href: string;
  label: string;
  type: "demo" | "github";
  internal?: boolean;
};

export type Project = {
  title: string;
  techStack: string[];
  description: string[];
  links: ProjectLink[];
};

export type Contact = {
  email: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "產品溯源系統（Product Traceability DApp）",
    techStack: ["Solidity", "ethers.js", "React", "MetaMask"],
    description: [
      "基於 Ethereum Sepolia 測試網的去中心化應用程式，透過智能合約實作商品登記、查詢與角色權限管理。",
    ],
    links: [
      { href: "https://a3668.github.io/dapp-test/", label: "線上 Demo", type: "demo" },
      { href: "https://github.com/a3668/dapp-test", label: "GitHub 原始碼", type: "github" },
    ],
  },
  {
    title: "CHIP-8 Emulator",
    techStack: ["C", "SDL2"],
    description: [
      "使用 C 與 SDL2 實作的 CHIP-8 模擬器，完成 opcode 解碼執行、鍵盤輸入處理與畫面渲染功能。",
    ],
    links: [
      { href: "https://github.com/a3668/chip8-c", label: "GitHub 原始碼", type: "github" },
    ],
  },
  {
    title: "Flappy Bird",
    techStack: ["JavaScript", "Canvas"],
    description: [
      "以 JavaScript 與 Canvas 製作的小遊戲，包含重力、碰撞判定、分數計算與重新開始流程。",
    ],
    links: [
      { href: "/bird", label: "前往遊戲", type: "demo", internal: true },
    ],
  },
];

export const aboutTexts: string[] = [
  "我叫 HUANG TZU YAO。",
  "我目前就讀資工系三年級，平常持續練習程式設計、網頁開發與 Swift 開發，對把想法實作成可操作的作品特別有興趣。",
  "目前透過個人專案累積開發經驗，持續提升問題分析、功能實作與技術整合能力，並把學習成果整理成可展示的作品。",
];

export const skillTexts: string[] = [
  "主要使用 C、C++、JavaScript 與 Swift，並持續學習前端開發、區塊鏈應用與系統實作。",
  "具備 HTML、CSS、ethers.js、SDL2 與 Solidity 的實作經驗。",
];

export const contact: Contact = {
  email: "oxides.10.pippin@icloud.com",
  github: "https://github.com/a3668",
};
