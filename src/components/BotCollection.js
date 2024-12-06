import React, { useEffect, useState } from 'react'
import BotCard from './BotCard'

function BotCollection() {
    const [bot,setBot] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/bots")
        .then(response => response.json())
        .then(data => setBot(data))
    },[])

  return (
    <div className='container'> 
      <h2>Bot Battlr</h2>

      <div className='row'> 
          <h2>All Bots</h2>
          {bot.map((e) => {
              return <BotCard id={e.id} name={e.name}  bclass={e.bot_class} damage={e.damage} health={e.health} armor={e.armor}
              url={e.avatar_url}  catchphrase={e.catchphrase} created={e.created_at} /> 
          })}
      </div>

    </div>
  )
}

export default BotCollection