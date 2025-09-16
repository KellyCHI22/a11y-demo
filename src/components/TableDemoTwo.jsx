import { Link } from "react-router-dom";
import { useTabParams, useTitle } from "../utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

export default function TableDemoTwo() {
	useTitle("表格入門 (下) - 範例 | A11y Demo");
	const { currentTab, handleTabChange } = useTabParams("example-one");

	return (
		<div className="container mx-auto">
			<div className="absolute top-5 left-5 flex gap-5">
				<Link to="/">返回首頁</Link>
			</div>
			<Tabs
				value={currentTab}
				onValueChange={handleTabChange}
				className="mt-16 lg:my-16 lg:w-[800px] lg:mx-auto"
			>
				<TabsList className="my-5 grid w-full grid-cols-7 lg:mb-5">
					<TabsTrigger value="example-one">範例一</TabsTrigger>
					<TabsTrigger value="wrong-example-one">錯誤範例一</TabsTrigger>
					<TabsTrigger value="example-two">範例二</TabsTrigger>
					<TabsTrigger value="example-three">範例三</TabsTrigger>
					<TabsTrigger value="wrong-example-two">錯誤範例二</TabsTrigger>
					<TabsTrigger value="example-four">範例四</TabsTrigger>
					<TabsTrigger value="example-four-redesign">範例四優化</TabsTrigger>
				</TabsList>
				<TabsContent value="example-one">
					<TableExampleOne />
				</TabsContent>
				<TabsContent value="wrong-example-one">
					<TableBadExampleOne />
				</TabsContent>
				<TabsContent value="example-two">
					<TableExampleTwo />
				</TabsContent>
				<TabsContent value="example-three">
					<TableExampleThree />
				</TabsContent>
				<TabsContent value="wrong-example-two">
					<TableBadExampleTwo />
				</TabsContent>
				<TabsContent value="example-four">
					<TableExampleFour />
				</TabsContent>
				<TabsContent value="example-four-redesign">
					<TableExampleFourRedesign />
				</TabsContent>
			</Tabs>
		</div>
	);
}

