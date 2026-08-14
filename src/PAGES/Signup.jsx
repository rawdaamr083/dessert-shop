import { useState } from 'react';
import s from "../style/sign.module.css"
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { context1 } from '../context/Logcontext';
 function Signup() {
   const {setUser,user}=useContext(context1)
  const [nameInput, setNameInput] = useState('');
   const [mailInput, setmailInput] = useState('');
    const [passInput, setpassInput] = useState('');
  const navigate = useNavigate(); // موجه الصفحات








  const handleSubmit = (e) => {
    e.preventDefault(); // عشان نمنع الـ Reload بتاع الفورم
    
    if (nameInput.trim() !== ''&&mailInput.trim()!=''&&passInput.trim()!='') {
       
    setUser([...user,{
      name: nameInput,
      email: mailInput,
      password: passInput
    }]);
   
    navigate('/Login')

    }
     else{
      alert("please enter all fields")
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column" }}>
      <h2>LOGIN PAGE</h2>
      {/* ////////////////////////////////////////////////// */}
       <div>
      <form onSubmit={handleSubmit}  className={s.form}>
        <div>
        <label>name</label>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={nameInput}
          
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
        <button type="submit">sign up</button>
      </form>
     </div>
     {/* ///////////////////////////////////////// */}
   
    </div>
  );
}
export default Signup