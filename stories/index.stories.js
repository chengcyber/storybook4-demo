import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

import Btn from '../src/components/Button'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>{text('hello', 'Hello')} Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Btn', module)
  .add('test',
    withInfo({inline: true})(
      () => <Btn onClick={action('click')}>Halo</Btn>
    )
  )
