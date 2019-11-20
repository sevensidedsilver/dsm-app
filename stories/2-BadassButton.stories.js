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

export const secondary = () => (
    <BadassButton txt="Dispatch Green" level="2"></BadassButton>
)