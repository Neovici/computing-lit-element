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

## Demoing using storybook (if applied by author)
```bash
npm run storybook
```

## Linting (if applied by author)
```bash
npm run lint
```
