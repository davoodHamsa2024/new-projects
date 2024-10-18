import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import walletSlice from "./walletSlice";

const Slices = combineReducers({
  User: userSlice,
  Wallet: walletSlice,
});
export default Slices;
