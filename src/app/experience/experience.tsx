import DocumentCheckIcon from "@heroicons/react/24/outline/DocumentCheckIcon";
import ListBulletIcon from "@heroicons/react/24/outline/ListBulletIcon";

import { Collapsible } from "@/components/collapsible";

import { determineDateStarted } from "./determine-date-started";
import { ExperienceItemChip } from "./experience-chip";
import { Experience } from "./types";

export function ExperienceItem({ item }: ExperienceItemProps) {
	return (
		<Collapsible
			id={item.code}
			key={item.code}
			title={item.label}
			text={determineDateStarted(item)}
			textClassName="flex items-center gap-2"
			imageNode={imageClassName => item.image(imageClassName)}
			contentClassName="flex flex-col items-start gap-4 md:gap-8"
			content={
				<>
					<div className="flex w-full flex-col gap-4 sm:flex-row">
						<ExperienceItemChip
							label="Role"
							text={item.role}
							icon={className => item.roleIcon(className)}
						/>
						<ExperienceItemChip
							label="Industry"
							text={item.industry}
							icon={className => item.industryIcon(className)}
						/>
					</div>
					<div>
						{item.description.map(description => (
							<p key={description} className="mb-4 last:mb-0">
								{description}
							</p>
						))}
					</div>
					{item.responsibilities && (
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2">
								<DocumentCheckIcon className="h-4 w-4" />
								<h1 className="text-lg">
									<u>Responsibilities</u>
								</h1>
							</div>
							<ul className="list-disc pl-8">
								{item.responsibilities.map(({ code, label, description }) => (
									<li key={code}>
										<p>
											<b>{label}</b>
											<br />
											{description}
										</p>
									</li>
								))}
							</ul>
						</div>
					)}
					{item.skillsLearned && (
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2">
								<ListBulletIcon className="h-4 w-4" />
								<h1 className="text-lg">
									<u>Learnings</u>
								</h1>
							</div>
							<ul className="list-disc pl-8">
								{item.skillsLearned.map(({ code, label, description }) => (
									<li key={code}>
										<p>
											<b>{label}</b>
											<br />
											{description}
										</p>
									</li>
								))}
							</ul>
						</div>
					)}
				</>
			}
		/>
	);
}

interface ExperienceItemProps {
	item: Experience;
}
