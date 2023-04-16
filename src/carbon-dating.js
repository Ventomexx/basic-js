const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(string) {
  const ln2 = 0.693;
  const activity = parseFloat(string);
  if (typeof string !== 'string' || isNaN(activity) || activity <= 0 || activity >= MODERN_ACTIVITY || /^\s*$/.test(string)) {
    return false;
  }
  const ratio = MODERN_ACTIVITY / activity;
  const age = Math.log(ratio) * HALF_LIFE_PERIOD / ln2;
  return Math.ceil(age);
}

module.exports = {
  dateSample
};
