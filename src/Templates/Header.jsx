import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='bg-danger d-flex justify-content-between p-2'>
      <h1 className='text-white'>CarLoanApp</h1>
         <div className='mt-2'>
               <Link className='btn btn-success me-2' to={'addenquiry'}>ADD ENQUIRY</Link>
            <Link className='btn btn-success ms-2' to={'viewenquiry'}>VIEW ENQUIRY</Link>

         </div>
    </div>
  )
}

export default Header