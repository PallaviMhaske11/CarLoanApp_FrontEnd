import { Route, Routes } from 'react-router-dom';
import CheckCibil from '../modules/OE/CheckCibil';
import RegisterEnquiry from '../modules/CRM/RegisterEnquiry';
import ProfileNav from './ProfileNav';
import SideNav from './SideNav';
import Register from '../Templates/Register';
import ForwardtoOE from '../modules/CRM/ForwardtoOE';
import ViewApprovedEnquiry from '../modules/CRM/ViewApprovedEnquiry';
import ViewPendingEnquiry from '../modules/CRM/ViewPendingEnquiry';

function Dashboard() 
{
  
  const userJson = localStorage.getItem('user');
  const {username, usertype} = JSON.parse(userJson);

  const appRoute={
    OE:[
        {path:'/checkcibil', component:<CheckCibil></CheckCibil>},
        
    ],
    CRM:[
      {path:'/register-enquiry', component:<RegisterEnquiry></RegisterEnquiry>},
      {path:'/forwordtoOe', component:<ForwardtoOE></ForwardtoOE>},
      {path:'/viewapproved-enquiry', component:<ViewApprovedEnquiry></ViewApprovedEnquiry>},
      {path:'/viewpending-enquiry', component:<ViewPendingEnquiry></ViewPendingEnquiry>},
    ]
  }  
  
  return (
    <div style={{padding:"15px"}}>
        {/* <h1>Dashboard : {getUserType}</h1> */}

        <div style={{border:"solid 2px", borderColor:"blue", marginBottom:"5px", padding:'10px'}}>
          <ProfileNav />
        </div>

        <div style={{display:"flex",height:"70vh"}}>
          <div style={{border:"solid 2px", borderColor:"green", width:"30%"}}>
            <SideNav />
          </div>

          <div style={{border:"solid 2px", borderColor:"yellow", width:"70%"}}>
            <Routes>
              {
                appRoute[usertype].map((mapping,index)=><Route key={index} path={mapping.path} element={mapping.component} />)
              }
            </Routes>
          </div>  
        </div>

    </div>
  )
}

export default Dashboard;