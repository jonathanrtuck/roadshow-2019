import { createStore } from 'redux';
import middleware from 'store/middleware';
import reducer from 'store/reducer';

/**
 * @type {object}
 */
export default createStore(
  reducer,
  {
    view: 'launcher',
  },
  middleware
);
