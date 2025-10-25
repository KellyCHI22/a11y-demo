import { Link } from "react-router-dom";
import { useTabParams, useTitle } from "../utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./TabsHeadless";

export default function TableDemo() {
	useTitle("表格入門 (上) - 範例 | A11y Demo");
	const { currentTab, handleTabChange } = useTabParams("example-one");

	const tabs = [
		{ key: "example-one", label: "範例一", content: <TableExampleOne /> },
		{ key: "example-two", label: "範例二", content: <TableExampleTwo /> },
		{
			key: "wrong-example-one",
			label: "錯誤範例一",
			content: <TableBadExampleOne />,
		},
		{ key: "example-three", label: "範例三", content: <TableExampleThree /> },
		{
			key: "wrong-example-two",
			label: "錯誤範例二",
			content: <TableBadExampleTwo />,
		},
	];

	const selectedIndex = tabs.findIndex((t) => t.key === currentTab) ?? 0;

	return (
		<div className="container mx-auto">
			<div className="absolute top-5 left-5 flex gap-5">
				<Link to="/">返回首頁</Link>
			</div>

			<Tabs
				selectedIndex={selectedIndex}
				onChange={(index) => handleTabChange(tabs[index].key)}
				className="mt-16 lg:my-16 lg:w-[800px] lg:mx-auto"
			>
				{/* Tab Triggers */}
				<TabsList className="my-5 grid w-full grid-cols-5 lg:mb-5 bg-zinc-700 p-1 rounded-md text-white">
					{tabs.map((tab) => (
						<TabsTrigger
							key={tab.key}
							className={({ selected }) =>
								cn(
									"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-zinc-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
									selected
										? "bg-[#242424] text-foreground shadow-sm"
										: "text-white hover:bg-zinc-600"
								)
							}
						>
							{tab.label}
						</TabsTrigger>
					))}
				</TabsList>

				{/* Tab Contents */}
				{tabs.map((tab) => (
					<TabsContent
						key={tab.key}
						className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
					>
						{tab.content}
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
}

function TableExampleOne() {
	return (
		<div className="bg-white p-4 rounded-xl">
			<p className="pb-4 text-gray-900 font-bold text-center">
				範例一：具有橫列表頭的表格
			</p>
			<table className="min-w-full border border-gray-300 divide-y divide-gray-200 overflow-hidden shadow-sm">
				<tr className="bg-indigo-600 text-white">
					<th className="px-6 py-3 text-left font-semibold border border-gray-300">
						Date
					</th>
					<th className="px-6 py-3 text-left font-semibold border border-gray-300">
						Event
					</th>
					<th className="px-6 py-3 text-left font-semibold border border-gray-300">
						Venue
					</th>
				</tr>

				<tr className="text-gray-800">
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						12 February
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						Waltz with Strauss
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						Main Hall
					</td>
				</tr>
				<tr className="text-gray-800">
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						24 March
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						The Obelisks
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						West Wing
					</td>
				</tr>
				<tr className="text-gray-800">
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						14 April
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						The What
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						Main Hall
					</td>
				</tr>
			</table>
		</div>
	);
}

function TableExampleTwo() {
	return (
		<div className="bg-white p-4 rounded-xl">
			<p className="pb-4 text-gray-900 font-bold text-center">
				範例二：具有直列表頭的表格
			</p>
			<table className="min-w-full border border-gray-300 divide-y divide-gray-200 overflow-hidden shadow-sm">
				<tr className="text-gray-800">
					<th className="bg-indigo-600 text-white px-6 py-3 text-left font-semibold border border-gray-300">
						Date
					</th>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						12 February
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						24 March
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						14 April
					</td>
				</tr>
				<tr className="text-gray-800">
					<th className="px-6 py-3 text-left font-semibold bg-indigo-600 text-white border border-gray-300">
						Event
					</th>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						Waltz with Strauss
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						The Obelisks
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						The What
					</td>
				</tr>
				<tr className="text-gray-800">
					<th className="px-6 py-3 text-left font-semibold bg-indigo-600 text-white border border-gray-300">
						Venue
					</th>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						Main Hall
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						West Wing
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						Main Hall
					</td>
				</tr>
			</table>
		</div>
	);
}

function TableBadExampleOne() {
	return (
		<div className="bg-white p-4 rounded-xl">
			<p className="pb-4 text-gray-900 font-bold text-center">
				{`錯誤範例一：使用 <td> 做為表頭`}
			</p>
			<table className="min-w-full border border-gray-300 divide-y divide-gray-200 overflow-hidden shadow-sm">
				<tr className="bg-indigo-600 text-white">
					<td className="px-6 py-3 text-left font-semibold border border-gray-300">
						Date
					</td>
					<td className="px-6 py-3 text-left font-semibold border border-gray-300">
						Event
					</td>
					<td className="px-6 py-3 text-left font-semibold border border-gray-300">
						Venue
					</td>
				</tr>
				<tr className="text-gray-800">
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						12 February
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						Waltz with Strauss
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						Main Hall
					</td>
				</tr>
				<tr className="text-gray-800">
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						24 March
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						The Obelisks
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						West Wing
					</td>
				</tr>
				<tr className="text-gray-800">
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						14 April
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						The What
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						Main Hall
					</td>
				</tr>
			</table>
		</div>
	);
}

function TableExampleThree() {
	return (
		<div className="bg-white p-4 rounded-xl">
			<p className="pb-4 text-gray-900 font-bold text-center">
				範例三：頂端列與左側欄為表頭的表格
			</p>
			<table className="min-w-full border border-gray-300 divide-y divide-gray-200 overflow-hidden shadow-sm">
				<caption className="text-gray-900 text-left pb-2 font-bold">
					Delivery slots:
				</caption>

				<tr>
					<th className="px-6 py-3 text-left font-semibold border border-gray-300"></th>
					<th
						scope="col"
						className="px-6 py-3 text-left font-semibold border border-gray-300 bg-indigo-600 text-white"
					>
						Monday
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left font-semibold border border-gray-300 bg-indigo-600 text-white"
					>
						Tuesday
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left font-semibold border border-gray-300 bg-indigo-600 text-white"
					>
						Wednesday
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left font-semibold border border-gray-300 bg-indigo-600 text-white"
					>
						Thursday
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left font-semibold border border-gray-300 bg-indigo-600 text-white"
					>
						Friday
					</th>
				</tr>

				<tr className="text-gray-800">
					<th
						scope="row"
						className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300 text-left"
					>
						09:00 – 11:00
					</th>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
				</tr>
				<tr>
					<th
						scope="row"
						className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300 text-left"
					>
						11:00 – 13:00
					</th>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
				</tr>
				<tr>
					<th
						scope="row"
						className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300 text-left"
					>
						13:00 – 15:00
					</th>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
				</tr>
				<tr>
					<th
						scope="row"
						className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300 text-left"
					>
						15:00 – 17:00
					</th>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
				</tr>
			</table>
		</div>
	);
}

function TableBadExampleTwo() {
	return (
		<div className="bg-white p-4 rounded-xl">
			<p className="pb-4 text-gray-900 font-bold text-center">
				錯誤範例二：沒有正確加上 scope 屬性
			</p>
			<table className="min-w-full border border-gray-300 divide-y divide-gray-200 overflow-hidden shadow-sm">
				<caption className="text-gray-900 text-left pb-2 font-bold">
					Delivery slots:
				</caption>

				<tr>
					<th className="px-6 py-3 text-left font-semibold border border-gray-300"></th>
					<th className="px-6 py-3 text-left font-semibold border border-gray-300 bg-indigo-600 text-white">
						Monday
					</th>
					<th className="px-6 py-3 text-left font-semibold border border-gray-300 bg-indigo-600 text-white">
						Tuesday
					</th>
					<th className="px-6 py-3 text-left font-semibold border border-gray-300 bg-indigo-600 text-white">
						Wednesday
					</th>
					<th className="px-6 py-3 text-left font-semibold border border-gray-300 bg-indigo-600 text-white">
						Thursday
					</th>
					<th className="px-6 py-3 text-left font-semibold border border-gray-300 bg-indigo-600 text-white">
						Friday
					</th>
				</tr>

				<tr className="text-gray-800">
					<th className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300 text-left">
						09:00 – 11:00
					</th>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
				</tr>
				<tr>
					<th className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300 text-left">
						11:00 – 13:00
					</th>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
				</tr>
				<tr>
					<th className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300 text-left">
						13:00 – 15:00
					</th>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
				</tr>
				<tr>
					<th className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300 text-left">
						15:00 – 17:00
					</th>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Closed
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
					<td className="px-6 py-4 text-base border border-gray-300 text-gray-800">
						Open
					</td>
				</tr>
			</table>
		</div>
	);
}
