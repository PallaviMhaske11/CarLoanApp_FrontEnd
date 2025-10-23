import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Templates/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import ViewEnquiry from './Enquiry/ViewEnquiry'
import AddEnquiry from './Enquiry/AddEnquiry'
import ErrorMessage from './Templates/ErrorMessage'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import EditEnquiry from './Enquiry/EditEnquiry'



function App() {
  

  return (
    <>
      <BrowserRouter>
     <div>
          
             <Header></Header>
           
                <Routes>
                    <Route path='/' element={<ViewEnquiry></ViewEnquiry>}></Route>
                   <Route path='addenquiry' element={<AddEnquiry></AddEnquiry>}></Route>
                   <Route path='viewenquiry' element={<ViewEnquiry></ViewEnquiry>}>
                   </Route>
                   <Route path='*' element={<ErrorMessage></ErrorMessage>}></Route>
                   <Route path='edit/:customerId' element={<EditEnquiry></EditEnquiry>}></Route>
                </Routes> 
      

     </div>
    </BrowserRouter>

    </>
  )
}

export default App
