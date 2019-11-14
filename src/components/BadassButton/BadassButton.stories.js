import React from 'react';
import { action } from '@storybook/addon-actions';
import { BadassButton } from './BadassButton'
import './BadassButton.scss';

export default {
    title: 'Button',
};

export const text = () => 
    (
        <BadassButton onClick={action('clicked')}>Hello Button</BadassButton>
    );

export const emoji = () => (
    <BadassButton onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
    </span>
    </BadassButton>
);
