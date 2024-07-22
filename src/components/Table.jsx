import { Link } from "react-router-dom";
import { useTitle } from "../utils";

const articles = [
	{
		date: "2022/6/30",
		title: "為所有人打造產品：無障礙Accessibility是什麼？",
		topic: "無障礙入門",
		category: "",
		author: "Sam",
		urlurl: "https://medium.com/p/fb852ac32d42",
	},
	{
		date: "2022/7/14",
		title: "讓視障者遨遊虛擬世界：螢幕閱讀器是什麼？",
		topic: "無障礙入門",
		category: "",
		author: "Woody",
		urlurl: "https://medium.com/p/65dcd944f416",
	},
	{
		date: "2022/7/30",
		title:
			"低視能(low vision)使用者是誰？用什麼無障礙功能？會遇到什麼樣的問題？",
		topic: "無障礙入門",
		category: "",
		author: "Sam",
		urlurl: "https://medium.com/p/7abcd07b36e5",
	},
	{
		date: "2022/8/11",
		title: "疫情下的遠距辦公：一探視障者小伍在大企業資訊部門的工作情形！",
		topic: "人物",
		category: "身障者",
		author: "Woody",
		urlurl: "https://medium.com/p/d7314a769759",
	},
	{
		date: "2022/8/25",
		title: "視障者不缺席金融服務",
		topic: "人物",
		category: "身障者",
		author: "Kay",
		urlurl: "https://medium.com/p/b402cc736e81",
	},
	{
		date: "2022/9/9",
		title: "圖像驗證碼，與如何讓它更好的3個設計思路",
		topic: "設計",
		category: "概念",
		author: "Sam",
		urlurl: "https://medium.com/p/11666399b5cf",
	},
	{
		date: "2022/9/15",
		title: "鍵盤使用者的定錨器ー理解焦點就能在網路世界走磚步瓦",
		topic: "開發",
		category: "入門",
		author: "Woody",
		urlurl: "https://medium.com/p/62b8cdce3cc2",
	},
	{
		date: "2022/9/24",
		title: "給數位行銷人員的無障礙檢查清單",
		topic: "專欄",
		category: "實作",
		author: "阿樂",
		urlurl: "https://medium.com/p/4c210dbd6950",
	},
	{
		date: "2022/10/2",
		title:
			"移動無障礙-交通篇(上)：訪問視障者小安平日上班時的通勤過程？會使用google map導航嗎？",
		topic: "人物",
		category: "身障者",
		author: "Kay",
		urlurl: "https://medium.com/p/74216d48676f",
	},
	{
		date: "2022/10/9",
		title: "表單錯誤訊息設計❶：如何設計能讓更多人容易理解？",
		topic: "設計",
		category: "概念",
		author: "Sam",
		urlurl: "https://medium.com/p/cab8b18917f6",
	},
	{
		date: "2022/10/14",
		title: "用你的金手指打開一扇扇任意門",
		topic: "開發",
		category: "入門",
		author: "Woody",
		urlurl: "https://medium.com/p/6cb9e7b91ba5",
	},
	{
		date: "2022/10/23",
		title: "從無障礙設計志工拓展不同的設計可能性：專訪UX設計師木木",
		topic: "人物",
		category: "實踐伙伴",
		author: "Sam",
		urlurl: "https://medium.com/p/4ce808cd6bf7",
	},
	{
		date: "2022/10/30",
		title: "針對無障礙設計的變革管理系列文章 Part 1",
		topic: "專欄",
		category: "概念",
		author: "阿樂",
		urlurl: "https://medium.com/p/4e85d267efac",
	},
	{
		date: "2022/11/6",
		title:
			"移動無障礙-交通篇(下)：訪問視障者小安在台鐵與高鐵訂票流程中會遇到什麼問題？",
		topic: "人物",
		category: "身障者",
		author: "Kay",
		urlurl: "https://medium.com/p/e383428db65a",
	},
	{
		date: "2022/11/13",
		title: "巧用 tabindex 讓你的 UI 更鍵盤友善",
		topic: "開發",
		category: "入門",
		author: "Woody",
		urlurl: "https://medium.com/p/ad3d087e26fe",
	},
	{
		date: "2022/11/20",
		title: "表單錯誤訊息設計❷：註冊表單交互case study",
		topic: "設計",
		category: "概念",
		author: "Sam",
		urlurl: "https://medium.com/p/4f3c20cf4c65",
	},
	{
		date: "2022/11/27",
		title: "點字二三世❶：認識點字",
		topic: "專欄",
		category: "概念",
		author: "鵬安",
		urlurl: "https://medium.com/p/c354078b5dd",
	},
	{
		date: "2022/12/4",
		title: "改善數位辦公產品的Accessibility：打造每個人都可以操作的設定畫面",
		topic: "專欄",
		category: "實作",
		author: "Sam",
		urlurl: "https://medium.com/p/b260e550c521",
	},
	{
		date: "2022/12/11",
		title: "針對無障礙設計的變革管理系列文章與閱讀筆記 Part 2",
		topic: "專欄",
		category: "實作",
		author: "阿樂",
		urlurl: "https://medium.com/p/8bab5e0fa37b",
	},
	{
		date: "2022/12/18",
		title: "讓視覺元素富含文字訊息：可訪問名稱與描述",
		topic: "開發",
		category: "入門",
		author: "Woody",
		urlurl: "https://medium.com/p/960501355ced",
	},
	{
		date: "2022/12/25",
		title: "點字二三世❷：紙本點字的製作",
		topic: "專欄",
		category: "概念",
		author: "鵬安",
		urlurl: "https://medium.com/p/afcd1255cda4",
	},
	{
		date: "2023/1/1",
		title: "在世界人流量最多的大車站，視障者如何不迷失方向？",
		topic: "人物",
		category: "身障者",
		author: "Kay",
		urlurl: "https://medium.com/p/bd384719f1b3",
	},
	{
		date: "2023/1/8",
		title: "「想要成為具公益性的設計師」：專訪UX設計師Shirley",
		topic: "人物",
		category: "實踐伙伴",
		author: "Sam",
		urlurl: "https://medium.com/p/cef9540db763",
	},
	{
		date: "2023/1/15",
		title: "針對無障礙設計的變革管理系列文章與閱讀筆記 Part 3",
		topic: "專欄",
		category: "實作",
		author: "阿樂",
		urlurl: "https://medium.com/p/6d038b84d0",
	},
	{
		date: "2023/1/22",
		title: "先讓我掃一眼標題：Heading 的易用性",
		topic: "設計",
		category: "概念",
		author: "ray",
		urlurl: "https://medium.com/p/9b2ab380ff86",
	},
	{
		date: "2023/1/27",
		title:
			"新的一年，做一個「知識生產者」：如何寫一篇知識型文章，分享你的所知所學？",
		topic: "專欄",
		category: "其他",
		author: "Sam",
		urlurl: "https://medium.com/p/9407a0158cfd",
	},
	{
		date: "2023/1/29",
		title:
			"PlayStation 5推出可高度自訂的無障礙控制器套組｜使用 ChatGPT 偵測與修補 Accessibility 問題的 AI 工具",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/71854a58251a",
	},
	{
		date: "2023/2/5",
		title: "點字二三世❸：認識點字顯示器",
		topic: "專欄",
		category: "概念",
		author: "鵬安",
		urlurl: "https://medium.com/p/ea48fc213592",
	},
	{
		date: "2023/2/12",
		title: "先讓我掃一眼標題❷：Heading 如何設計與交付？（實例講解）",
		topic: "設計",
		category: "概念",
		author: "ray",
		urlurl: "https://medium.com/p/468ee8c43f2b",
	},
	{
		date: "2023/2/19",
		title: "碼農的好工具 ChatGPT 開箱：高效打造無障礙的頁籤(Tabs)功能",
		topic: "開發",
		category: "實作",
		author: "Woody",
		urlurl: "https://medium.com/p/f472a1475d75",
	},
	{
		date: "2023/2/26",
		title:
			"索尼推出弱視者專用相機｜亞馬遜合作改善電子耳使用者的觀影體驗｜為 ADHD 使用者做數位設計｜無障礙且更安全的輸入PIN碼｜輔助視障者用語言互動方式閱讀圖表",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/d76f4c1659a0",
	},
	{
		date: "2023/3/5",
		title: "點字二三世❹：點字顯示器有什麼更多功能？",
		topic: "專欄",
		category: "概念",
		author: "鵬安",
		urlurl: "https://medium.com/p/c376f7f95e33",
	},
	{
		date: "2023/3/12",
		title: "與全盲工程師一起開拓 Accessibility 的未來",
		topic: "人物",
		category: "實踐伙伴",
		author: "Sam",
		urlurl: "https://medium.com/p/b57d93d745ab",
	},
	{
		date: "2023/3/19",
		title: "可感知的通知訊息：通知中心",
		topic: "設計",
		category: "概念",
		author: "于晴",
		urlurl: "https://medium.com/p/4153495d547c",
	},
	{
		date: "2023/3/26",
		title:
			"ChatGPT4 虛擬志工｜遊戲《宇宙高中》的無障礙功能｜Microsoft發表Accessibility Assistant｜無障礙的Power BI 報表｜數位無障礙會議 axe-con",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/b5b6f8de42f4",
	},
	{
		date: "2023/4/2",
		title: "隱藏在網頁中的 101：讓頁面區域井然有序的地標設計",
		topic: "開發",
		category: "概念",
		author: "Woody",
		urlurl: "https://medium.com/p/7df741dc2a0a",
	},
	{
		date: "2023/4/9",
		title: "什麼是口述影像？從規劃約會行程說起",
		topic: "專欄",
		category: "其他",
		author: "宜柔",
		urlurl: "https://medium.com/p/98119fd1c194",
	},
	{
		date: "2023/4/16",
		title: "Encore x 無障礙設計：「規範與彈性間的平衡」",
		topic: "人物",
		category: "實踐伙伴",
		author: "阿樂",
		urlurl: "https://medium.com/p/d4f700d70df4",
	},
	{
		date: "2023/4/23",
		title: "幫你更輕鬆做無障礙設計的Figma工具五選（2023年最新版）",
		topic: "設計",
		category: "實作",
		author: "Sam",
		urlurl: "https://medium.com/p/fa0b6660f164",
	},
	{
		date: "2023/4/30",
		title:
			"與藝術結合的視障者新道路｜《華盛頓郵》報釋出最新無障礙設計指引｜Wise設計系統重新包裝｜哈佛大學更新無障礙政策｜Highcharts繪圖套件發布Python toolkit",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/b05a18d54d72",
	},
	{
		date: "2023/5/7",
		title: "隱藏在頁面中的 101：讓區域佈局井然有序的地標開發（下）",
		topic: "開發",
		category: "概念",
		author: "Woody",
		urlurl: "https://medium.com/p/eb9c1c1e66",
	},
	{
		date: "2023/5/14",
		title: "螢幕閱讀器檢測無障礙，自己來！(一)",
		topic: "無障礙入門",
		category: "",
		author: "鵬安",
		urlurl: "https://medium.com/p/afa465e8829c",
	},
	{
		date: "2023/5/21",
		title: "敲開圖表大門，要看、用聽或觸摸？",
		topic: "專欄",
		category: "實作",
		author: "又建",
		urlurl: "https://medium.com/p/71f9f5b87339",
	},
	{
		date: "2023/5/28",
		title:
			"iOS 17 新無障礙功能釋出 | Adobe 擴展PDF無障礙功能 | 《Forza Motorsport》視障玩家享受賽車遊戲的樂趣 |「Project Gameface」無需手部操作的遊戲滑鼠…",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/a2ac5878c82c",
	},
	{
		date: "2023/6/4",
		title: "口述影像的多元打開方式",
		topic: "專欄",
		category: "其他",
		author: "宜柔",
		urlurl: "https://medium.com/p/aeb5029388bb",
	},
	{
		date: "2023/6/11",
		title: "圖表大門上了鎖，很重要嗎？",
		topic: "專欄",
		category: "實作",
		author: "又建",
		urlurl: "https://medium.com/p/17e39bbb237c",
	},
	{
		date: "2023/6/18",
		title: "Accessibility Tree：細心的哉種打造無障礙頁面",
		topic: "開發",
		category: "入門",
		author: "Woody",
		urlurl: "https://medium.com/p/e2005a5d61ae",
	},
	{
		date: "2023/6/25",
		title:
			"為何身障人士加入 Reddit 的「Blackout」抗議？｜GIPHY 宣布開始產出 GIF 圖檔替代文字",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/e27fb5910f4b",
	},
	{
		date: "2023/7/2",
		title: "「每一部口述影像都像是我們的孩子」：訪談日本口述影像製作團隊",
		topic: "專欄",
		category: "其他",
		author: "Kay",
		urlurl: "https://medium.com/p/e8fd0eedf643",
	},
	{
		date: "2023/7/9",
		title: "螢幕閱讀器檢測無障礙，自己來！(二)",
		topic: "開發",
		category: "實作",
		author: "鵬安",
		urlurl: "https://medium.com/p/a3b7eb0ef35",
	},
	{
		date: "2023/7/16",
		title: "拆解圖表大門，零件有哪些？",
		topic: "專欄",
		category: "實作",
		author: "又建",
		urlurl: "https://medium.com/p/691463b3c826",
	},
	{
		date: "2023/7/23",
		title: "從受助到助人：視障者如何學習數學？",
		topic: "人物",
		category: "實踐伙伴",
		author: "Kay",
		urlurl: "https://medium.com/p/cbf266d6f9b6",
	},
	{
		date: "2023/7/30",
		title:
			"新 WAI-ARIA 1.2 版規範 | 你為什麼打開 CC 字幕？| PS5 Access 控制擴充更多功能 | 圖表語音模型的活化 |語音朗讀福祉指南 | LG電子打造共融生活",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/53cd067b0862",
	},
	{
		date: "2023/8/6",
		title: "克服數位默劇：聽覺障礙如何感知網路上的聲音",
		topic: "無障礙入門",
		category: "",
		author: "亭臻",
		urlurl: "https://medium.com/p/59da022c2ace",
	},
	{
		date: "2023/8/13",
		title: "我看到的，是你看到的嗎？",
		topic: "設計",
		category: "概念",
		author: "Sam",
		urlurl: "https://medium.com/p/1b1b712fd6d5",
	},
	{
		date: "2023/8/20",
		title: "客製 Accessibility tree，從認識 ARIA 開始",
		topic: "開發",
		category: "入門",
		author: "Woody",
		urlurl: "https://medium.com/p/8d92fded7a8",
	},
	{
		date: "2023/8/27",
		title:
			"數位發展部推動「手語視訊轉譯服務（Video Relay Service, VRS）」｜如何設計容易辨識的圖片上文字？",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/9237e49bce76",
	},
	{
		date: "2023/9/3",
		title: "隱形的障礙：低視能障礙者如何在工作和生活中，帶來無障礙的視野",
		topic: "人物",
		category: "身障者",
		author: "Jo",
		urlurl: "https://medium.com/p/a991227b5eec",
	},
	{
		date: "2023/9/10",
		title: "螢幕閱讀器檢測無障礙，自己來！(三)",
		topic: "開發",
		category: "實作",
		author: "鵬安",
		urlurl: "https://medium.com/p/8ff1f6691c29",
	},
	{
		date: "2023/9/17",
		title: "用聲音看電影：口述影像製作三步驟",
		topic: "專欄",
		category: "其他",
		author: "宜柔",
		urlurl: "https://medium.com/p/775ddc8692b0",
	},
	{
		date: "2023/9/24",
		title:
			"《Starfield》遊戲推出友善閱讀障礙的字體 | 為高齡族群設計數位產品 | 日本「AI行李箱」導航機器人 | 首爾地鐵路線 40 年來首次改變 |可訪問性為核心的資料導航架構",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/b80db2178812",
	},
	{
		date: "2023/10/1",
		title: "不論是誰，都能進電影院享受觀影的快樂",
		topic: "人物",
		category: "實踐伙伴",
		author: "Kay",
		urlurl: "https://medium.com/p/8a8eb3d6b52d",
	},
	{
		date: "2023/10/8",
		title: "圖表大門升級，請問你聽過可訪問性嗎？",
		topic: "專欄",
		category: "實作",
		author: "又建",
		urlurl: "https://medium.com/p/fffc03812918",
	},
	{
		date: "2023/10/15",
		title:
			"獨特視角帶來的可能性: 科技教育界項目經理，從發現、瞭解到突破閱讀障礙的歷程",
		topic: "人物",
		category: "身障者",
		author: "Jo",
		urlurl: "https://medium.com/p/44387ca0c85a",
	},
	{
		date: "2023/10/22",
		title: "客製 Accessibility tree，從認識 ARIA 開始(下)",
		topic: "開發",
		category: "入門",
		author: "Woody",
		urlurl: "https://medium.com/p/92d2e6d6874a",
	},
	{
		date: "2023/10/29",
		title:
			"Sony 推出以「無障礙設計」為唯一主題的產品發表會 | Google Map 新功能解決實體無障礙的阻礙 | 英國民航局針對該國航空公司的數位無障礙狀況進行評估 | AI…",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/a1d2ead3d6c4",
	},
	{
		date: "2023/11/5",
		title: "沒有滑鼠和鍵盤，依然能遨遊數位世界！",
		topic: "無障礙入門",
		category: "",
		author: "亭臻",
		urlurl: "https://medium.com/p/c1edc5040697",
	},
	{
		date: "2023/11/12",
		title: "理解 Accessible components: Dialog 篇",
		topic: "開發",
		category: "概念",
		author: "Kelly/Woody",
		urlurl: "https://medium.com/p/195f2338f42f",
	},
	{
		date: "2023/11/19",
		title: "螢幕閱讀器檢測無障礙，自己來！(四)",
		topic: "開發",
		category: "實作",
		author: "鵬安",
		urlurl: "https://medium.com/p/bb6a528616dc",
	},
	{
		date: "2023/11/26",
		title:
			"AI生成口述影像 | 美國零售商未選用良好支援輔助功能方案，觸控支付成視障者購物障礙 | PlayStation Access控制器無障礙顧問焦點影片和設定教學 |…",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/dcbc5856b41d",
	},
	{
		date: "2023/12/3",
		title:
			"一天之間，從看得見到看不見: 社企培訓師從中途失明到探索新方向，她如何運用自身經歷和專業，倡導數位平權",
		topic: "人物",
		category: "身障者",
		author: "Jo",
		urlurl: "https://medium.com/p/c2be8e49f79a",
	},
	{
		date: "2023/12/10",
		title: "缺的就是你－口述影像的現實考驗",
		topic: "專欄",
		category: "其他",
		author: "宜柔",
		urlurl: "https://medium.com/p/a85a0e74d24d",
	},
	{
		date: "2023/12/17",
		title: "Dialog 設計篇：讓你的對話框使用者體驗更好的三個設計考量點",
		topic: "設計",
		category: "概念",
		author: "Sam",
		urlurl: "https://medium.com/p/3a213eaeeb32",
	},
	{
		date: "2023/12/24",
		title: "使用 ARIA Live Regions 讓重要資訊不漏接 (上)",
		topic: "開發",
		category: "概念",
		author: "Kelly/Woody",
		urlurl: "https://medium.com/p/8994c375bc1e",
	},
	{
		date: "2023/12/31",
		title: "創新無障礙QR碼｜「聆聽」宇宙的新技術",
		topic: "時事",
		category: "",
		author: "Sam",
		urlurl: "https://medium.com/p/9b08eeb550c1",
	},
	{
		date: "2024/1/7",
		title: "投票無障礙：這一票，來自每一位公民",
		topic: "專欄",
		category: "其他",
		author: "亭臻",
		urlurl: "https://medium.com/p/4deac879b7f0",
	},
	{
		date: "2024/1/14",
		title: "無障礙設計讓產品思維更全面",
		topic: "人物",
		category: "實踐伙伴",
		author: "Jo",
		urlurl: "https://medium.com/p/2128300bec92",
	},
	{
		date: "2024/1/21",
		title: "活用手機上的螢幕閱讀器(一)",
		topic: "開發",
		category: "實作",
		author: "鵬安",
		urlurl: "https://medium.com/p/b8d521c5a2ed",
	},
	{
		date: "2024/1/28",
		title: "為視障者創造無障礙支付環境 | 企業網頁無障礙化",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/cd0fe5372b8e",
	},
	{
		date: "2024/2/4",
		title: "使用 ARIA Live Regions 讓重要資訊不漏接(下)",
		topic: "開發",
		category: "概念",
		author: "Kelly/Woody",
		urlurl: "https://medium.com/p/ddb1f8052905",
	},
	{
		date: "2024/2/11",
		title: "什麼是認知障礙？更容易理解文字的N種方法",
		topic: "專欄",
		category: "概念",
		author: "亭臻",
		urlurl: "https://medium.com/p/cbdc1c552319",
	},
	{
		date: "2024/2/18",
		title: "活用手機上的螢幕閱讀器 (二)",
		topic: "開發",
		category: "實作",
		author: "鵬安",
		urlurl: "https://medium.com/p/be5d822cf289",
	},
	{
		date: "2024/2/25",
		title: "AI活用於無障礙領域| 美國 GSA 發佈無障礙改善建議與報告",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/0c482c2907f9",
	},
	{
		date: "2024/3/3",
		title:
			"開發無障礙專案，創造個人技能亮點：前端工程師 Jamie 的職涯探索與 a11y 啟發",
		topic: "人物",
		category: "實踐伙伴",
		author: "Kelly",
		urlurl: "https://medium.com/p/148ffa61c923",
	},
	{
		date: "2024/3/10",
		title: "焦點無障礙 — 管理焦點的行為與轉移",
		topic: "開發",
		category: "概念",
		author: "Woody",
		urlurl: "https://medium.com/p/62404f74fb59",
	},
	{
		date: "2024/3/17",
		title: "「無障礙法規」是什麼？",
		topic: "專欄",
		category: "實作",
		author: "Kay",
		urlurl: "https://medium.com/p/a1b667fcf59c",
	},
	{
		date: "2024/3/24",
		title: "為螢幕閱讀器設計，打造看得懂也聽得懂的 UI 元件",
		topic: "設計",
		category: "概念",
		author: "于晴",
		urlurl: "https://medium.com/p/e99ab66b8d55",
	},
	{
		date: "2024/3/31",
		title:
			"視障者Apple Vision Pro使用心得|WebAIM螢幕閱讀器調查報告|可口可樂推出無障礙自動販賣機服務",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/8e9858ca820e",
	},
	{
		date: "2024/4/7",
		title: "建造一個擁抱高齡者的無障礙數位環境",
		topic: "專欄",
		category: "概念",
		author: "亭臻",
		urlurl: "https://medium.com/p/88c21dc37839",
	},
	{
		date: "2024/4/14",
		title: "活用手機上的螢幕閱讀器 (三)",
		topic: "開發",
		category: "實作",
		author: "鵬安",
		urlurl: "https://medium.com/p/2e84dd5a136d",
	},
	{
		date: "2024/4/21",
		title: "打造無障礙為核心的開發思維",
		topic: "人物",
		category: "實踐伙伴",
		author: "Jo",
		urlurl: "https://medium.com/p/05b6e434ef2d",
	},
	{
		date: "2024/4/28",
		title:
			"日本遊戲無障礙性協會（GAAJ）致力於推動讓身障者也能享受遊戲的社會| AI不會解決無障礙問題 |從實習生到無障礙倡議者",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/72c77e8b7486",
	},
	{
		date: "2024/5/5",
		title: "焦點的無障礙 — 焦點可見與樣式篇",
		topic: "開發",
		category: "概念",
		author: "Kelly",
		urlurl: "https://medium.com/p/de9d8b9481fe",
	},
	{
		date: "2024/5/12",
		title: "螢幕閱讀器的隱藏歷史-三代視障程式設計師們的開發故事（上）",
		topic: "人物",
		category: "實踐伙伴",
		author: "Woody",
		urlurl: "https://medium.com/p/33beab719d57",
	},
	{
		date: "2024/5/19",
		title: "螢幕閱讀器的隱藏歷史-三代視障程式設計師們的開發故事（下）",
		topic: "人物",
		category: "實踐伙伴",
		author: "Woody",
		urlurl: "https://medium.com/p/d162f5a84a92",
	},
	{
		date: "2024/5/26",
		title: "Google與蘋果發布無障礙新功能｜豐田汽車展示移動式無障礙廁所",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/0b02cf97c634",
	},
	{
		date: "2024/6/2",
		title: "如何在新創產品中制定無障礙設計策略？",
		topic: "設計",
		category: "實作",
		author: "Sam",
		urlurl: "https://medium.com/p/b869c459d10a",
	},
	{
		date: "2024/6/9",
		title: "學習無障礙-課業篇：在多元課程的大學裡，視障者運用什麼方式學習？",
		topic: "人物",
		category: "身障者",
		author: "于晴",
		urlurl: "https://medium.com/p/159915cc0aaa",
	},
	{
		date: "2024/6/16",
		title: "遊戲的無障礙：讓每個人都能享受電玩的樂趣",
		topic: "專欄",
		category: "概念",
		author: "亭臻",
		urlurl: "https://medium.com/p/6bcfd181142b",
	},
	{
		date: "2024/6/23",
		title:
			"為視障者打造無障礙的數學世界：軟體工程師 Woody 與 Access8Math 的開發旅程",
		topic: "人物",
		category: "實踐伙伴",
		author: "Kelly",
		urlurl: "https://medium.com/p/ba30170c52ea",
	},
	{
		date: "2024/6/30",
		title: "村報",
		topic: "時事",
		category: "",
		author: "大家",
		urlurl: "https://medium.com/p/18971d1bb206",
	},
	{
		date: "2024/7/7",
		title:
			"無障礙中文校對利器：WordBridge 結合 AI 技術，提升視障者文字工作生產力",
		topic: "開發",
		category: "實作",
		author: "Woody",
		urlurl: "https://medium.com/p/351003f139bb",
	},
	{
		date: "2024/7/14",
		title: "學習無障礙-行動與社團篇：在多樣的大學裡，視障者如何參與活動？",
		topic: "人物",
		category: "身障者",
		author: "亭臻",
		urlurl: "https://medium.com/p/83039d69d9da",
	},
	{
		date: "2024/7/21",
		title: "無障礙網頁開發：表單基礎概念與實作，以 React 為例",
		topic: "開發",
		category: "實作",
		author: "Kelly",
		urlurl: "https://medium.com/p/1e3c645be866",
	},
];

