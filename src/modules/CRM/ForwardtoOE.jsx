import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ForwardtoOE() 
{

  const [customers,setCustomers]=useState([])

            const getCustomers=()=>{
                axios.get('http://localhost:9091/api/enquiry/getpendingenquiry').then(
                           res=>{
                                  setCustomers(res.data);
                           }
                ).catch(error=>{
                       console.log(error);
                })
            }

            useEffect(getCustomers,[])


      function forwardtoOE(customerId){

                             axios.get(`http://localhost:9091/api/enquiry/forwardedToOe/${customerId}`).then(
                                          res=>{
                                            if(res.status==200){
                                              alert("forwarded to OE successfully...");
                                              getCustomers();
                                            }
                                          }

                             ).catch(e=>console.log(e))
                      
             }



return (
    // <div>ForwardtoOE</div>

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
                                                          
                                                          <td><button className='btn btn-danger' onClick={()=>forwardtoOE(c.customerId)}>ForwardtoOE</button>
                                                         
                                                          </td>
                                    </tr>)
                                }
                           </tbody>
    
                  </table>
    
    
        </div>
        )
}

export default ForwardtoOE;