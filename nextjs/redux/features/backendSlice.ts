import { BACKENDLIST_BASEURL } from '@/utils/constants';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface BackendState {
  value: string;
  baseURL: string;
}

const initialState: BackendState = {
  value: 'Laravel',
  baseURL: 'http://localhost:9005/api/',
};

export const backendSlice = createSlice({
  name: 'backend',
  initialState,
  reducers: {
    changeBackEnd: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      state.baseURL = BACKENDLIST_BASEURL[action.payload];
    },
  },
});

export const { changeBackEnd } = backendSlice.actions;

export default backendSlice.reducer;
