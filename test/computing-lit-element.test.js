/* global describe, it */
import {
	html, fixture, expect, elementUpdated
} from '@open-wc/testing';
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
			dependentComputedProp: {
				type: Number,
				computed: '_computeComputedProp1(prop1, computedProp1)'
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

class MoreAdvancedComputingLitElementTester extends ComputingLitElementTester {
	static get properties() {
		return {
			computedProp2: {
				type: Number,
				computed: '_computeComputedProp1(prop2, computedProp1)'
			}
		};
	}
}

customElements.define('more-advanced-computing-lit-element-tester', MoreAdvancedComputingLitElementTester);

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

	it('computes props in the correct order (dependencies first)', async () => {
		const el = await fixture(html`
			<computing-lit-element-tester></computing-lit-element-tester>
		`);

		expect(el.dependentComputedProp).to.equal(40);

		el.prop1 = 5;
		await elementUpdated(el);
		expect(el.dependentComputedProp).to.equal(250);
	});

	it('handles inherited computed props', async () => {
		const el = await fixture(html`
			<more-advanced-computing-lit-element-tester></more-advanced-computing-lit-element-tester>
		`);

		expect(el.computedProp2).to.equal(200);

		el.prop1 = 5;
		await elementUpdated(el);
		expect(el.computedProp2).to.equal(500);
	});
});
