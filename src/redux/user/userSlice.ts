import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/interface'
const initialState: IUser = {
  type: null,
  seeker: null,
  company: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.type = action.payload.type;
      if(state.type === 'seeker')state.seeker = action.payload.seeker;
      else state.company = action.payload.company;
    },
  },
})

export const userAction = userSlice.actions

export default userSlice.reducer
