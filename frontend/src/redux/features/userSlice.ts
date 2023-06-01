import { Rol, User, UserInitial } from "@/interfaces/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    setRol: (state, action: PayloadAction<Rol>) => {
      state.rol = action.payload;
    },
    setUserInitial: (state, action: PayloadAction<UserInitial>) => {
      // six state
      state.firstName = action.payload.firstName;
      state.id = action.payload.id;
      state.id_token = action.payload.id_token;
      state.providerId = action.payload.providerId;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
    },
    logoutUser: (state) => {
      // all states of user
      state.id = "";
      state.id_token = "";
      state.email = "";
      state.rol = "";
      state.firstName = "";
      state.surName = "";
      state.rolContent = null;
      state.providerId = "";
      state.birthday = null;
      state.dni = "";
      state.phone = null;
      state.address = null;
      state.avatar = null;
      state.verified = false;
    },
  },
});

export const { setRol, setUserInitial, logoutUser} = userSlice.actions;
export default userSlice.reducer;
