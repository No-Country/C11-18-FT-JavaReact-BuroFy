import { Rol, User, UserInitial, Verified } from "@/interfaces/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
  id: "",
  id_token: "",
  email: "",
  rol: "",
  fullName: "",
  surName: "",
  rolContent: null,
  providerId: "",
  birthday: null,
  phone: null,
  address: null,
  avatar: null,
  verified: "no-authenticated",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRol: (state, action: PayloadAction<Rol>) => {
      state.rol = action.payload; 
      console.log("payload",action.payload);
    },
    setVerified: (state, action: PayloadAction<Verified>) => {
      state.verified = action.payload;
    },
    setUserInitial: (state, action: PayloadAction<UserInitial>) => {
      // seven state
      state.fullName = action.payload.fullName;
      state.id = action.payload.id;
      state.id_token = action.payload.id_token;
      state.providerId = action.payload.providerId;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.rol = action.payload.rol;
      state.rolContent = action.payload.rolContent;
      
    },
    setCredentials: (state, action: PayloadAction<User>) => {
      state.fullName = action.payload.fullName;
      state.id = action.payload.id;
      state.id_token = action.payload.id_token;
      state.providerId = action.payload.providerId;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.rol = action.payload.rol;
      state.rolContent = action.payload.rolContent;
      state.address = action.payload.address || null;
      state.phone = action.payload.phone || null;
      state.birthday = action.payload.birthday || null;
      
    },
    logoutUser: (state) => {
      // all states of user
      state.id = "";
      state.id_token = "";
      state.email = "";
      state.rol = "";
      state.fullName = "";
      state.surName = "";
      state.rolContent = null;
      state.providerId = "";
      state.birthday = null;
      state.phone = null;
      state.address = null;
      state.avatar = null;
      state.verified = "no-authenticated";
    },
  },
});

export const { setRol, setUserInitial, logoutUser, setVerified, setCredentials } =
  userSlice.actions;
export default userSlice.reducer;
