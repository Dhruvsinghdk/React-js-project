import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Store from './Ecommerce/Store.jsx';
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
 <App />
    </Provider>
   

  </StrictMode>,
)
