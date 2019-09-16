import { computingMixin } from './src/computingMixin.js';
import { notifyingMixin } from './src/notifyingMixin.js';
import { LitElement, html } from 'lit-element';

const ComputingLitElement = computingMixin(LitElement),
	NotifyingLitElement = notifyingMixin(LitElement);

export {
	ComputingLitElement,
	NotifyingLitElement,
	html,
	computingMixin,
	notifyingMixin
};
