import { createStore, combineReducers } from 'redux';
import { composedWithDevTools } from 'redux-devtools-extension';

import { reducer as requestForm } from './request-form-reducer';
import { reducer as requestBody } from './request-body-reducer';
import { reducer as responseBody } from './response-body-reducer;'
import { reducer as history } from './history-reducer';

let reducer = combineReducers({
  requestForm,
  requestBody,
  responseBody,
  history,
});

export default function() {
  return createStore(reducer, composedWithDevTools);
}
