import { configure, addDecorator, setAddon } from '@storybook/react';
// import { setOptions } from '@storybook/addon-options';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

// setOptions({
//   name: 'blitz-ui',
//   title: 'blitz-ui',
//   url: '#',
// })

// setDefaults({
//   inline: true,
//   header: false,
//   source: true,
//   maxPropsIntoLine: 1,
// })

// setAddon(infoAddon)

addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
