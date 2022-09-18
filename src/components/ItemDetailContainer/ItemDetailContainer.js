import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemList from '../ItemList/ItemList'
import products from '../Jsons/products'

export const ButtonCount=({total, setTotal})=>{
const add=()=>{
  setTotal( total + 1 )
}

  return(
    <button onClick={add} className='btn btn-secondary'>{total}</button>
  )
}

export const InputCount=({total, setTotal})=>{

  const onChangeHandler = (event) => { 
    const newTotal = parseInt(event.target.value)

    if(newTotal>5){
      setTotal(newTotal)
    }

   }

  return(
      <input onChange={onChangeHandler} type='number'/>
  )
}

const ItemDetailContainer = () => {

  const [item, setItem]= useState({})
  const [total, setTotal] = useState(1) 
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

  // const Count=total<5? ButtonCount:InputCount;

  return (
    <>
    
      <ItemDetail item={item}/>
      <div>
        {/* { total < 5 ? 
        <ButtonCount total={total} setTotal={setTotal}/> 
        : 
        <InputCount total={total} setTotal={setTotal}/>
         }  */}
         
         {/* <Count total={total} setTotal={setTotal}/> */}
      </div>
     
    </>
    
  )
}

export default ItemDetailContainer