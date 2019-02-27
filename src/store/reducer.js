import { get } from 'lodash-es';
import { VIEW_UPDATE } from 'store/action-types';

/**
 * @function
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
export default (state, action) => {
  switch (get(action, 'type')) {
    case VIEW_UPDATE:
      return {
        ...state,
        view: get(action, 'payload.value'),
      };

    default:
      return state;
  }
};
