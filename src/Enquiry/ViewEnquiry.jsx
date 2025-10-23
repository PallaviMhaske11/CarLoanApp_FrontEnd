import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ViewEnquiry() {

const [customers,setCustomers]=useState([])

            const getCustomers=()=>{
                axios.get('http://localhost:9091/api/enquiry/getAll').then(
                           res=>{
                                  setCustomers(res.data);
                           }
                ).catch(error=>{
                       console.log(error);
                })
            }

             useEffect(getCustomers,[])

             function deleteCustomer(customerId){

                             axios.delete(`http://localhost:9091/api/enquiry/deletecustomerId/${customerId}`).then(
                                          res=>{
                                            if(res.status==200){
                                              alert("customer successfully deleted...");
                                              getCustomers();
                                            }
                                          }

                             ).catch(e=>console.log(e))
                      
             }


  return (
    <div>
        
              <table className='table table-striped'>
                    <thead>
                        <tr>

                              <th>CUSTOMERID</th>
                              <th>FIRSTNAME</th>
                              <th>LASTNAME</th>
                              <th>AGE</th>
                              <th>EMAIL</th>
                              <th>MOBILENO</th>
                              <th>PANCARDNO</th>
                              <th>Action</th>
                        </tr>
                    </thead>
                       <tbody>
                            {
                                customers.map((c,i)=><tr key={i}>
                                                <td>{c.customerId}</td>
                                                  <td>{c.firstname}</td>
                                                    <td>{c.lastName}</td>
                                                      <td>{c.age}</td>
                                                      <td>{c.email}</td>
                                                      <td>{c.mobileNo}</td>
                                                      <td>{c.pancardNo}</td>
                                                      
                                                      <td><button className='btn btn-danger' onClick={()=>deleteCustomer(c.customerId)}><i class="bi bi-trash3"></i></button>
                                                      <Link className='btn btn-success ms-2'  to={`/edit/${c.customerId}`}><i class="bi bi-pencil"></i></Link>
                                                      </td>
                                </tr>)
                            }
                       </tbody>

              </table>


    </div>
  )
}

export default ViewEnquiry