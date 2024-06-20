import React from 'react';
import './App.scss';
import RoutesList from './containers/routes';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './assets/theme';

const App = () => {
	const theme = useSelector((state: any) => state.theme);
	return (
		<ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
			<RoutesList />
		</ThemeProvider>);
};

export default App;