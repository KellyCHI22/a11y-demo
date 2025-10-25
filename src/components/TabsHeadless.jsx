import * as React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { cn } from "../utils";

const Tabs = ({ children, ...props }) => (
	<TabGroup {...props}>{children}</TabGroup>
);

const TabsList = React.forwardRef(({ className, children, ...props }, ref) => (
	<TabList
		ref={ref}
		className={cn(
			"inline-flex h-10 items-center justify-center lg:rounded-md bg-zinc-700 p-1 text-white",
			className
		)}
		{...props}
	>
		{children}
	</TabList>
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<Tab
			ref={ref}
			className={({ selected }) =>
				cn(
					"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-zinc-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
					selected
						? "bg-[#242424] text-foreground shadow-sm"
						: "text-white hover:bg-zinc-600",
					className
				)
			}
			{...props}
		>
			{children}
		</Tab>
	)
);
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<TabPanels {...props} ref={ref}>
			<TabPanel
				className={cn(
					"ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
					className
				)}
			>
				{children}
			</TabPanel>
		</TabPanels>
	)
);
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
