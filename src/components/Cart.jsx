import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./TabsHeadless";

import { useTitle } from "../utils";
import tshirt1 from "../assets/tshirt-1.png";
import tshirt2 from "../assets/tshirt-2.png";
import bottle1 from "../assets/bottle-1.png";

const products = [
	{
		id: 1,
		name: "藝術印花 T-shirt",
		href: "#",
		price: 320,
		color: "薄荷色",
		size: "Medium",
		inStock: true,
		imageSrc: tshirt1,
		imageAlt: "薄荷色藝術印花 T-shirt 正面",
	},
	{
		id: 2,
		name: "基本款 T-shirt",
		href: "#",
		price: 250,
		color: "黑色",
		inStock: false,
		leadTime: "2-3",
		size: "Large",
		imageSrc: tshirt2,
		imageAlt: "黑色基本款 T-shirt 正面",
	},
	{
		id: 3,
		name: "質感水壺",
		href: "#",
		price: 300,
		color: "米白色",
		inStock: true,
		imageSrc: bottle1,
		imageAlt: "米白色質感水壺，壺口周圍有黑色塗料設計",
	},
	// More products...
];

const total = products.reduce((total, item) => {
	return total + item.price;
}, 0);

export default function Cart() {
	useTitle("我的購物車 | A11y Demo");
	return (
		<div className="container mx-auto">
			<div className="absolute top-5 left-5 flex gap-5">
				<Link to="/">返回首頁</Link>
			</div>
			<Tabs className="mt-16 lg:my-16 lg:w-[800px] lg:mx-auto">
				<TabsList className="my-5 grid w-full grid-cols-2 lg:mb-5">
					<TabsTrigger>原始版</TabsTrigger>
					<TabsTrigger>優化版</TabsTrigger>
				</TabsList>
				<TabsContent>
					<CartOriginal />
				</TabsContent>
				<TabsContent>
					<CartImproved />
				</TabsContent>
			</Tabs>
		</div>
	);
}

