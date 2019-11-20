import React from 'react';

import BadassButton from '../src/components/BadassButton/BadassButton';

export default {
    title: 'BadassButton'
}

export const badass = () => (
    <BadassButton txt="NEAT"></BadassButton>
)

export const disabled = () => (
    <BadassButton txt="OOF" disabled={true}></BadassButton>
)