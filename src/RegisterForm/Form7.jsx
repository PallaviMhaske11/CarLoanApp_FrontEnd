import React from "react";

function Form7({ prevStep, nextStep, handleChange }) {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Step 7: Upload Documents</h2>

      <form>
        <div>
          <label>Upload Address Proof: </label>
          <input
            type="file"
           onChange={(e) => handleChange(e, "allPersonalDocuments", null, "addressProof")}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Upload PAN Card: </label>
          <input
            type="file"
            onChange={(e) => handleChange(e, "allPersonalDocuments", null,"panCard")}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Upload INCOME TAX : </label>
          <input
            type="file"
            onChange={(e) => handleChange(e, "allPersonalDocuments",null, "incomeTax")}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Upload AADHAR CARD: </label>
          <input
            type="file"
            onChange={(e) => handleChange(e, "allPersonalDocuments",null, "addharCard")}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Upload PHOTO: </label>
          <input
            type="file"
            onChange={(e) => handleChange(e, "allPersonalDocuments",null, "photo")}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Upload SIGNATURE: </label>
          <input
            type="file"
            onChange={(e) => handleChange(e, "allPersonalDocuments",null, "signature")}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Upload BANKCHEQUE: </label>
          <input
            type="file"
            onChange={(e) => handleChange(e, "allPersonalDocuments",null, "bankCheque")}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Upload SALARYSLIPS: </label>
          <input
            type="file"
            onChange={(e) => handleChange(e, "allPersonalDocuments",null, "salarySlips")}
          />
        </div>

        <br />
        <button type="button" onClick={prevStep}>
          Back
        </button>
        <button type="button" onClick={nextStep}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Form7;
