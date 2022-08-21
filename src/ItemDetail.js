import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ItemDetail = () => {

  const params = useParams()

  const [gameItem, setGameItem] = useState({
    item: {
        images: {}
    }
  })


  useEffect(() => {

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`)
    
        const item = await fetchItem.json();
        setGameItem(item.data)
        console.log(item.data)
      }
    
      fetchItem()
  }, [])


  return (
    <div>
        <h1>Detail view</h1>
        <h1>{gameItem.item.name}</h1>
        <img src={gameItem.item.images.icon} alt='alternate img' />
    </div>
    
  )
}

export default ItemDetail