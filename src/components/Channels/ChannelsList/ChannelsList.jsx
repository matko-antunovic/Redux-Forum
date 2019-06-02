import React from "react";

const ChannelsList = ({channels}) => (
    <ul className="list-group">
    {channels.map(ch=><li key={ch.id} className="list-group-item">{ch.name}</li>)}
    </ul>
  );

  export default ChannelsList;