import { useState } from 'react';
import Efectos from './components/Efectos';
import TodoList from './components/TodoList';

function App() {
  const [visible, setVisible] = useState(true);

  const desmontarComponente = () => {
    setVisible(false);
  }

  return (
    <>
      {visible ? <Efectos nombre={"Nadia"} /> : ""}
      <button className="btn btn-danger" onClick={desmontarComponente}>Desmontar Componente!</button>
    </>
  )
}

export default App
