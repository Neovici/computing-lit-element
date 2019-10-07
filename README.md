[![Build Status](https://github.com/Neovici/computing-lit-element/workflows/Github%20CI/badge.svg)](https://github.com/Neovici/computing-lit-element/actions?workflow=Github+CI)
[![Sauce Test Status](https://saucelabs.com/buildstatus/nomego)](https://saucelabs.com/u/nomego)
[![Maintainability](https://api.codeclimate.com/v1/badges/1e479d11b9dfd4af5331/maintainability)](https://codeclimate.com/github/Neovici/computing-lit-element/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1e479d11b9dfd4af5331/test_coverage)](https://codeclimate.com/github/Neovici/computing-lit-element/test_coverage)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Neovici/computing-lit-element)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Depfu](https://badges.depfu.com/badges/3d9fdd93d2fed32ed7b0233a694a2b42/count.svg)](https://depfu.com/github/Neovici/computing-lit-element?project_id=9625)

# \<computing-lit-element>
##### Adds computed properties functionality to LitElement.<p>
This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i computing-lit-element
```

## Usage
```html
<script type="module">
  import ComputingLitElement from 'computing-lit-element';
  
  class MyElement extends ComputingLitElement {
  	static get properties() {
    	return {
        	property1: {
            	type: Number
            },
           	property2: {
            	type: Number
            },
            computedProperty: {
            	type: Number,
                computed: 'computeComputedProperty(property1, property2)'
            }
       	};
    }
    constructor() {
    	super();
        this.property1 = 10;
        this.property2 = 5;
    }
    computeComputedProperty(property1, property2) {
    	return property1 * property2;
    }
  }
</script>
```
##### Or use the mixin
```
<script type="module">
  import computingMixin from 'computing-lit-element';
  import { LitElement } from 'lit-element';
  
  const ComputingLitElement = computingMixin(LitElement);
  ...
```

## Testing using karma (if applied by author)
```bash
npm run test
```

## Testing using karma via browserstack (if applied by author)
```bash
npm run test:bs
```

## Linting (if applied by author)
```bash
npm run lint
```
