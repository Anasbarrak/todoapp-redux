import Button from 'react-bootstrap/Button';
import React from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteToDo } from './Redux/Action/Action';
function Todolist() {
  const dispatch = useDispatch();
    const todo = useSelector(state=>state.Todo)
    console.log(todo)
  return (
    <div>
        {todo.map((e)=>
        <Card style={{display:'flex',width:'15em'}}>
        <Card.Body>
        Text:{e.text}<br/>
        Time:{e.time}<br/>
        <Button onClick={()=>dispatch(DeleteToDo(e.id))} variant="danger" style={{color: 'white', width: '5em', justifyContent: 'center'}}>Delete </Button>
        </Card.Body>
        
        </Card>
        )}
    </div>
  )
}

export default Todolist