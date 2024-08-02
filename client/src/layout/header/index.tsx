import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Button from "components/button";
import { Breakpoint } from "hooks/use-breakpoint";
import Navigation from "layout/navigation";
import { FC } from "react";

import Contact from "./contact";
import ThemeButton from "./theme";
import Title from "./title";

const Header: FC<HeaderProps> = ({ breakpoint, sidebar, onToggleSidebar }) => (
	<header
		className={clsx(
			"border-primary h-header xl bg-elevated-hsla fixed left-0 top-0 z-50 m-0 w-screen border-b pr-[var(--scrollbar-width)] backdrop-blur-sm backdrop-saturate-[180%] sm:shadow",
		)}
	>
		<div
			className={clsx(
				"flex h-full items-center justify-between",
				sidebar === null
					? "container relative mx-auto px-4"
					: "px-4 md:pl-8 md:pr-8 lg:pl-4",
			)}
		>
			<div className="flex h-full items-center gap-4 md:gap-4">
				<Button
					isTransparent
					ariaLabel="Menu"
					iconClassName="size-10"
					className="!size-12"
					onClick={onToggleSidebar}
					leftIcon={iconClassName =>
						sidebar ? (
							<XMarkIcon className={iconClassName} />
						) : (
							<Bars3Icon className={iconClassName} />
						)
					}
				/>
				{sidebar === null && breakpoint === Breakpoint.LARGE ? null : <Title />}
			</div>
			<Navigation
				sidebar={sidebar}
				className={clsx(
					"absolute left-1/2 top-1/2 flex h-full -translate-x-1/2 -translate-y-1/2 items-center",
					sidebar === null ? "pointer-events-auto visible" : "pointer-events-none hidden",
				)}
			/>
			<div className="flex items-center gap-4">
				<ThemeButton sidebar={sidebar} />
				<Contact sidebar={sidebar} />
			</div>
		</div>
	</header>
);

export interface HeaderProps {
	breakpoint: Breakpoint;
	sidebar: boolean | null;
	onToggleSidebar: () => void;
}

export default Header;
