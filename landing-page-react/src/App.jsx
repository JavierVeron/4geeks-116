import { useEffect, useState, useSyncExternalStore } from 'react';
import SecondsCounter from './SecondsCounter'

function App() {
  const [segundero, setSegundero] = useState(0);
  const [detener, setDetener] = useState(false);

  /* useEffect(() => {
      setTimeout(() => {
          //console.log("Hola 4Geeks!");
          //setSaludo("Hola! Estamos viendo React en 4Geeks!")
          
      }, segundos)
  }, []) */

  /* useEffect(() => {
      
  }) */

  const contador = setInterval(() => {
          setSegundero(segundero + 1);

          if (detener) {
            console.log("hola");
            
            clearInterval(contador);
            setSegundero(0);
          }
  }, 1000)

  const DetenerContador = () => {
    setDetener(true);
  }

  return (
    <>
      <SecondsCounter segundos={segundero} />
      <button className='btn btn-primary' onClick={DetenerContador}>Detener</button>

    </>
  )
}

export default App
