type LogoutObserver = {
	subscribers: Array<VoidFunction>;
	subscribe: (handler: VoidFunction) => void;
	unsubscribe: (handler: VoidFunction) => void;
	notify: VoidFunction;
};

export const logoutObserver: LogoutObserver = {
	subscribers: [],

	subscribe(handler) {
		if (!this.subscribers.includes(handler)) {
			this.subscribers.push(handler);
		}
	},

	unsubscribe(handler) {
		this.subscribers = this.subscribers.filter(
			(subscriber) => subscriber === handler
		);
	},

	notify() {
		this.subscribers.forEach((handler) => handler());
	},
};
