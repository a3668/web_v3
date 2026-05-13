# 個人作品網站

網站網址：https://a3668.github.io/web_v3/

這是一個使用 React 與 Vite 建立的個人作品網站，主要用來展示前端頁面架構、作品集整理方式，以及以 Canvas 實作的小型互動遊戲。專案採用單頁應用程式架構，透過前端路由切換不同頁面，並將網站內容資料集中管理，方便後續維護與擴充。

## 技術棧

- Vite：前端開發與建置工具
- React：網站 UI 與元件架構
- React Router：前端頁面路由管理
- TypeScript：主要頁面、元件與內容資料的型別化開發
- JavaScript：Canvas 小遊戲保留原本的互動邏輯
- CSS：版面配置、響應式樣式與視覺設計
- Canvas：Flappy Bird 小遊戲畫面繪製與互動實作

## 架構重點

- 使用 `HashRouter` 管理前端路由，適合部署在靜態網站環境。
- 頁面依功能拆分為首頁、關於頁、作品集、聯絡頁與遊戲頁。
- 作品、技能與聯絡資料集中在 `src/siteContent.ts`，降低頁面元件中的硬編碼內容。
- UI 以可重用元件組成，例如導覽列、作品卡片與頁面區塊。
- Flappy Bird 遊戲整合進 React 頁面，使用 Canvas 處理繪圖、碰撞判定、分數計算與重新開始流程。

## 功能模組

- 首頁：呈現網站入口、簡介文字與主要導覽按鈕。
- 關於頁：整理自我介紹與技能描述。
- 作品集：以卡片形式展示專案，包含技術標籤、Demo 連結與原始碼連結。
- 聯絡頁：提供外部連結與聯絡入口。
- Flappy Bird：內嵌 Canvas 小遊戲，包含倒數開始、鍵盤控制、障礙物生成、碰撞判定與遊戲結束畫面。

## 作品展示

- 產品溯源 DApp：使用 Solidity、ethers.js、React 與 MetaMask 製作的區塊鏈應用。
- CHIP-8 Emulator：使用 C 與 SDL2 實作的模擬器專案。
- Flappy Bird：使用 JavaScript 與 Canvas 製作的瀏覽器小遊戲。
