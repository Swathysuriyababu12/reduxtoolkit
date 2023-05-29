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

export const getmainProducts = createAsyncThunk("getmainProducts", async () => {
  try {
    const response = await fetch(
      `https://6461c1c2491f9402f4aa0565.mockapi.io/products/`
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
});

export const createProduct = createAsyncThunk("createProduct", async (args) => {
  console.log(args);
  const response = await fetch(
    `https://6461c1c2491f9402f4aa0565.mockapi.io/products`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    }
  );
  const result = await response.json();
  return result;
});

export const getProducts = createSlice({
  name: "getProducts",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    // fulfilled: (state, action) => {
    //   state.loading = true;
    //   state.products = action.payload;
    // },
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
    [getmainProducts.pending]: (state) => {
      state.loading = true;
    },
    [getmainProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleProduct = [];
      state.products = action.payload;
    },
    [getmainProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    },
  },
});

//export const { fulfilled } = getProducts.actions;
export default getProducts.reducer;
