import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

function EditEnquiry() {
                   const {customerId}=useParams();
                       const {register,handleSubmit,setValue} = useForm();
                       const navigate=useNavigate();

                        const findByCustomerId=()=>{
                                  axios.get(`http://localhost:9091/getsinglecustomer/{customerId}/${customerId}`).then(res=>{
                                  if(res.status==200){
                                      console.log(res.data);
                                      for(let c in res.data){
                                              setValue(c,res.data[c]);
                                      }
                                     
                                  }

                                  }).catch(err=>console.log(err))
                        }

            useEffect(findByCustomerId,[])

            function updateProduct(data){
                       axios.put(`http://localhost:9091//${data.customerId}`,data).then(res=>{
                        if(res.status==200){
                            alert("Customer Updated..");
                            navigate('/viewenquiry');
                        
                        }
                       }).catch(err=>console.log(err))
            }

  return (
 

   
      <div className='bg-warning-subtle py-5'>
           <div className='container mt-3' style={{maxWidth:"500px"}}>
                 <div  className='card'>
                         <div className='card-header bg-warning'>
                                 <h4 className='mb-0'>Update Customer Details</h4>
                         </div>
                          <div className='card-body'>
                                 <form onSubmit={handleSubmit(updateCustomer)}>
                                          <div className='mb-3'> 
                                               
                                                <input type='hidden' className='form-control'  {...register("customerId")} placeholder='Enter Customer ID'></input>
                                         </div> 
                                         <div className='mb-3'> 
                                                <label>FirstName</label>
                                                <input type='text' className='form-control' {...register("firstname")} placeholder='Enter First Name'></input>
                                         </div>
                                           <div className='mb-3'> 
                                                <label>LastName</label>
                                                <input type='text' className='form-control' {...register("lastName")} placeholder='Enter Last Name'></input>
                                         </div>
                                           <div className='mb-3'> 
                                                <label>AGE</label>
                                                <input type='text' className='form-control' {...register("age")} placeholder='Enter Age '></input>
                                         </div>
                                           <div className='form-check mb-3'> 
                                                <label>Email</label>
                                                <input type='text' className='form-check-input' {...register("email")}placeholder='Enter Email '></input>
                                         </div>
                                         <div className='form-check mb-3'> 
                                                <label>MobileNo</label>
                                                <input type='number' className='form-check-input' {...register("mobileNo")}placeholder='Enter MobileNo '></input>
                                         </div>
                                         <div className='form-check mb-3'> 
                                                <label>PancardNo</label>
                                                <input type='number' className='form-check-input' {...register("pancardNo")}placeholder='Enter PancardNo '></input>
                                         </div>
                                         

                                      <button className='btn btn-success w-100'>UPDATE CUSTOMER</button>

                                 </form>
                          </div>
                 </div>

           </div>

      </div>
    
  


  )
}

export default EditEnquiry