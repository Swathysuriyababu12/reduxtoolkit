import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Get all user action
export const getAllProducts = createAsyncThunk("getProducts", async (args) => {
  try {
    const response = await fetch(
      `https://6461c1c2491f9402f4aa0565.mockapi.io/products/${args}`
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
});

export const getProducts = createSlice({
  name: "getProducts",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    pro: (state, action) => {
      state.loading = true;
    },
  },
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.loading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleProduct = [];
      state.products = action.payload;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { pro } = getProducts.actions;
export default getProducts.reducer;
