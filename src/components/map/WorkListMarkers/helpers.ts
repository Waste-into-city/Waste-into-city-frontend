export const getActualDistanceForZoom = (zoom: number) =>
	40000 / Math.pow(2, zoom - 7);
