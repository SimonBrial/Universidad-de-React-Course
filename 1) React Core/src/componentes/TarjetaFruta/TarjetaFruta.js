import React from 'react'
import styles from './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component {
  /* constructor () {
    super()

     El uso del .bind(this) es para referirse al componente con la clase y que no produzca ningun problema con los metodos, debido a que si no se coloca .bind, el compilador marca error debido a lo qu entiende como si fuera del metodo y no de la clase 

     this.agregar = this.agregar.bind(this)
    this.quitar = this.quitar.bind(this) 
    
    const METHODS = [
      'agregar',
      'quitar',
      'limpiar'
    ]

    METHODS.forEach((method) => {
      this[method] = this[method].bind(this)
    })

    this.state = {
      cantidad: 0
    }
  } */

  state = {
    cantidad: 0
  }
  agregar = () => {
    this.setState({
      cantidad: this.state.cantidad + 1
    })
  }
  quitar = () => {
    this.setState({
      cantidad: this.state.cantidad - 1
    })
  }
  limpiar = () => {
    this.setState({
      cantidad: 0
    })
  }
  
  render() {
    /*const styles = {
      border: '1px solid black',
      marginBottom: '1em',
      borderRadius: '0.5em',
      padding: '1em',
      background:  hasItems ? 'linear-gradient(45deg, #000, #4a02f7)' : '#FFF',
      color: hasItems ? '#FFF' : '#000',
      transition: 'all 400ms ease-out'
    } */

    const hasItems = this.state.cantidad > 0
    const activeClases = hasItems ? styles['card-activa'] : ''
    const clases = styles.card + ' ' + activeClases

    return (
      <div className = { clases }>
        <h3>{ this.props.name }</h3>
        <div>Cantidad: { this.state.cantidad }</div>

        <button onClick = {this.agregar} > Agregar (+) </button>

        <button onClick = {this.quitar}> Quitar (-) </button>

        <button onClick = {this.limpiar}> Limpiar (0) </button>

        <p>$ { this.props.price}</p>
        <p>
          Total: ${ this.props.price * this.state.cantidad }
        </p>
      </div>
    )
  }
}

export default TarjetaFruta