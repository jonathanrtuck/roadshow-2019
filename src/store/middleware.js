import { applyMiddleware } from 'redux';
import { get } from 'lodash-es';

/**
 * @function
 * @param {object} store
 * @returns {function}
 * @see https://redux.js.org/docs/api/applyMiddleware.html
 * @see https://redux.js.org/docs/advanced/Middleware.html
 */
export default applyMiddleware((store) => (next) => (action) => {
  console.info(action);

  switch (get(action, 'type')) {
    default:
      next(action);
  }
});
