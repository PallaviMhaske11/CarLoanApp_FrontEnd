import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import Confirmation from './Confirmation';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import Form6 from './Form6';
import Form7 from './Form7';
import Success from './Success';


function MultiStepForm() {

   const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    customerName: "",
    customerDateOfBirth: "",
    customerAge: "",
    requiredTenure: "",
    customerGender: "",
    customerEmail: "",
    customerMobileNumber: "",
    customerAdditionalMobileNumber: "",
    customerAmountPaidForCar: "",
    customerTotalLoanRequired: "",
    loanStatus: "",

    familydependentInfo: {
      noOfFamilyMember: "",
      noOfChild: "",
      maritalStatus: "",
      dependentMember: "",
      familyIncome: "",
    },

    customerAddress: {
      permanentAddress: {
      areaname: "",
      cityname: "",
      district: "",
      state: "",
      pincode: "",
      houseNumber: "",
      streetName: "",
    },

    localAddress: {
      areaname: "",
      cityname: "",
      district: "",
      state: "",
      pincode: "",
      houseNumber: "",
      streetName: "",
    },
    },

    accountDetails: {
      accounType: "",
      accountBalance: "",
      accountHolderName: "",
      accountStatus: "",
      accountNumber: "",
    },

    guarantorDetails: {
      guarantorName: "",
      guarantorDateOfBirth: "",
      guarantorRelationshipwithCustomer: "",
      guarantorMobileNumber: "",
      guarantorAdharCardNo: "",
      guarantorMortgageDetails: "",
      guarantorJobDetails: "",
      guarantorLoaclAddress: "",
      guarantorPermanentAddress: "",
    },

    allPersonalDocuments: {
      addressProof: null,
      panCard: null,
      incomeTax:null,
      addharCard:null,
      photo:null,
      signature:null,
      bankCheque:null,
      salarySlips:null,
    },
  });

  // Step navigation
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

   const handleChange = (e, section, subSection, field) => {
    const { name, value, files } = e.target;

    setFormData((prev) => {
      // For customerAddress.permanentAddress / localAddress
      if (section && subSection) {
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [subSection]: {
              ...prev[section][subSection],
              [field || name]: files ? files[0] : value,
            },
          },
        };
      }

      // For single-level nested objects (e.g., accountDetails)
      else if (section) {
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [field || name]: files ? files[0] : value,
          },
        };
      }

      // Root-level fields
      else {
        return { ...prev, [name]: value };
      }
    });
  };

  // Final Submit (with documents)
  const handleSubmit = async () => {
    try {
      const dataToSend = { ...formData,  allPersonalDocuments: null };
      const formValues = new FormData();

      // Append JSON data as a blob
      formValues.append(
        "data",
        new Blob([JSON.stringify(dataToSend)], { type: "application/json" })
      );

      // Append files
      Object.entries(formData.allPersonalDocuments).forEach(([key, file]) => {
        if (file) formValues.append(key, file);
      });

      const res = axios.post(
        "http://localhost:9091/api/customerApplicationForm/saveDataWithDocs",
        formValues,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Loan application submitted successfully!");
      console.log(res.data);
      nextStep();
    } catch (err) {
      console.error(err);
      alert("Error submitting loan application.");
    }
  };

  // Step Switcher
  switch (step) {
    case 1:
      return <Form1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <Form2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 3:
      return <Form3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 4:
      return <Form4 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 5:
      return <Form5 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 6:
      return <Form6 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 7:
      return <Form7 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 8:
      return <Confirmation prevStep={prevStep} values={formData} handleSubmit={handleSubmit} />;
    case 9:
      return <Success />;
    default:
      return <Form1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
  }

}

export default MultiStepForm;