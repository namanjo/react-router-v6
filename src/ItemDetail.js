import { useEffect, useState } from "react"


const ItemDetail = ({match}) => {

useEffect(() => {

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
    
        const item = await fetchItem.json();
        setGameItem(item.data)
        console.log(item.data)
      }
    
    fetchItem()
    console.log(match)
}, [])


const [gameItem, setGameItem] = useState({
    item: {
        images: {}
    }
})


  return (
    <div>
        <h1>Detail view</h1>
        <h1>{gameItem.item.name}</h1>
        <img src={gameItem.item.images.icon} alt='alternate img' />
    </div>
    
  )
}

export default ItemDetail