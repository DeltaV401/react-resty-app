import { createStore, combineReducers } from 'redux';
import { composedWithDevTools } from 'redux-devtools-extension';

import { reducer as requestForm } from './request-form-reducer';
import { reducer as requestBody } from './request-body-reducer';
import { reducer as login } from './login-reducer;'

let reducer = combineReducers({
  requestForm,
  requestBody,
  login,
});

export default function() {
  return createStore(reducer, composedWithDevTools);
}