function CartImproved() {
	return (
		<div className="bg-white p-5 lg:w-[800px] lg:p-10 lg:rounded-xl lg:mx-auto">
			<h1 className="text-center text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				我的購物車
			</h1>

			<form className="mt-5 lg:mt-12">
				<section aria-labelledby="cart-heading">
					<h2 id="cart-heading" className="sr-only">
						購物車商品列表
					</h2>

					<ul
						role="list"
						className="divide-y divide-gray-200 border-b border-t border-gray-200"
					>
						{products.map((product) => (
							<li key={product.id} className="flex py-6">
								<div className="flex-shrink-0">
									<img
										alt={product.imageAlt}
										src={product.imageSrc}
										className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
									/>
								</div>

								<div className="ml-4 flex flex-1 flex-col sm:ml-6">
									<div>
										<div className="flex justify-between">
											<h3 className="text-sm">
												<a
													href={product.href}
													className="font-medium text-gray-700 hover:text-gray-800"
												>
													{product.name}
												</a>
											</h3>
											<p className="hidden lg:block ml-4 text-sm font-bold text-gray-900">
												NTD {product.price}
											</p>
										</div>
										<div className="flex gap-2 lg:flex-col lg:gap-0">
											<p className="mt-1 text-sm text-gray-500">
												{product.color}
											</p>
											<p className="mt-1 text-sm text-gray-500">
												{product.size}
											</p>
										</div>
									</div>

									<div className="mt-4 flex flex-1 items-end justify-between">
										<p className="flex items-center space-x-2 text-sm text-gray-700">
											{product.inStock ? (
												<CheckIcon
													aria-hidden="true"
													className="h-5 w-5 flex-shrink-0 text-green-500"
												/>
											) : (
												<ClockIcon
													aria-hidden="true"
													className="h-5 w-5 flex-shrink-0 text-gray-300"
												/>
											)}

											<span>
												{product.inStock
													? "尚有存貨"
													: `於 ${product.leadTime} 工作天後寄出`}
											</span>
										</p>
										<div className="hidden lg:block ml-4">
											<button
												type="button"
												className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
											>
												<span>移除</span>
												<span className="sr-only">{product.name}</span>
											</button>
										</div>
									</div>
									<div className="flex justify-between mt-5 lg:hidden">
										<p className="text-sm font-bold text-gray-900">
											NTD {product.price}
										</p>
										<button
											type="button"
											className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
										>
											<span>移除</span>
											<span className="sr-only">{product.name}</span>
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				</section>

				{/* Order summary */}
				<section aria-labelledby="summary-heading" className="mt-10">
					<h2 id="summary-heading" className="sr-only">
						購物明細
					</h2>

					<div>
						<dl className="space-y-4">
							<div className="flex items-center justify-between">
								<dt className="text-base font-medium text-gray-900">
									金額小計
								</dt>
								<dd className="ml-4 text-base font-bold text-gray-900">
									NTD {total}
								</dd>
							</div>
						</dl>
						<p className="mt-1 text-sm text-gray-500">
							運費與稅金將會在結帳時一併計算。
						</p>
					</div>

					<div className="mt-10">
						<button
							type="submit"
							className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
						>
							結帳
						</button>
					</div>
				</section>
			</form>
		</div>
	);
}

function CartOriginal() {
	return (
		<div className="bg-white p-5 lg:w-[800px] lg:p-10 lg:rounded-xl lg:mx-auto">
			<h1 className="text-center text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				我的購物車
			</h1>

			<form className="mt-5 lg:mt-12">
				<section aria-labelledby="cart-heading">
					<h2 id="cart-heading" className="sr-only">
						購物車商品列表
					</h2>

					<ul
						role="list"
						className="divide-y divide-gray-200 border-b border-t border-gray-200"
					>
						{products.map((product) => (
							<li key={product.id} className="flex py-6">
								<div className="flex-shrink-0">
									<img
										alt={product.imageAlt}
										src={product.imageSrc}
										className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
									/>
								</div>

								<div className="ml-4 flex flex-1 flex-col sm:ml-6">
									<div>
										<div className="flex justify-between">
											<h3 className="text-sm">
												<a
													href={product.href}
													className="font-medium text-gray-700 hover:text-gray-800"
												>
													{product.name}
												</a>
											</h3>
											<p className="hidden lg:block ml-4 text-sm font-bold text-gray-900">
												NTD {product.price}
											</p>
										</div>
										<div className="flex gap-2 lg:flex-col lg:gap-0">
											<p className="mt-1 text-sm text-gray-500">
												{product.color}
											</p>
											<p className="mt-1 text-sm text-gray-500">
												{product.size}
											</p>
										</div>
									</div>

									<div className="mt-4 flex flex-1 items-end justify-between">
										<p className="flex items-center space-x-2 text-sm text-gray-700">
											{product.inStock ? (
												<CheckIcon
													aria-hidden="true"
													className="h-5 w-5 flex-shrink-0 text-green-500"
												/>
											) : (
												<ClockIcon
													aria-hidden="true"
													className="h-5 w-5 flex-shrink-0 text-gray-300"
												/>
											)}

											<span>
												{product.inStock
													? "尚有存貨"
													: `於 ${product.leadTime} 工作天後寄出`}
											</span>
										</p>
										<div className="hidden lg:block ml-4">
											<button
												type="button"
												className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
											>
												<span>移除</span>
											</button>
										</div>
									</div>
									<div className="flex justify-between mt-5 lg:hidden">
										<p className="text-sm font-bold text-gray-900">
											NTD {product.price}
										</p>
										<button
											type="button"
											className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
										>
											<span>移除</span>
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				</section>

				{/* Order summary */}
				<section aria-labelledby="summary-heading" className="mt-10">
					<h2 id="summary-heading" className="sr-only">
						購物明細
					</h2>

					<div>
						<dl className="space-y-4">
							<div className="flex items-center justify-between">
								<dt className="text-base font-medium text-gray-900">
									金額小計
								</dt>
								<dd className="ml-4 text-base font-bold text-gray-900">
									NTD {total}
								</dd>
							</div>
						</dl>
						<p className="mt-1 text-sm text-gray-500">
							運費與稅金將會在結帳時一併計算。
						</p>
					</div>

					<div className="mt-10">
						<button
							type="submit"
							className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
						>
							結帳
						</button>
					</div>
				</section>
			</form>
		</div>
	);
}
