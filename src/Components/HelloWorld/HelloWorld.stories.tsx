import React from 'react';
import HelloWorld from './HelloWorld';
import {withA11y} from "@storybook/addon-a11y";
import {withKnobs, text} from "@storybook/addon-knobs";

export default{
  title:'HelloWorld',
  decorators:[withA11y, withKnobs]
};

export const withName = () => <HelloWorld name={text('Manuel', 'Segismundo')} />;
