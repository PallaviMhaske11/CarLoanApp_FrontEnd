import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function ViewApprovedEnquiry() 
{
   const [customers,setCustomers]=useState([]);
   const navigate = useNavigate();
   
               const getCustomers=()=>{
                   axios.get('http://localhost:9091/api/enquiry/getapprovedenquiry').then(
                              res=>{
                                     setCustomers(res.data);
                              }
                   ).catch(error=>{
                          console.log(error);
                   })
               }
   
               useEffect(getCustomers,[])

               function applyForLoan(customerId) {

                alert("Apply for Loan : " +customerId);
                navigate("/dashboard/registerform");
               }
  return (
    // <div>ViewApprovedEnquiry</div>

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
                                                          
                                                          <td><button className='btn btn-danger' onClick={()=>applyForLoan(c.customerId)}>Apply for loan</button>
                                                         
                                                          </td>
                                    </tr>)
                                }
                           </tbody>
    
                  </table>
    
    
        </div>
    
  )
}

export default ViewApprovedEnquiry;