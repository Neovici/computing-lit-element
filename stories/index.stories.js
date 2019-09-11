import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { ComputingLitElement } from '../computing-lit-element.js';

storiesOf('computing-lit-element', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(ComputingLitElement))
  .add(
    'Alternative Title',
    () => html`
      <computing-lit-element .title=${'Something else'}></computing-lit-element>
    `,
  );
