import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import {
  Button,
  Input,
  Radio,
  RadioGroup
} from '../components/common';

import reactReduxSampleReducer from '../pages/ReactReduxSample/reducers';
import ReactReduxSample from '../pages/ReactReduxSample';
import Rent from '../pages/rent';
import LuckyPrice from '../pages/luckyPrice';

import WordsGameReducer from '../pages/WordsGame/reducers';
import WordsGame from '../pages/WordsGame';

const reactReduxSampleStore = createStore(reactReduxSampleReducer, {}, window.devToolsExtension && window.devToolsExtension());
const wordsGameStore = createStore(WordsGameReducer, {});

storiesOf('Compnents', module)
    .add('Button', () =>
        <Button className={'default'} onClick={action('clicked')} disabled={false}>OK</Button>
    )
    .add('Input', () =>
        <Input className={'default'} disabled={false} value={''} placeholder={'text input'} onChangeText={action('changed')} />
    )
    .add('Radio', () =>
        <RadioGroup name="test-radio">
          <Radio label="Test1" value="test1" />
          <Radio label="Test2" value="test2" />
          <Radio label="Test3" value="test3" />
        </RadioGroup>
    )

storiesOf('React Redux Sample', module)
    .addDecorator((getStory) =>
        <Provider store={reactReduxSampleStore}>
            { getStory() }
        </Provider>
    )
    .add('Sample Page', () => <ReactReduxSample />)

storiesOf('Words Game', module)
    .addDecorator((getStory) =>
        <Provider store={wordsGameStore}>
            { getStory() }
        </Provider>
    )
    .add('Words Game', () => <WordsGame />)

storiesOf('Find Rent', module)
    .add('Rent', () =>
        <Rent />
    )

storiesOf('Lucky Price', module)
    .add('Lucky Price', () =>
        <LuckyPrice />
    )
