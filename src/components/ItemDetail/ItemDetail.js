import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Item from '../Item/Item'
import darmodeContext from '../../context/darkmode'
import ItemCount from '../../components/ItemCount/ItemCount'
import Button from 'react-bootstrap/esm/Button'

const ItemDetail = ({item}) => {
  const [inicio, setInicio]=useState(0)
  const [stock, setStock]=useState(6)

  const [total, setTotal]=useState()

  const onAdd=({counter})=>{

    //(counter)
    setInicio(1)
    setStock(6)
   
    return()=>{
      console.log("El total actual es:" +parseInt(counter))
    }
  }
  

  return (
    <>
    
    <div align='center'>
      <h2>{item.title}</h2>     
      <img src={item.images}/>
      <h5>Precio: </h5> <h5>{item.price}</h5>
      <h5>Descripción:</h5> {item.description}
      <br></br>
        <div className='m-0 row justify-content-center'>
          <div className='col-md-2 col-auto text-center'>
            <ItemCount stock={stock} inicio={inicio} addOn={onAdd} />
          </div>
        </div>
      
      {/* <button onClick='' className='btn btn-secondary'>Terminar Compra</button> */}
        <Link to={`/cart/`}>           
          <Button variant="secondary" size="sm">Terminar compra</Button>
        </Link>            
    </div>
      
  
    </>
  )
}

export default ItemDetail