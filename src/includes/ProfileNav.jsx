
function ProfileNav() 
{

  const userJson = localStorage.getItem('user');
  const {username, usertype} = JSON.parse(userJson);

  return (
    <div>
        <h4>ProfileNav</h4>
        <h5>Username : {username}</h5>
        <h5>UserType : {usertype}</h5>
    </div>
  )
}

export default ProfileNav;