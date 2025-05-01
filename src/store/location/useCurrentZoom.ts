import { create } from 'zustand';

type CurrentZoomState = {
	zoom: number;
	setZoom: (zoom: number) => void;
};

export const useCurrentZoom = create<CurrentZoomState>()((set) => ({
	zoom: 17,
	setZoom: (zoomValue) =>
		set((prevZoomState) => ({ ...prevZoomState, zoom: zoomValue })),
}));
