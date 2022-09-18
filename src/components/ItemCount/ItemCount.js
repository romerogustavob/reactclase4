import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ItemCount = ( {stock, inicio, addOn}) => {
    const [counter, setCounter]=useState(parseInt(inicio));
    useEffect(() => {  
        console.log('Efecto al montaje y cambio el counter')
        
    }, [counter]);
      
    
    const handleClick=()=>{
      if(parseInt(stock)===counter){
        alert('stock completo')
        return
       }else{
        addOn({counter})
       }  
        setCounter(counter + 1);
    }
    
    const handleClickMinus=()=>{
      if(0===counter){
        alert('Agregue un producto')
        return
       } else{
        addOn({counter})
       }
        setCounter(counter - 1);
    }

  return (
    <>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>         
          <th colSpan={3}>Agregar al carrito</th>
        </tr>
      </thead>
      <tbody>
        <tr>    
            <td>
                <Button variant="secondary" size="sm" active onClick={handleClickMinus}>-</Button>
            </td>
            <td>
                <strong>{counter}</strong>
            </td>
            <td>
                <Button variant="secondary" size="sm" active onClick={handleClick}>+</Button>
            </td>
        </tr>
        {/* <tr text-align="center">   
            <td text-align="center" colSpan={3}>
                <Button variant="primary"  size="sm" active onClick="">Ir al carrito</Button>
            </td>
        </tr> */}
      </tbody>
    </Table>
    </>
  )
}

export default ItemCount