import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";

/* const name = 'Simon Briceño'
const App = <h1>Hola { name }</h1> */
/* const TarjetaFruta = (props) => {
  return (
    <div>
      <h3>{ props.name }</h3>
      <hr/>
      <p>$ { props.price}</p>
    </div>
  )
} */

const root = document.querySelector('#root');
ReactDOM.render(<App />, root)