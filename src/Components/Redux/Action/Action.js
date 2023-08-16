import { ADDTODO } from "../Actiontype/Actiontype"

export const Addtodo =(data)=> {
   return {type: ADDTODO, 
payload: data}
}