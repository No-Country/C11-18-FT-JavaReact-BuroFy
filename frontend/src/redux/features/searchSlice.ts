import { ObjectSearch, Search } from "@/interfaces/search";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ObjectSearch =
 {searchs : [{
   idProfessional: "",
   name: "",
   avatar: "",
   category: "",
   review :  null ,
   address : "",
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
