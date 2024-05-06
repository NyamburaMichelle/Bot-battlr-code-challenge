import React from "react";
import BotCard from "./BotCard";

//colection is to enlist, add to army
//Passdown all the props to botcard. Map the collection in order to display he bots...
function BotCollection({ collection, clickHandler, handleDelete }) {
  return (
    <div className="ui four column grid" id="bot">
      {"Cick on a bot to add it to your army."}
      <div className="row">
        {collection.map((bot) => (
          <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
export default BotCollection;

//receive collection and map, pass down the rest