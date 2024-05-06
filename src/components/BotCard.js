import React from "react";

//receive props from botcollection
//bot is to map...
//handle delete is to delete
//clickHandler is to enlist to army and to retire, passed down from both botcard and botrmy
//clickHandler, can enlist clicked army
//the other click handler retires it.
function BotCard({ bot, clickHandler, handleDelete }) {
  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={() => clickHandler(bot)}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={[bot.bot_class]} />
          </div>
          <div className="meta text-wrap" >
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() => {
                  handleDelete(bot);
                }}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
export default BotCard;