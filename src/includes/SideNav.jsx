
import { Link } from 'react-router-dom';

function SideNav() 
{
  const userJson = localStorage.getItem('user');
  const {username, usertype} = JSON.parse(userJson);

  const options={
    OE:[
        {label:'CheckCibil', to:'/dashboard/checkcibil'},
        
    ],
    CRM:[
      {label:'RegisterEnquiry', to:'/dashboard/register-enquiry'},
      {label:'ForwardtoOE', to:'/dashboard/forwordtoOe'},
      {label:'ViewPendingEnquiry', to:'/dashboard/viewpending-enquiry'},
      {label:'ViewApprovedEnquiry', to:'/dashboard/viewapproved-enquiry'},
      
      
    ]
  }

  return (
    <div style={{display:"flex", flexDirection:"column", padding:"50px"}}>
        <h4>SideNav</h4>
        {
          options[usertype].map((btn,index)=> 
          <Link className='btn btn-success rounded-5 my-2' key={index} to={btn.to}>{btn.label}</Link>)
        }

    </div>
  )
}

export default SideNav;