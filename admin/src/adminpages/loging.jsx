import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input, Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Profile from './Profile';
import Dashboard from './Dashboard';
import { useAuth } from './AuthContext';
import myImage from '../sarbini_black.png'; 

function Login() {
  const { setToken } = useAuth(); 
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [errorPseu, setErrorPseu] = useState(true);
  const [errorPass, setErrorPass] = useState(true);
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState({});
  const [Id, setId] = useState(0);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  
  const verif = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/sarbini/adminSignIn', {
        admin_Pseudo: pseudo,
        admin_password: password,
      });
      setAdmin(response.data)
      const data= await response.data
      
      const { tok, id } = response.data;
      localStorage.setItem("id",id)
      const adId =localStorage.getItem("id")
      setId(adId)
      console.log("dataaaaa ",admin);
      if (admin&& id && tok) {
        setToken(tok); 
        setLoading(false);
        navigate(`/Dashboard`);
     
      } else {
        setErrorPass(!errorPass);
        setErrorPseu(!errorPseu);
        setLoading(false);
      }
    } catch (error) {
      setErrorPass(!errorPass);
      setErrorPseu(!errorPseu);
      setLoading(false);
      console.error('Error during login:', error);
    }
  };

  const handleText = (set, e) => {
    set(e.target.value);
  };

  return (
    <div className='bigdiv_logo'>
        <div className='div1_login'>
            <img className='img_logo'  src={myImage} alt="" />
        </div>
        <div><h1 className=''>hdgdgdgdg</h1></div>
        <div className='div2_login'>
            <h2 className='h2_login'>Sarbini</h2><p className='p_login' >your safety network </p>
            <div className='div3_login' ><h1 className='h1_login' >Login</h1><hr /><p className='p2_login'>sign into your account</p></div>
              {!errorPseu&&<Input status='error' onClick={()=>{setErrorPseu(true)}} size="large" onChange={(e)=>{handleText(setPseudo,e)}}  className='input_login' placeholder="Pseudo" prefix={<UserOutlined />} />}
              {errorPseu&&<Input  size="large" onChange={(e)=>{handleText(setPseudo,e)}}  className='input_login' placeholder="Pseudo" prefix={<UserOutlined />} />}
              {!errorPass&&<Input status='error' onClick={()=>{setErrorPass(true)}} size="large" onChange={(e)=>{handleText(setPassword,e)}} className='input_login' type='password' placeholder="Pasword" />}
              {errorPass&&<Input  size="large" onChange={(e)=>{handleText(setPassword,e)}} className='input_login' type='password' placeholder="Pasword" />}
            <Flex className='flex_login' gap="small" wrap="wrap">
            <Button className='button_login' onClick={()=>{verif() ,console.log("onclick admin ",admin);
              }}>Login</Button>
            </Flex> 
        </div>
        {!show &&(<div>
          <Dashboard id={Id} />
          <Profile id={Id}/></div>)}
    </div> 
  )
}


export default Login
