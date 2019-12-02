import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs';

import BlueButton from '../src/components/BlueButton/BlueButton';
import BadassButton from '../src/components/BadassButton/BadassButton';


storiesOf('BlueButton', module)
    .add(
        'with emoji',
        () => (
            <BadassButton txt="dsm button"></BadassButton>
        ),
        {
            'in-dsm': {
                id: '5dc45ba8968fb6328dc2f712'
            }
        }
    )
    .add(
        'basic text',
        () => (
            <BlueButton txt="buttontxt"/>
        )
    )

export default {
    title: 'BlueButton'
}

export const Blue = () => (
    <BlueButton txt="FUCK"></BlueButton>
)

export const disabled = () => (
    <BlueButton txt="OOF" disabled={true}></BlueButton>
)

export const secondary = () => (
    <BlueButton txt="Dispatch Green" level="2"></BlueButton>
)


