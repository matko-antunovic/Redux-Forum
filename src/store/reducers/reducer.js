import { combineReducers } from 'redux'

import {reducer as formReducer} from "redux-form"
import threadsReducer from './threadsReducer'
import channelsReducer from './channelsReducer'
import threadReducer from "./threadReducer"

const reducer = combineReducers({
  threads: threadsReducer,
  channels: channelsReducer,
  thread: threadReducer,
  form:formReducer
})

export default reducer;