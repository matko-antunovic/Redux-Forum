import React from "react"; 
import distanceInWordsStrict from "date-fns/distance_in_words_strict"
import Gravatar from "react-gravatar"
import {Link} from "react-router-dom"

const Thread=({thread})=>(
    <div className="card mb-3">
    <div className="card-header">
        <Gravatar className="mr-3 rounded-circle" width="30px"
        height="30px" email={thread.creator.email} />
      
      <span className="text-sm text-muted">
        {thread.creator.name}, <b>{distanceInWordsStrict(new Date(), thread.created_at)} ago</b>
      </span>
      <Link to={`/thread/${thread.id}`} className="btn btn-info btn-xs float-right">
        View thread
      </Link>
    </div>
    <div className="card-body">
      <h5 className="text-center">
        {thread.title}
      </h5>
    </div>
    <div className="card-footer text-muted">
      <span>
        {thread.replies_count}
      </span>
      <a href="" className="btn btn-primary float-right btn-xs">
        {thread.channel.name}
      </a>
    </div>
  </div>
)

export default Thread;