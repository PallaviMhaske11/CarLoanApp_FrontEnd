
import React from 'react'

function Form3({nextStep, prevStep, handleChange, values}) {
  return (
    // <div>
    //     <h2>Form3</h2>
    // </div>

    // <div>
    //   <h2>Step 3: Customer Address</h2>
    //   <h2>Permanent Address</h2>
    //   <label>
    //     areaname:
    //     <input type="text" name="areaname" value={values.areaname} onChange={handleChange} />
    //   </label>
    //   <br />
    //   <label>
    //     cityname:
    //     <input type="text" name="cityname" value={values.cityname} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     district:
    //     <input type="text" name="district" value={values.district} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     state:
    //     <input type="text" name="state" value={values.state} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     pincode:
    //     <input type="number" name="pincode" value={values.pincode} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     houseNumber:
    //     <input type="number" name="houseNumber" value={values.houseNumber} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     streetName:
    //     <input type="text" name="streetName" value={values.streetName} onChange={handleChange}/>
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
              <h2 className="text-uppercase text-center mb-5">Step 3: Customer Address</h2>

              <form>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" name="areaname" value={values.customerAddress.permanentAddress.areaname} onChange={(e) => handleChange(e, "customerAddress", "permanentAddress")} />
                  <label className="form-label" for="form3Example1cg" >areaname</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example3cg" className="form-control form-control-lg" name="cityname" value={values.customerAddress.permanentAddress.cityname} onChange={(e) => handleChange(e, "customerAddress", "permanentAddress")} />
                  <label className="form-label" for="form3Example3cg" >cityname</label>
                </div>

               <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cg" className="form-control form-control-lg" name="district" value={values.customerAddress.permanentAddress.district} onChange={(e) => handleChange(e, "customerAddress", "permanentAddress")}/>
                  <label className="form-label" for="form3Example4cg" >district</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="state" value={values.customerAddress.permanentAddress.state} onChange={(e) => handleChange(e, "customerAddress", "permanentAddress")} />
                  <label className="form-label" for="form3Example4cdg"  >state</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" id="form3Example4cdg" className="form-control form-control-lg" name="pincode" value={values.customerAddress.permanentAddress.pincode} onChange={(e) => handleChange(e, "customerAddress", "permanentAddress")} />
                  <label className="form-label" for="form3Example4cdg" >pincode</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" id="form3Example4cdg" className="form-control form-control-lg" name="houseNumber" value={values.customerAddress.permanentAddress.houseNumber} onChange={(e) => handleChange(e, "customerAddress", "permanentAddress")} />
                  <label className="form-label" for="form3Example4cdg" >houseNumber</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" name="streetName" value={values.customerAddress.permanentAddress.streetName} onChange={(e) => handleChange(e, "customerAddress", "permanentAddress")} />
                  <label className="form-label" for="form3Example4cdg" >streetName</label>
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
);
  
}




export default Form3;