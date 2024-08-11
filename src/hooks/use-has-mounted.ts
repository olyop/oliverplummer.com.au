import { useEffect, useState } from "react";

export const useHasMounted = () => {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		if (!hasMounted) {
			setHasMounted(true);
		}
	}, []);

	return hasMounted;
};
