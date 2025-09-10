import { BrowserRouter, Routes, Route } from "react-router-dom";
import StarsWarsAPI from './components/starwars/StarWarsAPI';
import DetailPeople from './components/starwars/DetailPeople';
import Error404 from './components/Error404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<StarsWarsAPI />} />
          <Route path={"/people/:id"} element={<DetailPeople />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
