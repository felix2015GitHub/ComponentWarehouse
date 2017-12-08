import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { ButtonComponent, Input } from '../components/common';

storiesOf('Welcome', module)
  .add('to storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ))

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));

storiesOf('Compnents', module)
  .add('Button', () => (
    <ButtonComponent cssName={'default'} onPress={action('clicked')} disabled={false}>OK</ButtonComponent>
  ))
  .add('Input', () => (
    <Input cssName={'default'} disabled={false} value={''} placeholder={'text input'} onChangeText={action('changed')} />
  ))
