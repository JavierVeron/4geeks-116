import Error404 from './components/Error404';
import ContactsContainer from './components/ContactsContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<ContactsContainer />} />
          <Route path={"/contact"} element={<ContactsContainer />} />
          {/* <Route path={"/addcontact"} element={<Productos />} />
          <Route path={"/addcontact/:id"} element={<Productos />} /> */}
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
