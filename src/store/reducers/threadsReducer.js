import { GET_THREADS, GET_THREADS_LOADED } from "../actions/threadsAction";

const initialState={
  data:[],
  loading:true
}

const threadsReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_THREADS:
      return action.payload

    case GET_THREADS_LOADED:
      return{
        ...state,
        loading:false
      };
    default:
      return state;
  }
};

export default threadsReducer