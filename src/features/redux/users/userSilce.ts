import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ibases } from "../../../model/login/Ilogin";

interface UsersState {
  user: {
    username: string;
    codeEmpresa: number;
  };
  bases: Ibases[];
}

const initialState: UsersState = {
  user: {
    username: "",
    codeEmpresa: 0,
  },
  bases: [],
};

export const usersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    add_Bases: (state, action: PayloadAction<Ibases[]>) => {
      state.bases = action.payload;
    },
    add_Usuarios: (
      state,
      action: PayloadAction<{
        username: string;
        codeEmpresa: number;
      }>
    ) => {
      state.user = action.payload;
    },
    clear_All: (state) => {
      state.bases = [];
      state.user = {
        username: "",
        codeEmpresa: 0,
      };
    },
  },
});

export const { add_Usuarios, add_Bases, clear_All } = usersSlice.actions;
export default usersSlice.reducer;
