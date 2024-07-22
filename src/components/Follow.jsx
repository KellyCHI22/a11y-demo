import { useState } from "react";
import { Link } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { cn, useTitle } from "../utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const person = {
	name: "Jane Cooper",
	title: "Traveling 🚀 Dreaming ✨",
	imageUrl:
		"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
};

const images = [
	{ url: "https://picsum.photos/id/231/200/200", alt: "" },
	{ url: "https://picsum.photos/id/232/200/200", alt: "" },
	{ url: "https://picsum.photos/id/233/200/200", alt: "" },
	{ url: "https://picsum.photos/id/234/200/200", alt: "" },
	{ url: "https://picsum.photos/id/235/200/200", alt: "" },
	{ url: "https://picsum.photos/id/236/200/200", alt: "" },
	{ url: "https://picsum.photos/id/237/200/200", alt: "" },
	{ url: "https://picsum.photos/id/238/200/200", alt: "" },
	{ url: "https://picsum.photos/id/239/200/200", alt: "" },
];

const FollowIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="2rem"
		height="2rem"
		viewBox="0 0 24 24"
	>
		<path
			fill="currentColor"
			d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4"
		/>
	</svg>
);

const FollowedIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="2rem"
		height="2rem"
		viewBox="0 0 24 24"
	>
		<path
			fill="currentColor"
			d="m21.1 12.5l1.4 1.41l-6.53 6.59L12.5 17l1.4-1.41l2.07 2.08zM10 17l3 3H3v-2c0-2.21 3.58-4 8-4l1.89.11zm1-13a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"
		/>
	</svg>
);

export default function Follow() {
	useTitle("追蹤/取消追蹤 | A11y Demo");
	return (
		<div className="container mx-auto">
			<div className="absolute top-5 left-5 flex gap-5">
				<Link to="/">返回首頁</Link>
			</div>
			<Tabs
				defaultValue="original"
				className="mt-16 lg:my-16 lg:w-[500px] lg:mx-auto"
			>
				<TabsList className="my-5 grid w-full grid-cols-2 lg:mb-5">
					<TabsTrigger value="original">原始版</TabsTrigger>
					<TabsTrigger value="improved">優化版</TabsTrigger>
				</TabsList>
				<TabsContent value="original">
					<FollowOriginal />
				</TabsContent>
				<TabsContent value="improved">
					<FollowImproved />
				</TabsContent>
			</Tabs>
		</div>
	);
}

function FollowImproved() {
	const [isFollowed, setIsFollowed] = useState(false);
	const handleFollowClick = () => setIsFollowed(!isFollowed);
	return (
		<div className="container mx-auto flex flex-col items-center">
			<div aria-live="polite" className="sr-only">
				{isFollowed ? `已追蹤${person.name}` : `已取消追蹤${person.name}`}
			</div>
			<div className="lg:w-[500px] lg:my-auto flex flex-col items-center divide-y divide-gray-200 lg:rounded-lg overflow-hidden bg-white text-center shadow">
				<div className="flex p-5 lg:p-8 w-full">
					<img
						alt={`avatar of ${person.name}`}
						src={person.imageUrl}
						className="h-20 w-20 lg:h-32 lg:w-32 flex-shrink-0 rounded-full"
					/>
					<div className="text-left ml-5 lg:ml-10">
						<h3 className="lg:mt-6 text-sm font-medium text-gray-900">
							{person.name}
						</h3>
						<dl className="mt-1 flex flex-grow flex-col justify-between">
							<dt className="sr-only">Title</dt>
							<dd className="text-sm text-gray-500">{person.title}</dd>
						</dl>
						<div className="flex gap-3 lg:mt-5">
							<a
								href="mailto:'hello@gmail.com'"
								className="bg-indigo-500 mt-5 inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent py-2 text-sm font-semibold text-white px-2 hover:bg-indigo-600"
							>
								<EnvelopeIcon className="w-8 h-8" />
							</a>
							<button
								onClick={handleFollowClick}
								aria-describedby="button-description"
								className={cn(
									"mt-5 inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent py-2 text-sm font-semibold text-white px-2 bg-indigo-500 hover:bg-indigo-600",
									{
										"bg-white border border-indigo-500 text-indigo-500 hover:bg-indigo-50":
											isFollowed,
									}
								)}
							>
								{isFollowed ? (
									<span className="sr-only">取消追蹤</span>
								) : (
									<span className="sr-only">追蹤</span>
								)}
								{isFollowed ? <FollowedIcon /> : <FollowIcon />}
							</button>
							<span id="button-description" className="sr-only">
								{isFollowed
									? `按下按鈕可取消追蹤${person.name}`
									: `按下按鈕可追蹤${person.name}`}
							</span>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-3">
					{images.map((image) => (
						<img key={image.url} src={image.url} alt={image.alt} />
					))}
				</div>
			</div>
		</div>
	);
}

function FollowOriginal() {
	const [isFollowed, setIsFollowed] = useState(false);
	const handleFollowClick = () => setIsFollowed(!isFollowed);
	return (
		<div className="container mx-auto flex flex-col items-center">
			<div className="lg:w-[500px] lg:my-auto flex flex-col items-center divide-y divide-gray-200 lg:rounded-lg overflow-hidden bg-white text-center shadow">
				<div className="flex p-5 lg:p-8 w-full">
					<img
						alt={`avatar of ${person.name}`}
						src={person.imageUrl}
						className="h-20 w-20 lg:h-32 lg:w-32 flex-shrink-0 rounded-full"
					/>
					<div className="text-left ml-5 lg:ml-10">
						<h3 className="lg:mt-6 text-sm font-medium text-gray-900">
							{person.name}
						</h3>
						<dl className="mt-1 flex flex-grow flex-col justify-between">
							<dt className="sr-only">Title</dt>
							<dd className="text-sm text-gray-500">{person.title}</dd>
						</dl>
						<div className="flex gap-3 lg:mt-5">
							<a
								href="mailto:'hello@gmail.com'"
								className="bg-indigo-500 mt-5 inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent py-2 text-sm font-semibold text-white px-2 hover:bg-indigo-600"
							>
								<EnvelopeIcon className="w-8 h-8" />
							</a>
							<button
								onClick={handleFollowClick}
								className={cn(
									"mt-5 inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent py-2 text-sm font-semibold text-white px-2 bg-indigo-500 hover:bg-indigo-600",
									{
										"bg-white border border-indigo-500 text-indigo-500 hover:bg-indigo-50":
											isFollowed,
									}
								)}
							>
								{isFollowed ? (
									<span className="sr-only">已追蹤</span>
								) : (
									<span className="sr-only">追蹤</span>
								)}
								{isFollowed ? <FollowedIcon /> : <FollowIcon />}
							</button>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-3">
					{images.map((image) => (
						<img key={image.url} src={image.url} alt={image.alt} />
					))}
				</div>
			</div>
		</div>
	);
}
