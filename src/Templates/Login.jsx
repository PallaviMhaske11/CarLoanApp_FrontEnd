import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


function Login() 
{
  const{register,handleSubmit} = useForm();
  const navigate = useNavigate();

  function onLogin(data)
  {
    localStorage.setItem('user', JSON.stringify(data));
    console.log("Login : " +data.usertype);
    alert("onLogin function call ..!!");
    console.log(data);
    navigate('/dashboard'); 
  }

  return (
    <div>
        <h1>Login</h1>
        <form className='form-control' onSubmit={handleSubmit(onLogin)}>
        Enter name : <input type="text" {...register('username')}/> <br/> <br/>
        Enter password : <input type="text" {...register('password')}/> <br/> <br/>
        Select UserType : <select {...register('usertype')}> 
                            <option>OE</option>
                            <option>CRM</option>
                          </select> <br/><br/>
        <button type="submit">LOGIN</button>
        </form>
    </div>
  )
}

export default Login;