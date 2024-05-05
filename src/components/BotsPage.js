import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [botss, setBotss] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => setBotss(data));
  }, []);

  return (
    <div>
      <YourBotArmy bots={botss} />
      <BotCollection />
    </div>
  );
}

export default BotsPage;
