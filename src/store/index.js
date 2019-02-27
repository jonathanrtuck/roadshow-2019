import { createStore } from 'redux';
import reducer from 'store/reducer';

/**
 * @constant
 * @type {object}
 */
const initialState = {
  view: 'launcher',
};

/**
 * @type {object}
 */
export default createStore(reducer, initialState);
