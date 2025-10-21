import { useState } from 'react'
import './App.css'

function App() {
  const [mensaje, setMensaje] = useState('');
  const [cargador , setCargador] = useState(['','','','','','']);
  function agregarBala() {
    const nuevoCargador= [...cargador];
    let i = 0;
    for(const bala of nuevoCargador){
       if (bala === ''){
        nuevoCargador[i] = '💥';
        setCargador(nuevoCargador);
        return;
      }
      i ++;
    }
  }
  function quitarBala() {
  const nuevoCargador= [...cargador];
    let i = 0;
    for(const bala of nuevoCargador){
       if (bala === '💥'){
        nuevoCargador[i] = '';
        setCargador(nuevoCargador);
        return;
      }
      i ++;
    }}
  function disparar(){
  
    let numeroAleatorio = Math.floor(Math.random() * 6);

    if ( cargador[numeroAleatorio] === '💥'){
        setMensaje('Haz muerto');
    } else {
        setMensaje('ufff al palo')
    }

  }
  function huir(){
  
    const numeroAleatorio = Math.floor(Math.random() * 2);

    if (numeroAleatorio == 1){
      setMensaje('¡Escapaste sin problemas!')

    } else 

    setMensaje('No puedes escapar')

  }
              
  return (
    <div> 
      <div>
        <p>Cargador: [{cargador.join('')}]</p>
      </div>
      <div>
          <p>{mensaje}</p>
      </div>
      <div>
          <button onClick={agregarBala} >Añadir bala</button>
          <button onClick={quitarBala}>Quitar bala</button>
          <button onClick={disparar}>Disparar</button>
          <button onClick={huir}>Huir</button>
      </div>
    </div>
  )
}

export default App
