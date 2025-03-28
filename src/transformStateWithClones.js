'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const states = [];
  let stateClones = { ...state };

  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'clear': {
        stateClones = {};
        break;
      }

      case 'addProperties': {
        stateClones = { ...stateClones, ...extraData };
        break;
      }

      case 'removeProperties': {
        for (const key of keysToRemove) {
          delete stateClones[key];
        }
        break;
      }

      default:
        break;
    }

    states.push({ ...stateClones });
  }

  return states;
}

module.exports = transformStateWithClones;
