import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListaContactosProvider from './components/context/ListaContactosContext.jsx'

createRoot(document.getElementById('root')).render(<ListaContactosProvider>
    <App />
</ListaContactosProvider>)
