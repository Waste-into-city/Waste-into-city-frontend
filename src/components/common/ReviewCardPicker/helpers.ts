export const getPositionFromMoveEvent = (event: Event): [number, number] => {
	if (event instanceof TouchEvent) {
		return [event.touches[0].clientX, event.touches[0].clientY];
	}
	if (event instanceof MouseEvent) {
		return [event.clientX, event.clientY];
	}
	return [0, 0];
};

export const isPointInElement = (
	element: HTMLElement,
	[pointX, pointY]: [number, number]
): boolean => {
	const { x, y, width, height } = element.getBoundingClientRect();
	return (
		x <= pointX &&
		x + width >= pointX &&
		y <= pointY &&
		y + height >= pointY
	);
};

export const getMovePercentPath = (path: number, block: HTMLElement | null) =>
	block && block.clientWidth ? path / block.clientWidth : 0;

export const isElementScrollable = (element: HTMLElement) =>
	element.clientWidth !== element.scrollWidth ||
	element.clientHeight !== element.scrollHeight;
