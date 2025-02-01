import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";
import { useTitle } from "../utils";

export default function Heading() {
	useTitle("定位點 | A11y Demo");
	return (
		<div className="container mx-auto">
			<div className="absolute top-5 left-5 flex gap-5">
				<Link to="/">返回首頁</Link>
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
					網站無障礙規範十三指引
				</h1>
				<div className="flex flex-col justify-start space-y-2">
					<h2 className="text-xl font-bold">指引1.1：替代文字</h2>
					<p>
						為任何非文字的內容提供相等意義的替代文字，使這些內容能依人們的需求，轉變成大字版、點字、語音、符號或簡化過的語言等不同型態。
					</p>
					<DisclosureImproved
						title="詳細說明"
						content="本指引的目的是要確保所有非文字的內容也都有文字的版本。這裡的「文字」指的是電子文字，而非影像文字。電子文字有著呈現方式中立的獨特優勢，也就是說可以以視覺化、聽覺化、觸覺化等不同方式加以表達，也可同時合用多種表達方式來呈現。因此以電子文字呈現的資訊就可以用任何最適合使用者的方式來呈現。這樣的內容可以很容易地放大、報讀出來讓有閱讀障礙的使用者也能便於理解，或者以任何觸覺的方式呈現來滿足使用者的需求。"
					/>
					<a
						href="https://www.w3.org/TR/WCAG22/#text-alternatives"
						className="underline text-indigo-500 self-end"
					>
						參考連結 →
					</a>
				</div>
				<div className="flex flex-col justify-start space-y-2">
					<h2 className="text-xl font-bold">指引1.2：時序媒體</h2>
					<p>針對時序媒體提供替代內容。</p>
					<DisclosureImproved
						title="詳細說明"
						content={
							<>
								本指引的目的是要提供取用時序媒體及同步媒體的能力。這項指引所囊括的媒體包括：
								<ul className="list-disc">
									<li className="translate-x-4">純音訊</li>
									<li className="translate-x-4">純視訊</li>
									<li className="translate-x-4">視訊及音訊</li>
									<li className="translate-x-4"> 結合互動的視訊和音訊</li>
								</ul>
							</>
						}
					/>
					<a
						href="https://www.w3.org/TR/WCAG22/#time-based-media"
						className="underline text-indigo-500 self-end"
					>
						參考連結 →
					</a>
				</div>
				<div className="flex flex-col justify-start space-y-2">
					<h2 className="text-xl font-bold">指引1.3：可調適</h2>
					<p>
						建立能以不同方式呈現(例如簡化的版面)，而不會喪失資訊或結構的內容。
					</p>
					<DisclosureImproved
						title="詳細說明"
						content="本指引的目的在確保所有的資訊都有所有使用者可感知的形式，像是報讀出來或以較簡單的視覺布局呈現。如果所有的資訊都有軟體可判別的形式，就可以用不同的方式如視覺性、聽覺性、觸覺性等方式呈現給使用者。如果資訊嵌入在特定的呈現方式中，而其結構與資訊無法由輔助科技以程式化的方式來判讀，那麼就無法以使用者所需的其他形式來呈現。本指引下的所有成功準則都是要確保可使用在呈現中常見編碼的不同資訊類型，而能以不同的型態來表達。"
					/>
					<a
						href="https://www.w3.org/TR/WCAG22/#adaptable"
						className="underline text-indigo-500 self-end"
					>
						參考連結 →
					</a>
				</div>
				<div className="flex flex-col justify-start space-y-2">
					<h2 className="text-xl font-bold">指引1.4：可辨識</h2>
					<p>讓使用者能更容易地看見及聽到內容、區分前景和背景。</p>
					<DisclosureImproved
						title="詳細說明"
						content="有些指引著重在使資訊能有可以替代格式來呈現，本指引則是想讓預設的呈現方式能讓有障礙的使用者也能容易感知。使這件事容易的主要焦點在於讓使用者能容易地將前景資訊從背景當中分出來。就視覺呈現來說，這牽涉到確保背景上的前景資訊能有充足的對比；就聽覺呈現來說，這牽涉到確保背景聲音中的前景資訊能有夠大的音量。網頁設計者應留意到：視力障礙者和聽力障礙者要從背景中分離出前景資訊時，會比其他人更為困難。"
					/>
					<a
						href="https://www.w3.org/TR/WCAG22/#distinguishable"
						className="underline text-indigo-500 self-end"
					>
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
					網站無障礙規範十三指引
				</p>
				<div className="flex flex-col justify-start space-y-2">
					<p className="text-xl font-bold">指引1.1：替代文字</p>
					<p>
						為任何非文字的內容提供相等意義的替代文字，使這些內容能依人們的需求，轉變成大字版、點字、語音、符號或簡化過的語言等不同型態。
					</p>
					<DisclosureOriginal
						title="詳細說明"
						content="本指引的目的是要確保所有非文字的內容也都有文字的版本。這裡的「文字」指的是電子文字，而非影像文字。電子文字有著呈現方式中立的獨特優勢，也就是說可以以視覺化、聽覺化、觸覺化等不同方式加以表達，也可同時合用多種表達方式來呈現。因此以電子文字呈現的資訊就可以用任何最適合使用者的方式來呈現。這樣的內容可以很容易地放大、報讀出來讓有閱讀障礙的使用者也能便於理解，或者以任何觸覺的方式呈現來滿足使用者的需求。"
					/>
					<a
						href="https://www.w3.org/TR/WCAG22/#text-alternatives"
						className="underline text-indigo-500 self-end"
					>
						參考連結 →
					</a>
				</div>
				<div className="flex flex-col justify-start space-y-2">
					<p className="text-xl font-bold">指引1.2：時序媒體</p>
					<p>針對時序媒體提供替代內容。</p>
					<DisclosureOriginal
						title="詳細說明"
						content={
							<>
								本指引的目的是要提供取用時序媒體及同步媒體的能力。這項指引所囊括的媒體包括：
								<ul className="list-disc">
									<li className="translate-x-4">純音訊</li>
									<li className="translate-x-4">純視訊</li>
									<li className="translate-x-4">視訊及音訊</li>
									<li className="translate-x-4"> 結合互動的視訊和音訊</li>
								</ul>
							</>
						}
					/>
					<a
						href="https://www.w3.org/TR/WCAG22/#time-based-media"
						className="underline text-indigo-500 self-end"
					>
						參考連結 →
					</a>
				</div>
				<div className="flex flex-col justify-start space-y-2">
					<p className="text-xl font-bold">指引1.3：可調適</p>
					<p>
						建立能以不同方式呈現(例如簡化的版面)，而不會喪失資訊或結構的內容。
					</p>
					<DisclosureOriginal
						title="詳細說明"
						content="本指引的目的在確保所有的資訊都有所有使用者可感知的形式，像是報讀出來或以較簡單的視覺布局呈現。如果所有的資訊都有軟體可判別的形式，就可以用不同的方式如視覺性、聽覺性、觸覺性等方式呈現給使用者。如果資訊嵌入在特定的呈現方式中，而其結構與資訊無法由輔助科技以程式化的方式來判讀，那麼就無法以使用者所需的其他形式來呈現。本指引下的所有成功準則都是要確保可使用在呈現中常見編碼的不同資訊類型，而能以不同的型態來表達。"
					/>
					<a
						href="https://www.w3.org/TR/WCAG22/#adaptable"
						className="underline text-indigo-500 self-end"
					>
						參考連結 →
					</a>
				</div>
				<div className="flex flex-col justify-start space-y-2">
					<p className="text-xl font-bold">指引1.4：可辨識</p>
					<p>讓使用者能更容易地看見及聽到內容、區分前景和背景。</p>
					<DisclosureOriginal
						title="詳細說明"
						content="有些指引著重在使資訊能有可以替代格式來呈現，本指引則是想讓預設的呈現方式能讓有障礙的使用者也能容易感知。使這件事容易的主要焦點在於讓使用者能容易地將前景資訊從背景當中分出來。就視覺呈現來說，這牽涉到確保背景上的前景資訊能有充足的對比；就聽覺呈現來說，這牽涉到確保背景聲音中的前景資訊能有夠大的音量。網頁設計者應留意到：視力障礙者和聽力障礙者要從背景中分離出前景資訊時，會比其他人更為困難。"
					/>
					<a
						href="https://www.w3.org/TR/WCAG22/#distinguishable"
						className="underline text-indigo-500 self-end"
					>
						參考連結 →
					</a>
				</div>
			</div>
		</div>
	);
}

function DisclosureOriginal({ title, content }) {
	const [isOpen, setIsOpen] = useState(false);
	const openDisclosure = () => setIsOpen(!isOpen);

	return (
		<>
			<div
				onClick={openDisclosure}
				className="w-fit p-2 bg-zinc-700 text-white rounded-md inline-flex"
			>
				{title}
				{isOpen ? <ChevronDown /> : <ChevronRight />}
			</div>
			{isOpen && <div>{content}</div>}
		</>
	);
}

function DisclosureImproved({ title, content }) {
	const [isOpen, setIsOpen] = useState(false);
	const openDisclosure = () => setIsOpen(!isOpen);

	return (
		<>
			<button
				onClick={openDisclosure}
				type="button"
				aria-expanded={isOpen ? "true" : "false"}
				aria-controls={`${title}_desc`}
				className="w-fit p-2 bg-zinc-700 text-white rounded-md inline-flex"
			>
				{title}
				{isOpen ? <ChevronDown aria-hidden /> : <ChevronRight aria-hidden />}
			</button>
			{isOpen && <div id={`${title}_desc`}>{content}</div>}
		</>
	);
}
