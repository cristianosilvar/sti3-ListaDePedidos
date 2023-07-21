import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Chakra
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
// 3. extend the theme
const theme = extendTheme({ config })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ChakraProvider theme={{theme}}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
