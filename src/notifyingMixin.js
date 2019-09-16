const CHANGED_EVENT_TYPE_REGEXP = /(.*)-changed/u,
	kebabCase = input => input.replace(/([a-z0-9])([A-Z])/gu, '$1-$2').toLowerCase(),
	notifyingMixin = baseClass =>
		class extends baseClass {
			constructor() {
				super();

				this.__notifyingProps = Object.entries(this.constructor.properties)
					.filter(([, value]) => value.notify === true)
					.map(([key]) => key);
			}
			notifyUpdateHelper(event) {
				const eventTypeRegexp = CHANGED_EVENT_TYPE_REGEXP.exec(event.type);
				if (eventTypeRegexp == null) {
					return;
				}
				const propUpdated = eventTypeRegexp[1];
				this[propUpdated] = event.detail.value;
			}
			updated(changedProperties) {
				super.updated();
				this.__notifyingProps
					.filter(prop => changedProperties.has(prop))
					.forEach(prop => {
						this.dispatchEvent(new CustomEvent(`${ kebabCase(prop) }-changed`, {
							composed: true,
							detail: {
								value: this[prop]
							}
						}));
					});
			}
		};

export { notifyingMixin };
