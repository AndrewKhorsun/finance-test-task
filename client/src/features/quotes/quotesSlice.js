import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client";

const initialState = {
  value: [],
  connect: true,
  modal : {open:false , modalValue: {}},
};

export const getQuotes = createAsyncThunk("quotes/getQuotes", (callback) => {
  const socket = io("http://localhost:4000", {});
  socket.emit("start");
  socket.on("ticker", callback);
});

export const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    setData: (state, action) => {
      if (state.connect) {
        if (state.value.length === 0) {
          state.value = action.payload;
        } else {
          const tickers = state.value.map((el) => el.ticker);
          state.value = action.payload.filter((el) => tickers.includes(el.ticker));
        }
      }
    },

    connected: (state, action) => {
      state.connect = action.payload;
    },

    deleteData: (state, action) => {
      state.value = state.value.filter((el) => el.ticker !== action.payload);
    },

    openModal: (state, action) => {
      state.modal = action.payload
    }
  },
});

export const { setData, connected, deleteData, openModal } = quotesSlice.actions;

export default quotesSlice.reducer;
