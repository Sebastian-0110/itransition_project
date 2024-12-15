import { StrictMode, createContext, useState} from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

import App from './App.jsx'
import ThemeProvider from "./components/ThemeProvider.jsx";

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StrictMode>
			<ThemeProvider>
				<App/>
			</ThemeProvider>
		</StrictMode>
	</BrowserRouter>,
)
