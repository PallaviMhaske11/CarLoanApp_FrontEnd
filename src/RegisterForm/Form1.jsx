import React from "react";


function Form1({nextStep,handleChange,values}) {
  return (
    // <div>
    //     <h2>Form1</h2>
    // </div>

  //   <div>
  //   <h2>Step 1: Customer Details</h2>
  //   <label>
  //     customerName:
  //     <input type="text" name="customerName" value={values.customerName} onChange={handleChange} />
  //   </label>
  //   <br />
  //   <label>
  //     customerDateOfBirth:
  //     <input type="text" name="customerDateOfBirth" value={values.customerDateOfBirth} onChange={handleChange} />
  //   </label>
  //   <br />
  //   <label>
  //     customerAge:
  //     <input type="text" name="customerAge" value={values.customerAge} onChange={handleChange} />
  //   </label>
  //   <br />
  //    <label>
  //     customerGender:
  //     <input type="text" name="customerGender" value={values.customerGender} onChange={handleChange} />
  //   </label>
  //   <br />
  //   <label>
  //     customerEmail:
  //     <input type="text" name="customerEmail" value={values.customerEmail} onChange={handleChange} />
  //   </label>
  //   <br />
  //   <label>
  //     customerMobileNumber:
  //     <input type="number" name="customerMobileNumber" value={values.customerMobileNumber} onChange={handleChange} />
  //   </label>
  //   <br />
  //   <label>
  //     customerAdditionalMobileNumber:
  //     <input type="number" name="customerAdditionalMobileNumber" value={values.customerAdditionalMobileNumber} onChange={handleChange} />
  //   </label>
  //   <br />
  //   <label>
  //     customerAmountPaidForCar:
  //     <input type="number" name="customerAmountPaidForCar" value={values.customerAmountPaidForCar} onChange={handleChange} />
  //   </label>
  //   <br />
  //   <label>
  //     customerTotalLoanRequired:
  //     <input type="number" name="customerTotalLoanRequired" value={values.customerTotalLoanRequired} onChange={handleChange} />
  //   </label>
  //   <br />
  //   <label>
  //     loanStatus:
  //     <input type="text" name="loanStatus" value={values.loanStatus} onChange={handleChange} />
  //   </label>
  //   <br />



  //   <button className="btn btn-success" onClick={nextStep}>Next</button>
  // </div>

  <div>
  <section className="vh-100 bg-image">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: '15px'}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Step 1: Customer Details</h2>

              <form>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" name="customerName" value={values.customerName} onChange={handleChange}/>
                  <label className="form-label" for="form3Example1cg" >customerName</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example3cg" className="form-control form-control-lg" name="customerDateOfBirth" value={values.customerDateOfBirth} onChange={handleChange} />
                  <label className="form-label" for="form3Example3cg" >customerDateOfBirth</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" id="form3Example4cg" className="form-control form-control-lg" name="customerAge" value={values.customerAge} onChange={handleChange} />
                  <label className="form-label" for="form3Example4cg" >customerAge</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" id="form3Example4cg" className="form-control form-control-lg" name="requiredTenure" value={values.requiredTenure} onChange={handleChange} />
                  <label className="form-label" for="form3Example4cg" >requiredTenure</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="customerGender" value={values.customerGender} onChange={handleChange}/>
                  <label className="form-label" for="form3Example4cdg" >customerGender</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="customerEmail" value={values.customerEmail} onChange={handleChange} />
                  <label className="form-label" for="form3Example4cdg" >customerEmail</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="customerMobileNumber" value={values.customerMobileNumber} onChange={handleChange} />
                  <label className="form-label" for="form3Example4cdg" >customerMobileNumber</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="customerAdditionalMobileNumber" value={values.customerAdditionalMobileNumber} onChange={handleChange}/>
                  <label className="form-label" for="form3Example4cdg" >customerAdditionalMobileNumber</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="customerAmountPaidForCar" value={values.customerAmountPaidForCar} onChange={handleChange}/>
                  <label className="form-label" for="form3Example4cdg" >customerAmountPaidForCar</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="customerTotalLoanRequired" value={values.customerTotalLoanRequired} onChange={handleChange} />
                  <label className="form-label" for="form3Example4cdg" >customerTotalLoanRequired</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="loanStatus" value={values.loanStatus} onChange={handleChange} />
                  <label className="form-label" for="form3Example4cdg" >loanStatus</label>
                </div>  

                 <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button  type="button" data-mdb-button-init
                    data-mdb-ripple-init className="btn btn-warning" onClick={nextStep}>Next</button>
               </div>

                 {/* <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    className="fw-bold text-body"><u>Login here</u></a></p> */}

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
);
  
}

export default Form1;