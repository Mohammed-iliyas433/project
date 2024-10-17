import { items } from './utils/code'
import './App.css'
import Role from './compo/header'
import {useState} from "react"
function App() {
  const [index,setIndex]=useState(0)
  const[showMore,setShowMore]=useState(false)
  function MoreData(){
    setShowMore(!showMore)
  }
  function handleClick(){
    index==2?setIndex(0):setIndex(index+1)
  }
  function handlePrevios(){
    index==0?setIndex(2):setIndex(index-1)
  }
  
  const item=items[index]


  return (
    <>
      
      <h1>{item.name}</h1>
      
      <img src={item.image}></img><br />
      <p>{!showMore && item.description}</p>
      <button onClick={handlePrevios}>previos</button>
      <button onClick={handleClick}>Next</button>
      <button onClick={MoreData}>{showMore?"Show":"Hide"}Description</button>
    </>
  )
}

export default App
