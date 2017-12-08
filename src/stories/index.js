import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Input } from '../components/common';

// storiesOf('Welcome', module)
//   .add('to storybook', () => (
//     <Welcome showApp={linkTo('Button')} />
//   ))

storiesOf('Compnents', module)
  .add('Button', () => (
    <Button cssName={'default'} onPress={action('clicked')} disabled={false}>OK</Button>
  ))
  .add('Input', () => (
    <Input cssName={'default'} disabled={false} value={''} placeholder={'text input'} onChangeText={action('changed')} />
  ))
