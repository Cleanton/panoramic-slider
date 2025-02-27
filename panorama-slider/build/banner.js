const date = new Date();
const formatter = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'long',
  day: '2-digit',
});

module.exports = `${`
/**
 * UI Initiative Panorama Slider
 *
 * Infinite 3D panorama slider
 *
 * https://uiinitiative.com
 *
 * Copyright ${date.getFullYear()} UI Initiative
 *
 * Released under the UI Initiative Regular License
 *
 * ${formatter.format(date)}
 */
`.trim()}\n`;
