
import React from 'react'

function Form5({nextStep, prevStep, handleChange, values}) {
  return (
    // <div>
    //     <h2>Form3</h2>
    // </div>

    // <div>
      
    //   <h2>Step 5: Account Details</h2>
    //   <label>
    //     accounType:
    //     <input type="text" name="accounType" value={values.accounType} onChange={handleChange} />
    //   </label>
    //   <br />
    //   <label>
    //     accountBalance:
    //     <input type="number" name="accountBalance" value={values.accountBalance} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     accountHolderName:
    //     <input type="text" name="accountHolderName" value={values.accountHolderName} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     state:
    //     <input type="text" name="accountStatus" value={values.accountStatus} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     accountNumber:
    //     <input type="number" name="accountNumber" value={values.accountNumber} onChange={handleChange}/>
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
              <h2 className="text-uppercase text-center mb-5">Step 5: Account Details</h2>

              <form>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" name="accounType" value={values.accountDetails.accounType} onChange={(e) => handleChange(e, "accountDetails")} />
                  <label className="form-label" for="form3Example1cg" >accounType</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" id="form3Example3cg" className="form-control form-control-lg" name="accountBalance" value={values.accountDetails.accountBalance} onChange={(e) => handleChange(e, "accountDetails")}/>
                  <label className="form-label" for="form3Example3cg" >accountBalance</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cg" className="form-control form-control-lg"  name="accountHolderName" value={values.accountDetails.accountHolderName} onChange={(e) => handleChange(e, "accountDetails")} />
                  <label className="form-label" for="form3Example4cg" >accountHolderName</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg"  name="accountStatus"  value={values.accountDetails.accountStatus} onChange={(e) => handleChange(e, "accountDetails")}/>
                  <label className="form-label" for="form3Example4cdg" >accountStatus</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" id="form3Example4cdg" className="form-control form-control-lg"  name="accountNumber" value={values.accountDetails.accountNumber} onChange={(e) => handleChange(e, "accountDetails")} />
                  <label className="form-label" for="form3Example4cdg" >accountNumber</label>
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

export default Form5;