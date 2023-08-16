import React from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
function Todolist() {
    const todo = useSelector(state=>state.Todo)
    console.log(todo)
  return (
    <div>
        {todo.map((e)=>
        <Card>
        <Card.Body>{e.text}
        {e.time}
        </Card.Body>
        </Card>
        )}
    </div>
  )
}

export default Todolist