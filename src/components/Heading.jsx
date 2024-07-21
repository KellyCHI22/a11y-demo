import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";
import { useTitle } from "../utils";

export default function Heading() {
	useTitle("定位點 | A11y Demo");
	return (
		<div className="container mx-auto">
			<div className="absolute top-5 left-5 flex gap-5">
				<Link to="/">Back</Link>
			</div>
			<Tabs
				defaultValue="original"
				className="mt-16 lg:my-16 lg:w-[1000px] lg:mx-auto"
			>
				<TabsList className="my-5 grid w-full grid-cols-2 lg:mb-5">
					<TabsTrigger value="original">原始版</TabsTrigger>
					<TabsTrigger value="improved">優化版</TabsTrigger>
				</TabsList>
				<TabsContent value="original">
					<HeadingOriginal />
				</TabsContent>
				<TabsContent value="improved">
					<HeadingImproved />
				</TabsContent>
			</Tabs>
		</div>
	);
}

function HeadingImproved() {
	return (
		<div className="container mx-auto min-h-screen flex flex-col items-center">
			<div className="bg-white lg:w-[1000px] text-black p-5 lg:p-10 lg:rounded-xl space-y-5">
				<h1 className="text-2xl font-bold text-center my-5">
					網站無障礙規範2.0版
				</h1>
				<div className="flex flex-col justify-start">
					<h2 className="text-xl font-bold my-2">前言</h2>
					<p>
						本規範的規劃和訂定主要是參考 W3C (World Wide Web Consortium) 協會的
						Web Accessibility Initiative (WAI)
						組織訂定的網站無障礙內容相關標準，並參照各國在制定網站無障礙相關政策和推廣策略的做法，及國內近年來在身心障礙者保護政策、無障礙空間的推動、視覺障礙者在無障礙網路相關措施的努力等經驗所訂定。
					</p>
					<a href="#" className="underline text-indigo-500 self-end">
						參考連結 →
					</a>
				</div>
				<div className="flex flex-col justify-start space-y-3">
					<h2 className="text-xl font-bold my-2">網站無障礙設計準則與程序</h2>
					<div>
						<h3 className="text-lg font-semibold my-2">
							一、網站無障礙可及性設計原則
						</h3>
						<p>
							網站開發人員在規劃網站的架構、資源內容的整理和呈現的處理、網頁相關技術的取捨等相關因素時，應該依循本規範的
							4
							原則主軸辦理。每一原則下各有若干指引，用以闡釋該原則。讓網站開發人員能夠對網站開發在可及性設計的考慮上有明確的遵循實例，並使檢測有所依據。
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold my-2">
							二、網站無障礙設計程序
						</h3>
						<p>
							本規範的規劃和訂定主要是參考W3C(World Wide Web Consortium)協會的
							Web Accessibility
							Initiative(WAI)組織訂定的網站無障礙內容相關標準，並參照各國在制定網站無障礙相關政策和推廣策略的做法，及國內近年來在身心障礙者保護政策、無障礙空間的推動、視覺障礙者在無障礙網路相關措施的努力等經驗所訂定。
						</p>
					</div>
					<a href="#" className="underline text-indigo-500 self-end">
						參考連結 →
					</a>
				</div>
				<div className="flex flex-col justify-start">
					<h2 className="text-xl font-bold my-3">檢測等級</h2>
					<ol className="space-y-2">
						<li>一、檢測等級 A</li>
						<li>二、檢測等級 AA</li>
						<li>三、檢測等級 AAA</li>{" "}
					</ol>
					<a href="#" className="underline text-indigo-500 self-end">
						參考連結 →
					</a>
				</div>
				<div className="flex flex-col justify-start">
					<h2 className="text-xl font-bold my-2">四原則</h2>
					<p>
						本規範係基於以下 4 原則架構而成，這 4
						原則鋪陳著任何使用者想要取用網頁內容所必要的基礎。任何人想使用之網頁內容是：
					</p>
					<ol className="space-y-3 mt-2">
						<li>
							<p className="font-bold text-lg my-2">原則1：可感知</p>
							<p>
								資訊及使用者介面元件應以使用者能察覺之方式呈現使用者一定要能察覺呈現出來的資訊（也就是資訊不能對使用者所有的感官均無形）。用以闡釋此原則所設置的指引包括了指引
								1、2、3、4。
							</p>
						</li>
						<li>
							<p className="font-bold text-lg my-2">原則2：可操作</p>
							<p>
								使用者介面元件及導覽功能應具可操作性使用者一定要能夠操作介面（介面不能要求使用者無法執行的互動方式）。用以闡釋此原則所設置的指引包括了指引
								5、6、7、8。
							</p>
						</li>
						<li>
							<p className="font-bold text-lg my-2">原則3：可理解</p>
							<p>
								資訊及使用者介面之操作應具可理解性使用者一定要能夠明白資訊及使用者介面的操作（亦即內容及操作皆不能超出使用者的理解能力）。用以闡釋此原則所設置的指引包括了指引
								9、10、11。
							</p>
						</li>
						<li>
							<p className="font-bold text-lg my-2">原則4：穩健性</p>
							<p>
								網頁內容應可供身心障礙者以輔助工具讀取，並具有相容性隨著科技進步，使用者一定要能取用內容（也就是說當科技及使用者代理演進後，內容仍應保有可及性）。用以闡釋此原則設置指引
								12。
							</p>
						</li>
					</ol>
					<a href="#" className="underline text-indigo-500 self-end mt-3">
						參考連結 →
					</a>
				</div>
			</div>
		</div>
	);
}

