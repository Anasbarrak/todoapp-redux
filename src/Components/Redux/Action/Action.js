import { ADDTODO, DONE } from "../Actiontype/Actiontype"

export const Addtodo =(data)=> {
   return {type: ADDTODO, 
payload: data}
}
export const DeleteToDo =(id)=> {
   return {type: DONE, payload: id}
}