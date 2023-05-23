import { User } from "@/interfaces/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialUser = Pick<User, "id" | "id_token" | "providerId" | "firstName" | "email">;

const initialState: User = {
  id: "",
  id_token: "",
  email: "",
  rol: "",
  firstName: "",
  surName: "",
  rolContent: null,
  providerId: "",
  birthday: null,
  dni: "",
  phone: null,
  address: null,
  avatar: null,
  verified: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRol: (state, action: PayloadAction<string>) => {
      state.rol = action.payload;
    },
    setUserInitial: (state, action: PayloadAction<initialUser>) => {
      // five state
      state.firstName = action.payload.firstName;
      state.id = action.payload.id;
      state.id_token = action.payload.id_token;
      state.providerId = action.payload.providerId;
      state.email = action.payload.email;
      console.log(state);
    },
  },
});

export const { setRol, setUserInitial } = userSlice.actions;
export default userSlice.reducer;
