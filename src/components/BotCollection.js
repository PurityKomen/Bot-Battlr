import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";
import BotArmy from "./BotArmy";
import BotDetail from "./BotDetail";

function BotCollection() {
  const [bot, setBot] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [botDetail, setBotDetail] = useState();

  //fetch bot data
  useEffect(() => {
    fetch("https://bot-battlr-ebmn37het-jepkorirpurity8gmailcoms-projects.vercel.app/bots")
      .then((response) => response.json())
      .then((data) => setBot(data));
  }, []);

  //get id of bot clicked
  function handleClick(id) {
    fetch(`https://bot-battlr-ebmn37het-jepkorirpurity8gmailcoms-projects.vercel.app/bots/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBotDetail([data]);
        console.log("data", data);
      });
  }
  console.log("detail", botDetail);

  //get id of bot clicked
  function addBotArmy(id) {
    fetch(`https://bot-battlr-ebmn37het-jepkorirpurity8gmailcoms-projects.vercel.app/bots/${id}`)
      .then((response) => response.json())
      .then((data) => addArmy(data));
  }

  //once clicked add to the bot army
  function addArmy(newItem) {
    setBotArmy([...botArmy, newItem]);
  }

  //handle delete a bot
  function handleDelete(id) {
    fetch(`https://bot-battlr-ebmn37het-jepkorirpurity8gmailcoms-projects.vercel.app/bots/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        setBot(bot.filter((bo) => bo.id !== id));
        setBotArmy(botArmy.filter((bo) => bo.id !== id));
      });
  }

  return (
    <div className="container">
      <h2>Bot Battlr</h2>
      <div className="row p-3 mb-2 bg-warning text-dark">
        <h2>Bot Army</h2>
        {botArmy.map((e) => {
          return (
            <BotArmy
              handleDelete={handleDelete}
              id={e.id}
              name={e.name}
              bclass={e.bot_class}
              damage={e.damage}
              health={e.health}
              armor={e.armor}
              url={e.avatar_url}
              catchphrase={e.catchphrase}
              created={e.created_at}
            />
          );
        })}
      </div>

      <div className="p-3 mb-2 d-flex justify-content-center">
        {botDetail?.map((e) => {
          return (
            <BotDetail
              addBotArmy={addBotArmy}
              id={e.id}
              name={e.name}
              bclass={e.bot_class}
              damage={e.damage}
              health={e.health}
              armor={e.armor}
              url={e.avatar_url}
              catchphrase={e.catchphrase}
              created={e.created_at}
            />
          );
        })}
      </div>

      <div className="row">
        <h2>All Bots</h2>
        {bot.map((e) => {
          return (
            <BotCard
              handleClick={handleClick}
              id={e.id}
              name={e.name}
              bclass={e.bot_class}
              damage={e.damage}
              health={e.health}
              armor={e.armor}
              url={e.avatar_url}
              catchphrase={e.catchphrase}
              created={e.created_at}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BotCollection;