function TableExampleOne() {
	return (
		<div className="bg-white p-4 rounded-xl">
			<p className="pb-4 text-gray-900 font-bold text-center">
				範例一：合併列或合併欄的表格
			</p>
			<table className="text-left min-w-full border border-gray-300 divide-y divide-gray-200 overflow-hidden shadow-sm">
				<caption className="text-left caption-top text-lg font-semibold text-gray-800 mb-2">
					Class Schedule
				</caption>
				<thead>
					<tr className="bg-indigo-600 text-white">
						<th
							scope="col"
							className="px-6 py-3 text-left font-semibold border border-gray-300"
						>
							Day
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left font-semibold border border-gray-300"
						>
							Period 1
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left font-semibold border border-gray-300"
						>
							Period 2
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left font-semibold border border-gray-300"
						>
							Period 3
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-gray-800">
						<th
							scope="row"
							className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Monday
						</th>
						<td
							rowspan="2"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							Math
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							English
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							History
						</td>
					</tr>
					<tr className="text-gray-800">
						<th
							scope="row"
							className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Tuesday
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							Science
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							Art
						</td>
					</tr>
					<tr className="text-gray-800">
						<th
							scope="row"
							className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Wednesday
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							PE
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							English
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							Geography
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

function TableBadExampleOne() {
	return (
		<div className="bg-white p-4 rounded-xl">
			<p className="pb-4 text-gray-900 font-bold text-center">
				錯誤範例一：沒有加上 rowspan 屬性
			</p>
			<table className="text-left min-w-full border border-gray-300 divide-y divide-gray-200 overflow-hidden shadow-sm">
				<caption className="text-left caption-top text-lg font-semibold text-gray-800 mb-2">
					Class Schedule
				</caption>
				<thead>
					<tr className="bg-indigo-600 text-white">
						<th
							scope="col"
							className="px-6 py-3 text-left font-semibold border border-gray-300"
						>
							Day
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left font-semibold border border-gray-300"
						>
							Period 1
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left font-semibold border border-gray-300"
						>
							Period 2
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left font-semibold border border-gray-300"
						>
							Period 3
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-gray-800">
						<th
							scope="row"
							className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Monday
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							Math
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							English
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							History
						</td>
					</tr>
					<tr className="text-gray-800">
						<th
							scope="row"
							className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Tuesday
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							Science
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							Art
						</td>
					</tr>
					<tr className="text-gray-800">
						<th
							scope="row"
							className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Wednesday
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							PE
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							English
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							Geography
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

function TableExampleTwo() {
	return (
		<div className="bg-white p-4 rounded-xl">
			<p className="pb-4 text-gray-900 font-bold text-center">
				範例二：合併直欄表頭的表格
			</p>
			<table className="text-left min-w-full border border-gray-300 divide-y divide-gray-200 overflow-hidden shadow-sm">
				<col />
				<colgroup span="2"></colgroup>
				<colgroup span="2"></colgroup>
				<tr className="">
					<td rowspan="2" className="px-6 py-3 border border-gray-300"></td>
					<th
						colspan="2"
						scope="colgroup"
						className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300"
					>
						Mars
					</th>
					<th
						colspan="2"
						scope="colgroup"
						className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300"
					>
						Venus
					</th>
				</tr>
				<tr className="bg-indigo-600 text-white">
					<th
						scope="col"
						className="px-6 py-3 text-left font-semibold border border-gray-300"
					>
						Produced
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left font-semibold border border-gray-300"
					>
						Sold
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left font-semibold border border-gray-300"
					>
						Produced
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left font-semibold border border-gray-300"
					>
						Sold
					</th>
				</tr>

				<tr className="text-gray-800">
					<th
						scope="row"
						className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
					>
						Teddy Bears
					</th>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						50,000
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						30,000
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						100,000
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						80,000
					</td>
				</tr>
				<tr className="text-gray-800">
					<th
						scope="row"
						className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
					>
						Board Games
					</th>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						10,000
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						5,000
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						12,000
					</td>
					<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
						9,000
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
				範例三：同時有合併直欄與橫列表頭的表格
			</p>
			<table className="text-left min-w-full border border-gray-300 divide-y divide-gray-200 overflow-hidden shadow-sm text-gray-800">
				<caption className="text-left caption-top text-lg font-semibold text-gray-800 mb-2">
					Poster availability
				</caption>
				<col className="bg-indigo-500" />
				<col className="bg-indigo-500" />
				<colgroup span="3" className="bg-white"></colgroup>
				<thead>
					<tr className="bg-indigo-600 text-white">
						<th
							scope="col"
							className="px-6 py-3 font-semibold border border-gray-300"
						>
							Poster name
						</th>
						<th
							scope="col"
							className="px-6 py-3 font-semibold border border-gray-300"
						>
							Color
						</th>
						<th
							colspan="3"
							scope="colgroup"
							className="px-6 py-3 font-semibold border border-gray-300"
						>
							Sizes available
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th
							rowspan="3"
							scope="rowgroup"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium align-top text-white"
						>
							Zodiac
						</th>
						<th
							scope="row"
							className="text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Full color
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A2
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A3
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A4
						</td>
					</tr>
					<tr>
						<th
							scope="row"
							className="text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Black and white
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A1
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A2
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A3
						</td>
					</tr>
					<tr>
						<th
							scope="row"
							className="text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Sepia
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A3
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A4
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A5
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th
							rowspan="2"
							scope="rowgroup"
							className="text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium align-top"
						>
							Angels
						</th>
						<th
							scope="row"
							className="text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Black and white
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A1
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A3
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A4
						</td>
					</tr>
					<tr>
						<th
							scope="row"
							className="text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Sepia
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A2
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A3
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A5
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

function TableBadExampleTwo() {
	return (
		<div className="bg-white p-4 rounded-xl">
			<p className="pb-4 text-gray-900 font-bold text-center">
				{`錯誤範例二：沒有使用 <col> 與 <colgroup> 元素`}
			</p>
			<table className="text-left min-w-full border border-gray-300 divide-y divide-gray-200 overflow-hidden shadow-sm text-gray-800">
				<caption className="text-left caption-top text-lg font-semibold text-gray-800 mb-2">
					Poster availability
				</caption>
				<thead>
					<tr className="bg-indigo-600 text-white">
						<th className="px-6 py-3 font-semibold border border-gray-300">
							Poster name
						</th>
						<th className="px-6 py-3 font-semibold border border-gray-300">
							Color
						</th>
						<th
							colspan="3"
							className="px-6 py-3 font-semibold border border-gray-300"
						>
							Sizes available
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th
							rowspan="3"
							scope="rowgroup"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium align-top text-white"
						>
							Zodiac
						</th>
						<th
							scope="row"
							className="text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Full color
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A2
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A3
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A4
						</td>
					</tr>
					<tr>
						<th
							scope="row"
							className="text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Black and white
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A1
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A2
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A3
						</td>
					</tr>
					<tr>
						<th
							scope="row"
							className="text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Sepia
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A3
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A4
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A5
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th
							rowspan="2"
							scope="rowgroup"
							className="text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium align-top"
						>
							Angels
						</th>
						<th
							scope="row"
							className="text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Black and white
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A1
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A3
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A4
						</td>
					</tr>
					<tr>
						<th
							scope="row"
							className="text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							Sepia
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A2
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A3
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							A5
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

function TableExampleFour() {
	return (
		<div className="bg-white p-4 rounded-xl">
			<p className="pb-4 text-gray-900 font-bold text-center">
				範例四：不規則結構的表格
			</p>
			<table className="min-w-full text-left border border-gray-300 divide-y divide-gray-200 overflow-hidden shadow-sm">
				<caption className="text-left caption-top text-lg font-semibold text-gray-800 mb-2">
					Availability of holiday accommodation
				</caption>
				<thead>
					<tr className=" text-white">
						<td className="px-6 py-3 border border-gray-300"></td>
						<th
							id="stud"
							scope="col"
							className="bg-indigo-600 px-6 py-3 font-semibold border border-gray-300"
						>
							Studio
						</th>
						<th
							id="apt"
							scope="col"
							className="bg-indigo-600 px-6 py-3 font-semibold border border-gray-300"
						>
							Apt
						</th>
						<th
							id="chal"
							scope="col"
							className="bg-indigo-600 px-6 py-3 font-semibold border border-gray-300"
						>
							Chalet
						</th>
						<th
							id="villa"
							scope="col"
							className="bg-indigo-600 px-6 py-3 font-semibold border border-gray-300"
						>
							Villa
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-gray-800">
						<th
							id="par"
							className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300 text-base"
							colspan="5"
							scope="colgroup"
						>
							Paris
						</th>
					</tr>
					<tr className="text-gray-800">
						<th
							headers="par"
							id="pbed1"
							className="bg-indigo-500 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							1 bedroom
						</th>
						<td
							headers="par pbed1 stud"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							11
						</td>
						<td
							headers="par pbed1 apt"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							20
						</td>
						<td
							headers="par pbed1 chal"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							25
						</td>
						<td
							headers="par pbed1 villa"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							23
						</td>
					</tr>
					<tr className="text-gray-800">
						<th
							headers="par"
							id="pbed2"
							className="bg-indigo-500 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							2 bedroom
						</th>
						<td
							headers="par pbed2 stud"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							-
						</td>
						<td
							headers="par pbed2 apt"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							43
						</td>
						<td
							headers="par pbed2 chal"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							52
						</td>
						<td
							headers="par pbed2 villa"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							32
						</td>
					</tr>
					<tr className="text-gray-800">
						<th
							headers="par"
							id="pbed3"
							className="bg-indigo-500 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							3 bedroom
						</th>
						<td
							headers="par pbed3 stud"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							-
						</td>
						<td
							headers="par pbed3 apt"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							13
						</td>
						<td
							headers="par pbed3 chal"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							15
						</td>
						<td
							headers="par pbed3 villa"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							40
						</td>
					</tr>
					<tr className="bg-gray-100 text-gray-800">
						<th
							id="rome"
							className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300 text-base"
							colspan="5"
							scope="colgroup"
						>
							Rome
						</th>
					</tr>
					<tr className="text-gray-800">
						<th
							id="rbed1"
							headers="rome"
							className="bg-indigo-500 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							1 bedroom
						</th>
						<td
							headers="rome rbed1 stud"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							13
						</td>
						<td
							headers="rome rbed1 apt"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							21
						</td>
						<td
							headers="rome rbed1 chal"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							22
						</td>
						<td
							headers="rome rbed1 villa"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							3
						</td>
					</tr>
					<tr className="text-gray-800">
						<th
							id="rbed2"
							headers="rome"
							className="bg-indigo-500 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							2 bedroom
						</th>
						<td
							headers="rome rbed2 stud"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							-
						</td>
						<td
							headers="rome rbed2 apt"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							23
						</td>
						<td
							headers="rome rbed2 chal"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							43
						</td>
						<td
							headers="rome rbed2 villa"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							30
						</td>
					</tr>
					<tr className="text-gray-800">
						<th
							id="rbed3"
							headers="rome"
							className="bg-indigo-500 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							3 bedroom
						</th>
						<td
							headers="rome rbed3 stud"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							-
						</td>
						<td
							headers="rome rbed3 apt"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							16
						</td>
						<td
							headers="rome rbed3 chal"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							32
						</td>
						<td
							headers="rome rbed3 villa"
							className="px-6 py-4 whitespace-nowrap text-base border border-gray-300"
						>
							40
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

function TableExampleFourRedesign() {
	return (
		<div className="bg-white p-4 rounded-xl">
			<p className="pb-4 text-gray-900 font-bold text-center">
				範例四優化：拆分成獨立表格
			</p>
			<table className="min-w-full text-left border border-gray-300 divide-y divide-gray-200 overflow-hidden shadow-sm">
				<caption className="text-left caption-top text-lg font-semibold text-gray-800 mb-2">
					Paris
				</caption>
				<thead>
					<tr className="">
						<td className=" px-6 py-3 border border-gray-300"></td>
						<th
							scope="col"
							className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300"
						>
							Studio
						</th>
						<th
							scope="col"
							className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300"
						>
							Apt
						</th>
						<th
							scope="col"
							className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300"
						>
							Chalet
						</th>
						<th
							scope="col"
							className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300"
						>
							Villa
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-gray-800">
						<th
							scope="row"
							className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							1 bedroom
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							11
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							20
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							25
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							23
						</td>
					</tr>
					<tr className="text-gray-800">
						<th
							scope="row"
							className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							2 bedroom
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							-
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							43
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							52
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							32
						</td>
					</tr>
					<tr className="text-gray-800">
						<th
							scope="row"
							className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							3 bedroom
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							-
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							13
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							15
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							40
						</td>
					</tr>
				</tbody>
			</table>

			<table className="min-w-full text-left border border-gray-300 divide-y divide-gray-200 overflow-hidden shadow-sm mt-4">
				<caption className="text-left caption-top text-lg font-semibold text-gray-800 mb-2">
					Rome
				</caption>
				<thead>
					<tr className="">
						<td className="px-6 py-3 border border-gray-300"></td>
						<th
							scope="col"
							className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300"
						>
							Studio
						</th>
						<th
							scope="col"
							className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300"
						>
							Apt
						</th>
						<th
							scope="col"
							className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300"
						>
							Chalet
						</th>
						<th
							scope="col"
							className="bg-indigo-600 text-white px-6 py-3 font-semibold border border-gray-300"
						>
							Villa
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-gray-800">
						<th
							id="rbed1"
							scope="row"
							className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							1 bedroom
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							13
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							21
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							22
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							3
						</td>
					</tr>
					<tr className="text-gray-800">
						<th
							id="rbed2"
							scope="row"
							className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							2 bedroom
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							-
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							23
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							43
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							30
						</td>
					</tr>
					<tr className="text-gray-800">
						<th
							id="rbed3"
							scope="row"
							className="bg-indigo-600 text-white px-6 py-4 whitespace-nowrap text-base border border-gray-300 font-medium"
						>
							3 bedroom
						</th>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							-
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							16
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							32
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-base border border-gray-300">
							40
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
