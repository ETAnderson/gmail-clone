import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mail/mailSlice';
// devToolsEnhancer is for the redux devtools extenstion in chromium
// eslint-disable-next-line
import { devToolsEnhancer } from 'redux-devtools-extension';


export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
  // eslint-disable-next-line
  devToolsEnhancer(){}
});
