import { useEffect, useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function useTitle(title) {
	return useEffect(() => {
		document.title = title;
		return () => {
			document.title = "A11y Demo";
		};
	}, []);
}

export function useTabParams(defaultTab = "") {
	const [searchParams, setSearchParams] = useSearchParams();
	const tabParamValue = searchParams.get("tab");
	const [currentTab, setCurrentTab] = useState(
		tabParamValue ? tabParamValue : defaultTab
	);
	const handleTabChange = (e) => {
		setCurrentTab(e);
		searchParams.set("tab", e);
		setSearchParams(searchParams);
	};

	useEffect(() => {
		if (!tabParamValue) {
			searchParams.set("tab", defaultTab);
			setSearchParams(searchParams);
		}
	}, []);

	return { currentTab, handleTabChange };
}
