import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Shop = () => {

  const [gameItems, fillGameItems] = useState([])

  useEffect(() => {
    itemFetch()
  }, [])

  const itemFetch = async () => {
    const data = await fetch(`https://fortnite-api.theapinetwork.com/upcoming/get`)
    const items = await data.json()
    fillGameItems(items.data)
    console.log(items.data)
  } 



  return (
    <>
      <h1>Shop</h1>
      {gameItems.map((obj) => (
        <h3 key={obj.itemId}>
          <Link to={`${obj.itemId}`} >{obj.item.name}</Link>
        </h3>
      ))}
    </>
    
  )
}

export default Shop