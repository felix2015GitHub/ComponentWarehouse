import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Input } from '../components/common';

import rootReducer from '../reducers';
import Page from '../pages/page';

const store = createStore(rootReducer, {}, window.devToolsExtension && window.devToolsExtension());

storiesOf('Compnents', module)
    .add('Button', () => (
      <Button cssName={'default'} onPress={action('clicked')} disabled={false}>OK</Button>
    ))
    .add('Input', () => (
      <Input cssName={'default'} disabled={false} value={''} placeholder={'text input'} onChangeText={action('changed')} />
    ))

storiesOf('React Redux Sample', module)
    .addDecorator((getStory) => (<Provider store={store}>
                                        { getStory() }
                               </Provider>
                                     ))
    .add('Sample Page', () => <Page />)
