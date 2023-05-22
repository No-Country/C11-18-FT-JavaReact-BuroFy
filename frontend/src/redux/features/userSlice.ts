import { User } from "@/interfaces/user";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
    id: "",
    id_token: "",
    email: "",
    rol: "",
    firstName: "",
    surName: "",
    rolContent: null,
    birthday: null,
    dni: "",
    phone: null,
    address: null,
    avatar: null,
    verified: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})

export default userSlice.reducer