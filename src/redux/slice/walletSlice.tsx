// walletSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { clear } from "console";

const walletSlice = createSlice({
  name: "Wallet",
  initialState: {
    balance: 0,
    transactions: [] as any,
  },
  reducers: {
    addFunds: (state, action) => {
      const amount = Number(action.payload.amount);
      if (!isNaN(amount)) {
        state.balance += amount;
        state.transactions = {
          type: "initialDeposit",
          transactionId: action.payload.id,
          amount: amount,
          date: new Date().toISOString(),
        };
      }
    },
    withdrawFunds: (state, action) => {
      state.balance -= action.payload.amount;
      state.transactions.push({
        type: "withdraw",
        amount: action.payload.amount,
        date: new Date().toISOString(),
      });
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    clearWallet: (state) => {
      state.balance = 0;
      state.transactions = [];
    },
  },
});

export const { addFunds, withdrawFunds, setTransactions, clearWallet } =
  walletSlice.actions;
export default walletSlice.reducer;
