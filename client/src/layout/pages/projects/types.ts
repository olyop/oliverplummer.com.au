import { ContentItem } from "types";

export interface Project extends ContentItem {
	text: string;
	url: string | null;
	sourceCodeUrl: string | null;
	description: string;
	screenshots: string[];
}
