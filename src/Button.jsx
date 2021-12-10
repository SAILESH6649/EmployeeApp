import { useState } from 'react';
import {Modal,ModalBody,ModalHeader,ModalFooter,Button} from 'reactstrap';


const Sample=({fact,Close,employee,setEmployee})=>{
    const [inputs,setInputs]=useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = () => {
        setEmployee([...employee,inputs]);
        Close();
      }
    return(
        <>
        
  <Modal isOpen>
    <ModalHeader>
      Modal title
    </ModalHeader>
    <ModalBody>
    <form >
      <label>Enter empolyee id:
      <input 
        type="text" 
        name="id" 
         onChange={handleChange}
      />
      </label>
      <label>Employee Name:
        <input 
          type="text" 
          name="name"
         
        onChange={handleChange}
        />
        </label>
        <label>Email:
        <input 
          type="text" 
          name="email"
        onChange={handleChange}
        />
        </label>
        <label>Department:
         <input
         type="text"
         name="department"
          onChange={handleChange}
         />
       
        </label>
      
      
    </form>
    </ModalBody>
    <ModalFooter>
    <Button 
        color="primary" onClick={handleSubmit} >
        Save 
      </Button>
    <Button onClick={Close}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
        </>
    )
}
export default Sample