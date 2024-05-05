import React from "react";
import { useState , useEffect} from "react";
import BotCard from "./BotCard";


function BotCollection() {
  // Your code here
  const[bots, setBots]=useState([])

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((response) =>response.json())
    .then((data) => setBots(data))
}, []);


const botList=bots.map(bot =>{
  return <BotCard bot={bot}/>
})



  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
       {botList}

      </div>
    </div>
  );
}

export default BotCollection;
