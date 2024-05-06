import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  //enlist bot to army not twice 
  function enlist(bot) {
    if (army.includes(bot)) return;
    setArmy((army) => [...army, bot]);
  }

  //remove bot 
  function retire(bot) {
    setArmy((army) => army.filter((it) => it.id !== bot.id));
  }
  useEffect(() => {
    fetch(" http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  //delete bot either from army or from collection
  function handleDelete(bot) {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots((bots) => bots.filter((it) => it.id !== bot.id));
      setArmy((army) => army.filter((it) => it.id !== bot.id));
    });
  }
  return (
    <div id = "botArmy">
      <YourBotArmy collection={army} clickHandler={retire} handleDelete={handleDelete} />
      <BotCollection collection={bots} clickHandler={enlist} handleDelete={handleDelete} />
    </div>
  );
}
export default BotsPage;