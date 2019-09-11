/* global describe, it */
import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { ComputingLitElement } from '../computing-lit-element.js';

class ComputingLitElementTester extends ComputingLitElement {
	static get properties() {
		return {
			prop1: {
				type: Number
			},
			prop2: {
				type: Number
			},
			computedProp1: {
				type: Number,
				computed: '_computeComputedProp1(prop1, prop2)'
			}
		};
	}

	constructor() {
		super();
		this.prop1 = 2;
		this.prop2 = 10;
	}

	_computeComputedProp1(prop1, prop2) {
		return prop1 * prop2;
	}
}

customElements.define('computing-lit-element-tester', ComputingLitElementTester);

describe('ComputingLitElement', () => {
	it('computes computedProp1 after prop1 is updated', async () => {
		const el = await fixture(html`
			<computing-lit-element-tester></computing-lit-element-tester>
		`);
		expect(el.computedProp1).to.equal(20);
		el.prop1 = 5;
		await elementUpdated(el);
		expect(el.computedProp1).to.equal(50);
	});
	/*
	it('has a default title "Hey there" and counter 5', async () => {
		const el = await fixture(html`
		<computing-lit-element></computing-lit-element>
		`);

		expect(el.title).to.equal('Hey there');
		expect(el.counter).to.equal(5);
	});

	it('shows initially the text "hey there Nr. 5!" and an "increment" button', async () => {
		const el = await fixture(html`
		<computing-lit-element></computing-lit-element>
	`);

		expect(el).shadowDom.to.equal(`
		<h2>Hey there Nr. 5!</h2>
		<button>increment</button>
	`);
	});

	it('increases the counter on button click', async () => {
		const el = await fixture(html`
		<computing-lit-element></computing-lit-element>
	`);
		el.shadowRoot.querySelector('button').click();

		expect(el.counter).to.equal(6);
	});

	it('can override the title via attribute', async () => {
		const el = await fixture(html`
		<computing-lit-element title="attribute title"></computing-lit-element>
	`);

		expect(el.title).to.equal('attribute title');
	});
*/
});
