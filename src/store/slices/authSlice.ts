import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginResponse, ResetPasswordCodeVerify } from '../../types/auth';

interface authState {
  auth: LoginResponse;
  resetPass: ResetPasswordCodeVerify;
}

const initialState: authState = {
  auth: {} as LoginResponse,
  resetPass: {
    phone: '',
    code: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserLoginData: (state, action: PayloadAction<LoginResponse>) => {
      state.auth = action.payload;
    },
    setResetPassData: (state, action: PayloadAction<ResetPasswordCodeVerify>) => {
      state.resetPass = action.payload;
    },
  },
});

export const { setUserLoginData, setResetPassData } = authSlice.actions;

export default authSlice.reducer;
