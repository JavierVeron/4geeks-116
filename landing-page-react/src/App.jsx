import MiCuenta from './components/MiCuenta';
import NavBar from './components/NavBar';
import Producto from './components/Producto';
import Productos from './components/Productos';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Productos />} />
          <Route path={"/productos"} element={<Productos />} />
          <Route path={"/productos/:id"} element={<Productos />} />
          <Route path={"/producto/:productoId"} element={<Producto />} />
          <Route path={"/mi-cuenta"} element={<MiCuenta />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