export default function Table() {
	useTitle("表格 | A11y Demo");

	return (
		<div className="container mx-auto">
			<div className="absolute top-5 left-5 flex gap-5">
				<Link to="/">返回首頁</Link>
			</div>
			<div className="pt-8 px-4 sm:px-6 lg:px-8 bg-white lg:rounded-xl mt-16 lg:my-16 lg:w-[1280px] lg:mx-auto lg:max-h-[80vh] lg:overflow-y-auto">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1
							id="table-title"
							className="text-base font-semibold leading-6 text-gray-900"
						>
							A11y 新手村文章目錄
						</h1>
					</div>
				</div>
				<div className="mt-8 flow-root">
					<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
							<table
								aria-labelledby="table-title"
								className="min-w-full divide-y divide-gray-300"
							>
								<thead>
									<tr>
										<th
											scope="col"
											className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
										>
											標題
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>
											日期
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>
											主題
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>
											分類
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>
											作者
										</th>
										<th
											scope="col"
											className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>
											網址
										</th>
									</tr>
								</thead>
								<tbody className="bg-white">
									{articles.map((article) => (
										<tr key={article.date} className="even:bg-gray-50">
											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3 max-w-[30ch] truncate">
												{article.title}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{article.date}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{article.topic}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{article.category}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{article.author}
											</td>
											<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-3">
												<a
													href={article.urlurl}
													className="text-indigo-600 hover:text-indigo-900"
												>
													{article.urlurl}
												</a>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
