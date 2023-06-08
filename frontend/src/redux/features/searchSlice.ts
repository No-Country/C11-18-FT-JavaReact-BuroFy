import { ObjectSearch, Search } from "@/interfaces/search";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ObjectSearch =
 {searchs : [{
   id: "",
   fullName: "",
   avatar: "",
   experience: "",
   rating :  null ,
   location : "",
   price: ""
 }]};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<Search[]>) => {
      state.searchs = action.payload;
      console.log(state);
    },
  },
});

export const {setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
