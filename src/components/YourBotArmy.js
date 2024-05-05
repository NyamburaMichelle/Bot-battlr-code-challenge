import React from "react";
import BotCard from "./BotCard";


function YourBotArmy({ collection, clickHandler, handeleDelete }) {
  return (
    <div className="ui segment inverted olive bot-army" id="armys">
      <div className="ui five column grid">
        
        <div className="row bot-army-row">
          {collection.map((bot) => (
            <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} handleDelete={handeleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default YourBotArmy;

