import { combineReducers } from '@reduxjs/toolkit';
import { userLoginReducer, userRegisterReducer } from './userReducers';

export const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});
