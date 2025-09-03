import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import CartContextProvider from './components/context/CartContext.jsx'
import CartContextReducerProvider from './components/context/CartContextReducer.jsx'

createRoot(document.getElementById('root')).render(<CartContextReducerProvider>
    <App />
</CartContextReducerProvider>)