function HeadingOriginal() {
	return (
		<div className="container mx-auto min-h-screen flex flex-col items-center">
			<div className="bg-white lg:w-[1000px] text-black p-5 lg:p-10 lg:rounded-xl space-y-5">
				<p className="text-2xl font-bold text-center my-5">
					網站無障礙規範2.0版
				</p>
				<div className="flex flex-col justify-start">
					<p className="text-xl font-bold my-2">前言</p>
					<p>
						本規範的規劃和訂定主要是參考 W3C (World Wide Web Consortium) 協會的
						Web Accessibility Initiative (WAI)
						組織訂定的網站無障礙內容相關標準，並參照各國在制定網站無障礙相關政策和推廣策略的做法，及國內近年來在身心障礙者保護政策、無障礙空間的推動、視覺障礙者在無障礙網路相關措施的努力等經驗所訂定。
					</p>
					<a href="#" className="underline text-indigo-500 self-end">
						參考連結 →
					</a>
				</div>
				<div className="flex flex-col justify-start space-y-3">
					<p className="text-xl font-bold my-2">網站無障礙設計準則與程序</p>
					<div>
						<p className="text-lg font-semibold my-2">
							一、網站無障礙可及性設計原則
						</p>
						<p>
							網站開發人員在規劃網站的架構、資源內容的整理和呈現的處理、網頁相關技術的取捨等相關因素時，應該依循本規範的
							4
							原則主軸辦理。每一原則下各有若干指引，用以闡釋該原則。讓網站開發人員能夠對網站開發在可及性設計的考慮上有明確的遵循實例，並使檢測有所依據。
						</p>
					</div>
					<div>
						<p className="text-lg font-semibold my-2">二、網站無障礙設計程序</p>
						<p>
							本規範的規劃和訂定主要是參考W3C(World Wide Web Consortium)協會的
							Web Accessibility
							Initiative(WAI)組織訂定的網站無障礙內容相關標準，並參照各國在制定網站無障礙相關政策和推廣策略的做法，及國內近年來在身心障礙者保護政策、無障礙空間的推動、視覺障礙者在無障礙網路相關措施的努力等經驗所訂定。
						</p>
					</div>
					{/* todo 改成用 javascript */}
					<a href="#" className="underline text-indigo-500 self-end">
						參考連結 →
					</a>
				</div>
				<div className="flex flex-col justify-start">
					<p className="text-xl font-bold my-3">檢測等級</p>
					<div className="space-y-2 flex flex-col">
						<span>一、檢測等級 A</span>
						<span>二、檢測等級 AA</span>
						<span>三、檢測等級 AAA</span>
					</div>
					<a href="#" className="underline text-indigo-500 self-end">
						參考連結 →
					</a>
				</div>
				<div className="flex flex-col justify-start">
					<p className="text-xl font-bold my-2">四原則</p>
					<p>
						本規範係基於以下 4 原則架構而成，這 4
						原則鋪陳著任何使用者想要取用網頁內容所必要的基礎。任何人想使用之網頁內容是：
					</p>
					<div className="space-y-3 mt-2">
						<span>
							<p className="font-bold text-lg my-2">原則1：可感知</p>
							<p>
								資訊及使用者介面元件應以使用者能察覺之方式呈現使用者一定要能察覺呈現出來的資訊（也就是資訊不能對使用者所有的感官均無形）。用以闡釋此原則所設置的指引包括了指引
								1、2、3、4。
							</p>
						</span>
						<span>
							<p className="font-bold text-lg my-2">原則2：可操作</p>
							<p>
								使用者介面元件及導覽功能應具可操作性使用者一定要能夠操作介面（介面不能要求使用者無法執行的互動方式）。用以闡釋此原則所設置的指引包括了指引
								5、6、7、8。
							</p>
						</span>
						<span>
							<p className="font-bold text-lg my-2">原則3：可理解</p>
							<p>
								資訊及使用者介面之操作應具可理解性使用者一定要能夠明白資訊及使用者介面的操作（亦即內容及操作皆不能超出使用者的理解能力）。用以闡釋此原則所設置的指引包括了指引
								9、10、11。
							</p>
						</span>
						<span>
							<p className="font-bold text-lg my-2">原則4：穩健性</p>
							<p>
								網頁內容應可供身心障礙者以輔助工具讀取，並具有相容性隨著科技進步，使用者一定要能取用內容（也就是說當科技及使用者代理演進後，內容仍應保有可及性）。用以闡釋此原則設置指引
								12。
							</p>
						</span>
					</div>
					<a href="#" className="underline text-indigo-500 self-end mt-3">
						參考連結 →
					</a>
				</div>
			</div>
		</div>
	);
}
