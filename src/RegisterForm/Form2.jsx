
function Form2({nextStep,prevStep,handleChange,values}) 
{

  return (
    // <div>
    //     <h2>Form2</h2>
    // </div>

    // <div>
    //   <h2>Step 2: Dependent Information</h2>
    //   <label>
    //     noOfFamilyMember:
    //     <input type="number" name="noOfFamilyMember" value={values.noOfFamilyMember} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     noOfChild:
    //     <input type="number" name="noOfChild" value={values.noOfChild} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     maritalStatus:
    //     <input type="text" name="maritalStatus" value={values.maritalStatus} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     dependentMember:
    //     <input type="text" name="dependentMember" value={values.dependentMember} onChange={handleChange}/>
    //   </label>
    //   <br />
    //   <label>
    //     familyIncome:
    //     <input type="number" name="familyIncome" value={values.familyIncome} onChange={handleChange}/>
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
              <h2 className="text-uppercase text-center mb-5">Step 2: Dependent Information</h2>

              <form>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" className="form-control form-control-lg" name="noOfFamilyMember" value={values.familydependentInfo.noOfFamilyMember} onChange={(e) => handleChange(e, "familydependentInfo")}/>               
                   <label className="form-label" for="form3Example1cg" >noOfFamilyMember</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" id="form3Example3cg" className="form-control form-control-lg" name="noOfChild" value={values.familydependentInfo.noOfChild} onChange={(e) => handleChange(e, "familydependentInfo")} />
                  <label className="form-label" for="form3Example3cg" >noOfChild</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cg" className="form-control form-control-lg" name="maritalStatus" value={values.familydependentInfo.maritalStatus} onChange={(e) => handleChange(e, "familydependentInfo")}/>
                  <label className="form-label" for="form3Example4cg" >maritalStatus</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" id="form3Example4cdg" className="form-control form-control-lg" name="dependentMember" value={values.familydependentInfo.dependentMember} onChange={(e) => handleChange(e, "familydependentInfo")} />
                  <label className="form-label" for="form3Example4cdg" >dependentMember</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" id="form3Example4cdg" className="form-control form-control-lg" name="familyIncome" value={values.familydependentInfo.familyIncome} onChange={(e) => handleChange(e, "familydependentInfo")} />
                  <label className="form-label" for="form3Example4cdg" >familyIncome</label>
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


export default Form2;