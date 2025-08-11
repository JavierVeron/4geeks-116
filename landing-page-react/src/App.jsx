import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './Titulo'
import Proyecto from './Proyecto'

function App() {
  return (
    <>
      <div>
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
      <Proyecto />
    </>
  )
}

export default App
