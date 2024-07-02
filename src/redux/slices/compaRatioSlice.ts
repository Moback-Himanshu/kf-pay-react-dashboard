import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CompaRatioState {
	compaRatio: any;

}

const initialState: CompaRatioState = {
	compaRatio: {} as any
};

export const compaRatioSlice = createSlice({
	name: 'compaRatio',
	initialState,
	reducers: {
		setCompaRatio(state, action: PayloadAction<any>) {
			state.compaRatio = action.payload;
		}
	},
});

export const { setCompaRatio } = compaRatioSlice.actions;
export const selectCompaRatio = (state: RootState) => state.compaRatio;
export default compaRatioSlice.reducer;