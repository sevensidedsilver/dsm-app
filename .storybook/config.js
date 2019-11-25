
// automatically import all files ending in *.stories.js
// configure(require.context('../stories', true, /\.stories\.js$/), module);

import { configure, addDecorator, addParameters } from '@storybook/react';
import { initDsm } from '@invisionapp/dsm-storybook';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

//Init Dsm
initDsm({
    addDecorator,
    addParameters,
    callback: () => configure(loadStories, require.context('../stories', true, /\.stories\.js$/), module)
});