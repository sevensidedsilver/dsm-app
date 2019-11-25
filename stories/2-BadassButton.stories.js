import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs';

import BadassButton from '../src/components/BadassButton/BadassButton';

// export default {
//     title: 'BadassButton'
// }

export const badass = () => (
    <BadassButton txt="NEAT"></BadassButton>
)

export const disabled = () => (
    <BadassButton txt="OOF" disabled={true}></BadassButton>
)

export const secondary = () => (
    <BadassButton txt="Dispatch Green" level="2"></BadassButton>
)

storiesOf('Badass Button', module)
    .add(
        'basic',
        () => (
            badass()
        )
    )
    .add(
        'disabled',
        () => (
            disabled()
        )
    )
    .add('secondary', ()=>(secondary()))