import { ADDTODO, DONE } from "../Actiontype/Actiontype";

const initialState = {
    Todo: [{id: 1, text: 'naghsel wejhi', time: '8 a.m'}]
}

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADDTODO:
    return { ...state, Todo: [...state.Todo, payload] }

  case DONE: 
  return {...state, Todo:state.Todo.filter(e=> e.id !== payload)}

  default:
    return state
  }
}
export default Reducer;
