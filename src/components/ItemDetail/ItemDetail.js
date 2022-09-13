import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Item from '../Item/Item'

const ItemDetail = ({item}) => {
    

  return (
    <>
    <div align='center'>
      <h2>{item.title}</h2>     
      <img src={item.images}/>
      <h5>Precio: </h5> <h5>{item.price}</h5>
      <h5>Descripción:</h5> {item.description}
    </div>
  
    </>
  )
}

export default ItemDetail