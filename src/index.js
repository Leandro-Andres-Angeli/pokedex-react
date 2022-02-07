import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/system';
import { custom_theme } from './theme/custom_theme';
import CssBaseline from '@mui/material/CssBaseline';
ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<ThemeProvider theme={custom_theme}>
				<CssBaseline>
					<App />
				</CssBaseline>
			</ThemeProvider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
