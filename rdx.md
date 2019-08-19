redux
npm install react-redux
Middleware adds extra functionality to the Redux dispatch function; enhancers add extra functionality to the Redux store
redux-thunk is a middleware that allows you to write action creators (we’ll get to this in a bit) that return a function. The returned function receives two store (we’ll also talk more on this) methods: dispatch and getState as parameters..
npm install --save redux-thunk

Middleware/logger.js
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export default logger
