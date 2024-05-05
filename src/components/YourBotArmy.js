import React from "react";
import BotCard from "./BotCard";

function YourBotArmy() {
  
  const handleBotClick = (id) => {
    console.log("Bot clicked");
    
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          
          <BotCard onClick={handleBotClick} />
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
 