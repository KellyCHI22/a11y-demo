import React from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../utils";

const pages = [
	{ to: "/cart", text: "我的購物車" },
	{ to: "/more", text: "查看更多" },
	{ to: "/follow", text: "追蹤/取消追蹤" },
	{ to: "/heading", text: "定位點" },
	{ to: "/table", text: "表格" },
];

export default function Home() {
	useTitle("A11y Demo");
	return (
		<div className="px-5 grid place-items-center h-screen w-screen lg:px-0">
			<div>
				<h1 className="text-5xl" tabIndex="-1">
					A11y Demo
				</h1>
				<ul className="my-10 flex flex-col gap-3 lg:gap-0 lg:flex-row">
					{pages.map((page, index) => (
						<li key={page.to}>
							<Link
								to={page.to}
								className="text-indigo-300 hover:text-indigo-400 inline-block"
							>
								{page.text}
							</Link>
							{index !== pages.length - 1 ? (
								<span className="hidden lg:inline-block lg:mx-5">|</span>
							) : (
								""
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
