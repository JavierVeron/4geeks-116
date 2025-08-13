import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Titulo from './Titulo'
import Proyecto from './Proyecto'
import Contador from './Contador'
import Carrito from './Carrito'
import CiclosDeVida from './CiclosDeVida'
import { useState } from 'react'
import Jumbotron from './Jumbotron'
import Card from './Card'

function App() {
  const [visible, setVisible] = useState(true);

  const desmontarComponente = () => {
    setVisible(false);
  }

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <img src="https://mcdonalds.es/api/cms/images/Z4mecpbqstJ99jC5_Hero-bigmac.png" alt="Big Mac" width={200} />
        <img src="/images/Cuarto-de-Libra-BBQ_desk.webp" alt="Cuarto de Libra BBQ" width={200} />
      </div>
      <Titulo academia={"4Geeks Academy"} />
      <Proyecto /> */}
      {/* <Contador /> */}
      {/* <Carrito /> */}
      {visible ? <CiclosDeVida /> : ""}
      <button className="btn btn-primary" onClick={desmontarComponente}>Desmontar</button>
      <Jumbotron />
      <div className="container my-5">
        <div className="row">
          <Card imagen={"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202506/02/00151021100626____5__967x1200.jpg?impolicy=Resize&width=1200"} titulo={"Woman El Corte Inglés"} descripcion={"Falda larga estampada de mujer"} />
          <Card imagen={"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202506/02/00151021100626____3__967x1200.jpg?impolicy=Resize&width=1200"} titulo={"Woman El Corte Inglés #2"} descripcion={"Falda larga estampada de mujer #2"} />
          <Card imagen={"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202506/02/00151021100626____4__967x1200.jpg?impolicy=Resize&width=1200"} titulo={"Woman El Corte Inglés #3"} descripcion={"Falda larga estampada de mujer #3"} />
          <Card imagen={"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202506/02/00151021100626____4__967x1200.jpg?impolicy=Resize&width=1200"} titulo={"Woman El Corte Inglés #3"} descripcion={"Falda larga estampada de mujer #3"} />
        </div>
      </div>
    </>
  )
}

export default App
