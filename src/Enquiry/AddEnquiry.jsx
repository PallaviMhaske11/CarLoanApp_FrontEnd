import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function AddEnquiry() {
 
            const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm();
                 const navigate=useNavigate();

            function saveData(data){
                console.log(data);
                    axios.post("http://localhost:9091/api/enquiry/save",data).then(res=>
                           {
                            console.log(res.status);
                              if(res.status==201){
                              alert("Details Added..");
                              reset();
                              navigate('/viewenquiry');

                            }
                           }

                    ).catch(err=>console.log(err));
                    
            }

  return (
         
      <div className='bg-warning-subtle py-5'>
           <div className='container mt-3' style={{maxWidth:"500px"}}>
                 <div  className='card'>
                         <div className='card-header bg-warning'>
                                 <h1 className='mb-0'>Customer Details</h1>
                         </div>
                          <div className='card-body'>
                                 <form onSubmit={handleSubmit(saveData)}>
                                         {/* <div className='mb-3'> 
                                                <label>ProductId</label>
                                                <input type='text' className='form-control' placeholder='Enter Customer ID'></input>
                                         </div> */}
                                           <div className='mb-3'> 
                                                <label>FirstName</label>
                                                <input type='text' className='form-control'  {...register("firstname")} placeholder='Enter First Name'></input>
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
                                                <input type='text' className='form-control' {...register("email")}placeholder='Enter Email '></input>
                                         </div>
                                         <div className='form-check mb-3'> 
                                                <label>MobileNo</label>
                                                <input type='text' className='form-control' {...register("mobileNo")}placeholder='Enter MobileNo '></input>
                                         </div>
                                         <div className='form-check mb-3'> 
                                                <label>PancardNo</label>
                                                <input type='text' className='form-control' {...register("pancardNo")}placeholder='Enter PancardNo '></input>
                                         </div>
                                        
                                                
                                                <input type='hidden' className='form-control' {...register("cibil.cibilId")}></input>
                                        

                                     <button className='btn btn-success w-100'>SAVE CUSTOMER</button>

                                 </form>
                          </div>
                 </div>

           </div>

      </div>
    
  
  );
}

export default AddEnquiry;