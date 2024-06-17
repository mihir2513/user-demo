/* eslint-disable no-unused-vars */
const delayMiddleware = store => next => async action => {
      if (action.type.endsWith('/pending')) {
          // Simulate a delay for pending actions
          await new Promise(resolve => setTimeout(resolve, 5000));
      }
      return next(action);
  };
  
  export default delayMiddleware;
  