import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './Redux/Store.js'
import { ThemeProvider } from './Pages/themeProvider'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <ThemeProvider>

<Toaster
  position="top-center"
  reverseOrder={false}
/>


    <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
