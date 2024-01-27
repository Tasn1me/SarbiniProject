import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MailOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

function SentAlarms() {
  const [Admins, setAdmins] = useState([]);
  const [nname, setNname] = useState('');
  const [npseudo, setNpseudo] = useState('');
  const [npassword, setPassword] = useState('');
  const [npassword1, setPassword1] = useState('');
  const [refresh, setRefresh] = useState(true);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupVisible1, setPopupVisible1] = useState(false);
  const id = localStorage.getItem('id');

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };
  const handleButtonClick1 = () => {
    setPopupVisible1(true);
  };

  const handleClosePopup1 = () => {
    setPopupVisible1(false);
  };

  const getAdmins = () => {
    axios.get('http://localhost:3000/api/sarbini/admin/admins')
      .then((res) => {
        setAdmins(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };

  const addAdmin = () => {
    const info = {
      admin_name: nname,
      admin_Pseudo: npseudo,
      admin_password: npassword,
    };

    axios.post('http://localhost:3000/api/sarbini/adminSignUp', info)
      .then(() => {
        setRefresh(!refresh);
      })
      .catch((err) => console.log(err));
  };

  const addAd = () => {
    for (let i = 0; i < Admins.length; i++) {
      if (Admins[i] === npseudo) {
        return alert('Pseudo exists, try another one');
      }
    }

    addAdmin();
  };

  useEffect(() => {
    getAdmins();
  }, [refresh]);

  return (
    <div>
      <div className='div_1colla'></div>
      <div className='div_2colla'>
        <h2 className='h2_1colla'>ADMINS</h2>
        <Button className="icon_colla0" onClick={()=>{handleButtonClick1()}}>+ Add Admin</Button>
        <div>
          <table className='table_colla'>
            <tr className='hr-row'>
              <td colSpan='12'>
                <hr />
              </td>
            </tr>
            <tr>
              <td className='td1_colla'>Name</td><span className='vertical_colla'>________</span>
              <td className='td1_colla'>Message</td><span className='vertical_colla'>________</span>
              <td className='td1_colla'>Creation Date</td><span className='vertical_colla'>________</span>
              <td className='td1_colla'>Action</td>
            </tr>
            <tr className='hr-row'>
              <td colSpan='12'>
                <hr />
              </td>
            </tr>
            {Admins.map((el, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className='td2_colla'>{el.admin_name}</td>
                  <td></td>
                  <td className='td2_colla'>Message</td>
                  <td></td>
                  <td className='td2_colla'>{el.createdAt}</td>
                  <td></td>
                  <td className='td2_colla'>
                    <MailOutlined data-toggle="tooltip" data-placement="bottom" title="Send Message" className='icon2_colla' onClick={()=>{handleButtonClick()}} />
                  </td>
                </tr>
                <tr>
                  <td colSpan='12'>
                    <hr />
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </table>
        </div>
      </div>
      {isPopupVisible && (
        <div className='bigdivpopup'>
          <div className='containerpopup'>
            <Button className='buttonpopup' onClick={handleClosePopup}>
              X
            </Button>
            <h1 className='h1popup'>Send message To Admin</h1>
          
              <div className='div_popup1'>
                <label htmlFor='subject'></label>
                <select onClick={(e) => e.preventDefault()} className='p1_colla' placeholder='Subject line' name='subject' required>
                  <option className='option1' disabled hidden selected>Select Admin</option>
                  {Admins.map((el) => (
                    <option className='option1' key={location.admin_name} onClick={() => { }}>
                      {location.user_location}
                    </option>
                  ))}
                </select>
              
            </div>
            <Input className='inputpopup1' placeholder='ADD Message...' /><br /><br />
            <Button className='buttonpopup1' >
              send Message
            </Button>
          </div>
        </div>
      )}
{isPopupVisible1 && <div className="bigdivpopup"><div className="containerpopup">
            <Button className="buttonpopup" onClick={()=>{handleClosePopup1()}}>X</Button>
            <h1 className="h1popup">Add New Admin</h1>
            <div className="divvpopup">
              <div>
            <h2>ADD Name</h2>
            <Input className="inputpopup" placeholder="Enter Region.." onChange={(e)=>setNname(e.target.value)}/></div>
            <div>
            <h2>ADD Pseudo</h2>
            <Input className="inputpopup" placeholder="Enter Name.." onChange={(e)=>setNpseudo(e.target.value)}/></div>
            </div>
            <div className="divvpopup">
            <div>
            <h2>ADD Password</h2>
            <Input.Password className="inputpopup" placeholder="Enter Pssword.." onChange={(e)=>setPassword(e.target.value)}/></div>
            <div>
            <h2>Confirm password</h2>
            <Input.Password  className="inputpopup" placeholder="Enter Pssword Confirmation.." onChange={(e)=>setPassword1(e.target.value)}/></div>
            </div>
 
            
            <Button className="buttonpopup1" onClick={()=>{addAd()}}>Add +</Button>
            </div></div>}      

    </div>
  );
}

export default SentAlarms;
