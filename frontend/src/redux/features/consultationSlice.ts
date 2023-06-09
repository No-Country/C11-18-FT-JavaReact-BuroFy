import { Consultation, ObjectConsultation } from "@/interfaces/consultation";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ObjectConsultation = {
  consults: [
    {
      avatar: "",
      fullName: "",
      occupation: "",
      experience: "",
      date: "",
      id: "",
      idProfessional: "",
      idClient: "",
      status: "",
      price: "",
      phone: "",
      email: "",
      location: "",
      comments: "",
    },
  ],
};

const consultationSlice = createSlice({
  name: "consultation",
  initialState,
  reducers: {
    setConsultations: (state, action: PayloadAction<Consultation[]>) => {
      state.consults = action.payload;
    },
  },
});

export const { setConsultations } = consultationSlice.actions;
export default consultationSlice.reducer;
