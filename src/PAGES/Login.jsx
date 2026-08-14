import { useRef, useState } from 'react';
import s from "../style/sign.module.css"
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context1 } from '../context/Logcontext';
 function Login() {
   const {handleLogin,setislog}=useContext(context1)
  const [nameInput, setNameInput] = useState('');
   const [mailInput, setmailInput] = useState('');
    const [passInput, setpassInput] = useState('');
  const navigate = useNavigate(); // موجه الصفحات

  





  const handleSubmit = (e) => {
    e.preventDefault(); // عشان نمنع الـ Reload بتاع الفورم
    
    if (nameInput.trim() !== ''&&mailInput.trim()!=''&&passInput.trim()!='') {
    const x=handleLogin({
      name: nameInput,
      email: mailInput,
      password: passInput
    });
    if(x){setislog(true)
      navigate('/'); 

    
    }
           // بنرجعه لصفحة الهوم فوراً
    else{alert("you dont have account,sign up please")
      navigate('/Signup')
    }
    }
    else{
      alert("please enter all fields")
    }
  };

  return (
    <div className={s.main}>
      <h2 style={{color:"rgb(116 83 21 / 63%)"}}>LOGIN PAGE</h2>
      {/* ////////////////////////////////////////////////// */}
       <div>
      <form onSubmit={handleSubmit}  className={s.form}>
        <div>
        <label>name</label>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={nameInput}
          ref={value}
          onChange={(e) => setNameInput(e.target.value)}
        />
        </div>
        {/* ///////////////////////////////////// */}
        <div>
        <label>email</label>
        <input 
          type="email"
          placeholder="Enter your mail" 
          value={mailInput}
          
          onChange={(e) => setmailInput(e.target.value)}
        />
        </div>
       
        {/* //////////////////////////// */}
        <div>
        <label>password</label>
        <input 
          type="password"
          placeholder="Enter your password" 
          value={passInput}
          
          onChange={(e) => setpassInput(e.target.value)}
        />
        </div>
        {/* //////////////////////////// */}
        <button type="submit">Log In</button>
      </form>
     </div>
     {/* ///////////////////////////////////////// */}
    <Link to="/Signup">
     <p>Dont have acount? sign up</p>
     </Link>
    </div>
  );
}
export default Login