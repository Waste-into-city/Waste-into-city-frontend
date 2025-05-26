export const cardWindowEvents: Record<
	'start' | 'move' | 'end',
	Array<keyof WindowEventMap>
> = {
	start: ['mousedown', 'touchstart'],
	move: ['mousemove', 'touchmove'],
	end: ['mouseup', 'touchend'],
};

export const CHOICE_BORDER = 0.1;
