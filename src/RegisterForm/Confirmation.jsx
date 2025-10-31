import React from "react";

function Confirmation({ prevStep, values, handleSubmit }) {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Confirm Your Information</h2>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Confirmation;
