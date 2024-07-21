import {
	RectangleGroupIcon,
	UsersIcon,
	SwatchIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";
import { useTitle } from "../utils";

const features = [
	{
		name: "品牌設計",
		description:
			"我們的團隊擁有豐富的經驗和創意，能為您量身打造獨特且具吸引力的品牌形象。無論是視覺識別還是品牌故事，我們都能讓您的品牌在市場中脫穎而出，讓消費者對您的品牌產生深刻的印象。",
		href: "#",
		icon: RectangleGroupIcon,
	},
	{
		name: "行銷企劃",
		description:
			"我們專注於提供全面且高效的行銷策略，從市場調研到行銷活動的執行，我們確保每一個步驟都精確無誤。我們的目標是幫助您達成業務目標，提高品牌知名度，並吸引更多潛在客戶。",
		href: "#",
		icon: UsersIcon,
	},
	{
		name: "專案管理",
		description:
			"我們的專案管理服務能夠確保您的行銷計劃順利推進，從項目啟動到最終交付，我們都會密切監控每一個環節，確保項目按時完成，並達到預期效果。我們的專業團隊將協助您有效管理資源，最大化專案的價值。",
		href: "#",
		icon: SwatchIcon,
	},
];

export default function More() {
	useTitle("查看更多 | A11y Demo");
	return (
		<div className="container mx-auto">
			<div className="absolute top-5 left-5 flex gap-5">
				{/* 改回首頁 */}
				<Link to="/">Back</Link>
			</div>
			<Tabs defaultValue="original" className="mt-16 lg:my-16 lg:mx-20">
				<TabsList className="my-5 grid w-full grid-cols-2 lg:mb-5">
					<TabsTrigger value="original">原始版</TabsTrigger>
					<TabsTrigger value="improved">優化版</TabsTrigger>
				</TabsList>
				<TabsContent value="original">
					<MoreOriginal />
				</TabsContent>
				<TabsContent value="improved">
					<MoreImproved />
				</TabsContent>
			</Tabs>
		</div>
	);
}

function MoreImproved() {
	return (
		<div className="container mx-auto flex flex-col items-center">
			<div className="mx-auto bg-white max-w-7xl px-6 py-10 lg:px-8 lg:py-10 lg:rounded-xl">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						專業服務
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						我們致力於提供卓越的行銷服務，滿足客戶多樣化的需求。
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-10 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="flex flex-col">
								<dt className="text-base font-semibold leading-7 text-gray-900">
									<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
										<feature.icon
											aria-hidden="true"
											className="h-6 w-6 text-white"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">{feature.description}</p>
									<p className="mt-6">
										<a
											href={feature.href}
											className="text-sm font-semibold leading-6 text-indigo-600"
										>
											查看更多 <span aria-hidden="true">→</span>
											<span className="sr-only">關於{feature.name}的內容</span>
										</a>
									</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}

function MoreOriginal() {
	return (
		<div className="container mx-auto flex flex-col items-center">
			<div className="mx-auto bg-white max-w-7xl px-6 py-10 lg:px-8 lg:py-10 lg:rounded-xl">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						專業服務
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						我們致力於提供卓越的行銷服務，滿足客戶多樣化的需求。
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-10 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="flex flex-col">
								<dt className="text-base font-semibold leading-7 text-gray-900">
									<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
										<feature.icon
											aria-hidden="true"
											className="h-6 w-6 text-white"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">{feature.description}</p>
									<p className="mt-6">
										<a
											href={feature.href}
											className="text-sm font-semibold leading-6 text-indigo-600"
										>
											查看更多 <span aria-hidden="true">→</span>
										</a>
									</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
