import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

const initialState: any = {
  token:"",
  contracts:[]
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setToken: (state, token) => {
      state.token = token;
    },
    setContracts: (state, contracts) => {
      state.contracts = contracts;
    },
  },
})

export const globalAction = globalSlice.actions

export const getToken = (state: RootState) => state.global.token;
export const getContracts = (state: RootState) => state.global.contracts;

export default globalSlice.reducer


