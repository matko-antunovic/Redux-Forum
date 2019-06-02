import { GET_THREAD, GET_THREAD_LOADED, GET_THREAD_LOADING } from '../actions/threadsAction'

import {GET_REPLIES,GET_REPLIES_LOADED} from "../actions/repliesAction"

const initialState={
  loading: true, 
  loadingReplies: true, 
  replies:{ 
    data: [] 
  },
  thread:{}
}

const threadReducer = (state=initialState, action) => {
   switch (action.type) {
     case GET_THREAD:
       return {
         ...state,
         thread: action.payload
       }
     case GET_THREAD_LOADING:
       return {
         ...state,
         loading: true
       }
     case GET_THREAD_LOADED:
       return {
         ...state,
         loading: false
       }


       
      case GET_REPLIES:
          return {
            ...state,
            replies:action.payload
          }

      case GET_REPLIES_LOADED:
       return {
         ...state,
         loadingReplies: false
       }
     default:
       return state;
   }
}

export default threadReducer;
