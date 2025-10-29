import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

function CheckCibil() 
{

  const [customers,setCustomers]=useState([])

            const getCustomers=()=>{
                axios.get('http://localhost:9092/getforwardtoOE').then(
                           res=>{
                                  setCustomers(res.data);
                           }
                ).catch(error=>{
                       console.log(error);
                })
            }

            useEffect(getCustomers,[])

          function checkcibil(customerId){

                             axios.get(`http://localhost:9092/getCibilScore/${customerId}`).then(
                                          res=>{
                                            if(res.status==200){
                                              alert("chech cibil...");
                                              getCustomers();
                                            }
                                          }

                             ).catch(e=>console.log(e))
                      
             }




  return (
    // <div>CheckCibil</div>

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
                                                      
                                                      <td><button className='btn btn-danger' onClick={()=>checkcibil(c.customerId)}>CheckCibil</button>
                                                     
                                                      </td>
                                </tr>)
                            }
                       </tbody>

              </table>


    </div>
  )
}

export default CheckCibil;