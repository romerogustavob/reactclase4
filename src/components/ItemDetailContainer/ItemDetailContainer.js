import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemList from '../ItemList/ItemList'
import products from '../Jsons/products'


const ItemDetailContainer = () => {

  const [item, setItem]= useState({})
  const { id } =useParams()


  useEffect(() => {
    getItem().then( data =>{
      console.log(data)
      setItem(data)
    } )
  
    return () => {
      
    }
  }, [])
  

  const getItem = () => {
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
          resolve(products[id-1])
       },2000);
    })
  }

  return (
    <>
      <ItemDetail item={item}/>
    </>
    
  )
}

export default ItemDetailContainer