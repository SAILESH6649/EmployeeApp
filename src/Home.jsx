import React from 'react';
import {useState} from 'react';
import {Button,Table,Modal,ModalBody,ModalHeader} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sample from './Button';

const Home=()=>{
  const [hide,setHide]=useState(false);
    

    let details=[
        
        {
            
            "id": 1,
            "name": "Sailesh",
            "email": "sailesh2872@gmail.com",
            "department": "Engineering"
          },
          {
           
            "id": 2,
            "name": "Havinsh",
            "email": "havinsh345@gmail.com",
            "department": "Engineering"
          },
          {
            
            "id": 3,
            "name": "Barun",
            "email": "barun@gmail.com",
            "department": "Engineering"
          },
          {
            
            "id": 4,
            "name": "Resorf",
            "email": "resorf3455@gmail.com",
            "department": "sales"
          }
]

    const [employee,setEmployee]=useState(details);

    const fact=()=>{
     setHide(true);
    }

    const Shutdown=()=>{
      setHide(false);
    }
    const deleteData=(delId)=>{
      const stored=employee.filter(({id})=> id!==delId)
      setEmployee(stored);
    }

  

    return(
        <>
         {hide && <Sample fact={fact} Close={Shutdown} employee={employee} setEmployee={setEmployee} />}
        <div>
        <Table >
                  <thead>
                    <tr>
                      <th>
                       EmployeeId
                      </th>
                      <th>
                       EmployeeName
                      </th>
                      <th>
                        Email
                      </th>
                      <th>
                        Department
                      </th>
                      <th>
                        Edit
                      </th>
                    </tr>
                  </thead>

          {employee && employee.map(({id,name,email,department})=>{
              return(
                <>
                <tbody>
    <tr>
      <th scope="row">
        {id}
      </th>
      <td>
        {name}
      </td>
      <td>
        {email}
      </td>
      <td>
       {department}
      </td>
      <td>
      <Button color="primary" onClick={()=>{deleteData(id)}}> Delete</Button>
      </td>
    </tr>
    </tbody>
             </>   
              )
          })}
          </Table>
         </div>
        <Button color="danger" onClick={()=>fact(hide)}>Add an Employee</Button>
        </>
    );
}
export default Home;