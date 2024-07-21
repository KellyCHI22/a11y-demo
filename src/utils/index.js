import { useEffect } from "react";
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
