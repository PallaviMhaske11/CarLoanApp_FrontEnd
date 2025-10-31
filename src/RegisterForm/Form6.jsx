import React from 'react'

function Form6({nextStep,prevStep,handleChange,values}) {
  return (
    // <div>
    //     <h2>Form2</h2>
    // </div>

    // <div>
    //   <h2>Step 6: GuarantorDetails</h2>
    //   <label>
    //     guarantorName:
    //     <input type="text" name="guarantorName" value={values.guarantorName} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     guarantorDateOfBirth:
    //     <input type="text" name="guarantorDateOfBirth" value={values.guarantorDateOfBirth} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     guarantorRelationshipwithCustomer:
    //     <input type="text" name="guarantorRelationshipwithCustomer" value={values.guarantorRelationshipwithCustomer} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     guarantorMobileNumber:
    //     <input type="number" name="guarantorMobileNumber" value={values.guarantorMobileNumber} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //      guarantorAdharCardNo:
    //     <input type="number" name="guarantorAdharCardNo" value={values.guarantorAdharCardNo} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //      guarantorMortgageDetails:
    //     <input type="text" name="guarantorMortgageDetails" value={values.guarantorMortgageDetails} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //      guarantorJobDetails:
    //     <input type="text" name="guarantorJobDetails" value={values.guarantorJobDetails} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //      guarantorLoaclAddress:
    //     <input type="text" name="guarantorLoaclAddress" value={values.guarantorLoaclAddress} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //      guarantorPermanentAddress:
    //     <input type="text" name="guarantorPermanentAddress" value={values.guarantorPermanentAddress} onChange={handleChange}/>
    //   </label>
    //   <br />


    //   <button onClick={prevStep}>Back</button>
    //   <button onClick={nextStep}>Next</button>
    // </div>

  <section className="vh-100 bg-image">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: '15px'}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Step 6: GuarantorDetails</h2>

              <form>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" name="guarantorName" value={values.guarantorDetails.guarantorName} onChange={(e) => handleChange(e, "guarantorDetails")} />
                  <label className="form-label" for="form3Example1cg" >guarantorName</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example3cg" className="form-control form-control-lg" name="guarantorDateOfBirth" value={values.guarantorDetails.guarantorDateOfBirth} onChange={(e) => handleChange(e, "guarantorDetails")}/>
                  <label className="form-label" for="form3Example3cg" >guarantorDateOfBirth</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cg" className="form-control form-control-lg" name="guarantorRelationshipwithCustomer" value={values.guarantorDetails.guarantorRelationshipwithCustomer} onChange={(e) => handleChange(e, "guarantorDetails")} />
                  <label className="form-label" for="form3Example4cg" >guarantorRelationshipwithCustomer</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" id="form3Example4cdg" className="form-control form-control-lg" name="guarantorMobileNumber" value={values.guarantorDetails.guarantorMobileNumber} onChange={(e) => handleChange(e, "guarantorDetails")}/>
                  <label className="form-label" for="form3Example4cdg"  >guarantorMobileNumber</label>
                </div> 

                 <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" id="form3Example4cdg" className="form-control form-control-lg" name="guarantorAdharCardNo" value={values.guarantorDetails.guarantorAdharCardNo} onChange={(e) => handleChange(e, "guarantorDetails")} />
                  <label className="form-label" for="form3Example4cdg" >guarantorAdharCardNo</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="guarantorMortgageDetails" value={values.guarantorDetails.guarantorMortgageDetails} onChange={(e) => handleChange(e, "guarantorDetails")} /> 
                  <label className="form-label" for="form3Example4cdg" >guarantorMortgageDetails</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="guarantorJobDetails"value={values.guarantorDetails.guarantorJobDetails} onChange={(e) => handleChange(e, "guarantorDetails")}/>
                  <label className="form-label" for="form3Example4cdg" >guarantorJobDetails</label>
                </div>

                 <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="guarantorLoaclAddress" value={values.guarantorDetails.guarantorLoaclAddress} onChange={(e) => handleChange(e, "guarantorDetails")}/>
                  <label className="form-label" for="form3Example4cdg" >guarantorLoaclAddress</label>
                </div>

                 <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="guarantorPermanentAddress" value={values.guarantorDetails.guarantorPermanentAddress} onChange={(e) => handleChange(e, "guarantorDetails")}/>
                  <label className="form-label" for="form3Example4cdg" >guarantorPermanentAddress</label>
                </div> 


                 
                 

                <div className="d-flex justify-content-center">
                  <button  type="button" data-mdb-button-init
                    data-mdb-ripple-init className="btn btn-warning" onClick={nextStep}>Next</button><br/>
                    
                    <button  type="button" data-mdb-button-init
                    data-mdb-ripple-init className="btn btn-success" onClick={prevStep}>Back</button>
                </div>

                
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


 )
}
export default Form6;