import React from 'react'
import distanceInWordsStrict from "date-fns/distance_in_words_strict"
import Gravatar from "react-gravatar"

const Reply = ({reply}) => {
    return (
        <div>
    <div className="card mb-3">
    <div className="card-header">
        <Gravatar className="mr-3 rounded-circle" width="30px"
        height="30px" email={reply.owner.email} />
      
      <span className="text-sm text-muted">
        {reply.owner.name}, <b>{distanceInWordsStrict(new Date(), reply.created_at)} ago</b>
      </span>
    </div>
    <div className="card-body">
      <p className="text-center">
        {reply.body}
      </p>
    </div>
  </div>
        </div>
    )
}

export default Reply
