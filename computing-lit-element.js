import { computingMixin } from './src/computingMixin.js';
import { LitElement, html } from 'lit-element';

const ComputingLitElement = computingMixin(LitElement);
export { ComputingLitElement, html, computingMixin };
