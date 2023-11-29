import { RefCallback, useCallback, useRef, useState } from "react";

export const useHover = <T extends HTMLElement>() => {
	const [hovering, setHovering] = useState(false);
	const previousNode = useRef<T | null>(null);

	const handleMouseEnter = useCallback(() => {
		setHovering(true);
	}, []);

	const handleMouseLeave = useCallback(() => {
		setHovering(false);
	}, []);

	const customRef = useCallback<RefCallback<T>>(
		node => {
			if (previousNode.current?.nodeType === Node.ELEMENT_NODE) {
				previousNode.current.removeEventListener("mouseenter", handleMouseEnter);
				previousNode.current.removeEventListener("mouseleave", handleMouseLeave);
			}

			if (node?.nodeType === Node.ELEMENT_NODE) {
				node.addEventListener("mouseenter", handleMouseEnter);
				node.addEventListener("mouseleave", handleMouseLeave);
			}

			previousNode.current = node;
		},
		[handleMouseEnter, handleMouseLeave],
	);

	return [customRef, hovering] as const;
};
