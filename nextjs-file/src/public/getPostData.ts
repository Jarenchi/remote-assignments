interface Data {
  title: string;
  likeCount: number;
  sections: Section[];
}

interface Section {
  title: string;
  content: SectionContent;
}

interface SectionContent {
  question: string;
  explanation?: string;
  features?: Feature[];
  hooks?: {
    useState: HookDetails;
    useEffect: HookDetails;
  };
  rendering?: {
    CSR: RenderingType;
    SSR: RenderingType;
    Nextjs: NextjsDetails;
  };
}

interface Feature {
  id: number;
  content: string;
}

interface HookDetails {
  title: string;
  explanation: string;
  sideEffect?: string;
}

interface RenderingType {
  title: string;
  explanation: string;
  pros: string[];
  cons: string[];
}

interface NextjsDetails {
  title: string;
  explanation: string;
}

const data: Data = {
  title: "This is a sample post.",
  likeCount: 5,
  sections: [
    {
      title: "Node.js",
      content: {
        question: "Why do we use Node.js? What does it do?",
        explanation:
          "Node.js 是一個 Javascript 的執行環境，以V8引擎為核心。原本 JavaScript只能在瀏覽器上執行，但透過 Node.js 能夠在伺服器端運行。其他常見的 JavaScript runtime 包含 Bun 和 Deno",
      },
    },
    {
      title: "CSS-in-JS",
      content: {
        question:
          "Explain the Styled-Component you made. What's CSS-in-JS, and how does it help compared to regular CSS?",
        explanation: "CSS-in-JS 是一種將 CSS 直接嵌入到 JavaScript 的方法，跟 regular CSS 相比，有以下這些好處",
        features: [
          {
            id: 1,
            content:
              "解決 CSS 重複命名的問題: regular CSS 要避免重複命名和覆蓋樣式，但透過 CSS-in-JS 每個樣式都在組件的範圍內",
          },
          {
            id: 2,
            content: "開發容易: 不用切換檔案更容易理解和維護",
          },
          {
            id: 3,
            content: "動態樣式: 可以傳入 props 來產生不同的樣式",
          },
        ],
      },
    },
    {
      title: "useState and useEffect",
      content: {
        question: "Discuss useState and useEffect. How did you use them?",
        explanation: "它們都是 React 中的 hooks，hooks 只能在 component function 或 custom hook 中最上層使用。",
        hooks: {
          useState: {
            title: "useState",
            explanation:
              "如果 UI 上的資料會改變，就要用到 useState。useState 會 return 一個 array 包含兩個元素，第一個元素是當前狀態值，第二個元素是更新它的函數",
          },
          useEffect: {
            title: "useEffect",
            explanation:
              "useEffect 的作用是處理副作用，組件渲染完後才會呼叫 useEffect 內的 function。useEffect 包含要執行的 function 和一個 array (dependencies)。dependencies 是一個可選的參數，它用於指定需要被監聽的狀態或者變數，只有在這些狀態或變數發生變化時，才會觸發 useEffect。如果 dependencies 是空的，useEffect 只會運行一次",
            sideEffect: "副作用: 與渲染結果無關的操作，例如設置計時器、發送網路請求、設置訂閱、操作 DOM 、事件監聽等等",
          },
        },
      },
    },
    {
      title: "Client-Side Rendering vs. Server-Side Rendering",
      content: {
        question:
          "Describe Client-Side Rendering vs. Server-Side Rendering. How did you achieve Server-Side Rendering in Next.js? Think about getServerSideProps",
        rendering: {
          CSR: {
            title: "Client-Side Rendering",
            explanation: "頁面渲染透過瀏覽器端的 JavaScript 來完成。",
            pros: ["頁面的使用者互動較好，頁面首次載入後互動部分可以迅速完成，而不需要每次都向伺服器發送請求"],
            cons: ["SEO較差: 搜索引擎無法解析JavaScript生成的內容", "載入的速度較慢:因為需要下載並執行JavaScript代碼"],
          },
          SSR: {
            title: "Server-Side Rendering",
            explanation: "伺服器收到使用者的請求之後，在伺服器端生成完整的 HTML，再發送給瀏覽器。",
            pros: [
              "需要的 JavaScript 較少: 大部分頁面內容已經在伺服器端生成",
              "SEO較好: 搜索引擎可以更容易地理解和索引網頁內容，有助於提高搜索引擎排名。",
            ],
            cons: [
              "TTFB（Time To First Byte）較慢: 因為伺服器需要在用戶收到HTML之前生成頁面 ",
              "互動性體驗較差: 若使用者互動需要重新向伺服器發送請求以獲取更新的內容",
            ],
          },
          Nextjs: {
            title: "Next.js",
            explanation:
              "Next.js 是一個 server side render 的 React 框架，當使用 getServerSideProps 只會在伺服器端運行並不會在瀏覽器執行，可以透過 getServerSideProps 從 API、數據庫或其他來源獲取數據，然後當作 props 傳給 component。",
          },
        },
      },
    },
    {
      title: "Coding styles",
      content: {
        question: "Which coding styles did you follow when coding",
        explanation: "我使用 airbnb 的 coding styles，並透過 eslint 制定其他自己的規則",
      },
    },
  ],
};

export { data };
