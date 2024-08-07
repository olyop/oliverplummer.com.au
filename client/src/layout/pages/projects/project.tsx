/* eslint-disable jsx-a11y/media-has-caption */
import {
	ArrowTopRightOnSquareIcon,
	BeakerIcon,
	BoltIcon,
	CodeBracketIcon,
	EyeIcon,
	MinusIcon,
	PhotoIcon,
	VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Button from "components/button";
import Carousel from "components/carousel";
import Collapsible from "components/collapsible";
import ContentImage from "components/content-image";
import { FC, Fragment, PropsWithChildren, ReactNode } from "react";

import { Project as ProjectType } from "./types";

const ProjectSection: FC<PropsWithChildren<ProjectSectionProps>> = ({
	title,
	icon,
	children,
	className,
}) => (
	<div className="space-y-2 sm:space-y-4">
		<div className="flex items-center gap-2 sm:gap-4">
			{icon("size-6")}
			<h3 className="text-2xl">
				<b>{title}</b>
			</h3>
		</div>
		<div className={className}>{children}</div>
	</div>
);

interface ProjectSectionProps {
	title: string;
	icon: (iconClassName: string) => ReactNode;
	className?: string;
}

const Project: FC<ProjectProps> = ({ item }) => (
	<Collapsible
		id={item.code}
		title={item.label}
		imageNode={className => <ContentImage contentItem={item} className={className} />}
		text={item.text}
		contentClassName="space-y-12"
		content={
			<Fragment>
				<p className="text-lg">
					<i>{item.description}</i>
				</p>
				<ProjectSection
					title="Technologies"
					icon={iconClassName => <BoltIcon className={iconClassName} />}
					className="grid max-w-[35rem] grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] items-center gap-2"
				>
					{item.technologies.map(technology => (
						<div
							key={technology.code}
							className="border-primary flex items-center justify-center gap-2 rounded-xl border px-2 py-1 shadow-sm"
						>
							<ContentImage contentItem={technology} className="size-4" />
							<p className="text-nowrap text-sm">{technology.label}</p>
						</div>
					))}
				</ProjectSection>
				{item.features.length > 0 && (
					<ProjectSection
						title="Features"
						icon={iconClassName => <BeakerIcon className={iconClassName} />}
						className="ml-[0.1rem] flex flex-col items-start justify-center gap-2 pl-0.5 sm:ml-0"
					>
						{item.features.map(feature => (
							<div
								key={feature}
								className="flex items-center gap-[0.8rem] sm:gap-[1.375rem]"
							>
								<MinusIcon className="size-4" />
								<p className="text-sm">{feature}</p>
							</div>
						))}
					</ProjectSection>
				)}
				<div className="flex w-full flex-col items-stretch justify-stretch gap-4 sm:flex-row">
					{item.url && (
						<a href={item.url} target="_blank" rel="noreferrer">
							<Button
								text="View Project"
								ariaLabel="View Project"
								className="h-12 w-full gap-4 px-8 sm:w-[unset]"
								textClassName="mt-0.5"
								leftIcon={className => <EyeIcon className={className} />}
								rightIcon={className => (
									<ArrowTopRightOnSquareIcon className={className} />
								)}
							/>
						</a>
					)}
					{item.sourceCodeUrl && (
						<a href={item.sourceCodeUrl} target="_blank" rel="noreferrer">
							<Button
								text="Source Code"
								ariaLabel="Source Code"
								className="h-12 w-full gap-4 px-8 sm:w-[unset]"
								textClassName="mt-0.5"
								leftIcon={className => <CodeBracketIcon className={className} />}
								rightIcon={className => (
									<ArrowTopRightOnSquareIcon className={className} />
								)}
							/>
						</a>
					)}
				</div>
				{item.screenshots.length > 0 && (
					<ProjectSection
						title="Screenshots"
						icon={iconClassName => <PhotoIcon className={iconClassName} />}
					>
						<Carousel images={item.screenshots} className="h-[30rem] sm:h-[45rem]" />
					</ProjectSection>
				)}
				{item.screencasts.length > 0 && (
					<ProjectSection
						title="Videos"
						icon={iconClassName => <VideoCameraIcon className={iconClassName} />}
						className="flex flex-col"
					>
						{item.screencasts.map(screencast => (
							<video
								key={screencast}
								controls
								className="h-[30rem] w-full rounded-2xl object-cover sm:h-[50rem]"
							>
								<source src={screencast} type="video/webm" />
							</video>
						))}
					</ProjectSection>
				)}
			</Fragment>
		}
	/>
);

interface ProjectProps {
	item: ProjectType;
}

export default Project;
