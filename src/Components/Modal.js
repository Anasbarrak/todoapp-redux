import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Addtodo } from './Redux/Action/Action';

function Example() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [id, setId]=useState(0);
  const[text, setText]=useState('');
  const[time, setTime]=useState('');
  var data = {id: id, text: text, time:time};
  const add = ()=>{
    dispatch(Addtodo(data))
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Todo 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>id</Form.Label>
              <Form.Control
                type="number"
                placeholder="Put id"
                autoFocus
                onChange={(e)=>setId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>text</Form.Label>
              <Form.Control
                type="text"
                placeholder="What's your next "
                autoFocus
                onChange={(e)=>setText(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="At what time"
                autoFocus
                onChange={(e)=>setTime(e.target.value)}
              />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;