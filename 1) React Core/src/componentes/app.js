import React from 'react';
import TarjetaFruta from './componentes/TarjetaFruta'

const App = () => (
  <div>
    <TarjetaFruta name = 'Sandia' price = {5.00}/>
    <TarjetaFruta name = 'Pedro' price = {2.50}/>
    <TarjetaFruta name = 'Simon' price = {3.25}/>
  </div>
)

export default App;