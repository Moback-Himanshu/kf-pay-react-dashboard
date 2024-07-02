import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IUserInfo } from '../CommonInterfaces';

interface UserInfoState {
	userInfo: any;
	userAvatar: string;
	logoAvatar: string;
}

const initialState: UserInfoState = {
	userInfo: {} as any,
	userAvatar: '',
	logoAvatar: ''
};

export const userInfoSlice = createSlice({
	name: 'userInfo',
	initialState,
	reducers: {
		setActionUserInfo(state, action: PayloadAction<IUserInfo>) {
			state.userInfo = {...state.userInfo, ...action.payload};
			state.userInfo.selectedLocation = action.payload.locations[0];
		}
	},
});

export const { setActionUserInfo } = userInfoSlice.actions;
export const selectUserInfo = (state: RootState) => state.userInfo;
export default userInfoSlice.reducer;