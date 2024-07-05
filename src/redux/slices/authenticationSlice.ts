import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';


// initialize authToken from local storage
const authToken = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null ;
  
// Define a type for the slice state
interface AuthenticationState {
    isUserAuthenticated: boolean,
	authToken : any
	loginInfo : any
}

// Define the initial state using that type
const initialState: AuthenticationState = {
	isUserAuthenticated: false,
	authToken,
	loginInfo: {}
};


export const authenticationSlice = createSlice({
	name: 'authentication',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		logout: (state) => {
			state.isUserAuthenticated = false;
			delete state.authToken;
		},
		login: (state, action: PayloadAction<any>) => {
			state.isUserAuthenticated = true;
			state.authToken = action.payload.authToken;
			state.loginInfo = action.payload;
		},
	
	},
});

export const { login, logout } = authenticationSlice.actions;
// Create and export the selector:
export const selectAuthentication = (state: RootState) => state.authentication.isUserAuthenticated;
export const selectAuthorization = (state: RootState) => state.authentication.authToken;
export default authenticationSlice.reducer;