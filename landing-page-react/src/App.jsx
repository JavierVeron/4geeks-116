import CarritoContext from './components/CarritoContext';
import ContadorConReducer from './components/ContadorConReducer';
import Error404 from './components/Error404';
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
          <Route path={"/carrito"} element={<CarritoContext />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
