import React, { useEffect,useState } from 'react'
import { FaGlobe } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbBellDown } from "react-icons/tb";
import { TbBellUp } from "react-icons/tb";
import Collaborators from './collaborators';
import Dashboard from './Dashboard';
import SendAlarm from './SendAlarm';
import ReceiveAlarm from './ReceiveAlarm';
import Profile from './Profile';
import Clock from './Clock';
import Calendar from './calendar';
import Admins from './Admins';
import logo from "../logowhite.png"
import "../App.css"
import { useNavigate } from "react-router-dom";


function Sidebar() {
    const [show,setShow]=useState(0)
    // const [adminn,setAdminn]=useState({})
    // const [loading,setLoading]=useState(true)
    const id=localStorage.getItem('id')
    const [isTranslated, setIsTranslated] = useState(false);
    const [position, setPosition] = useState(0);
    const [prevPosition, setPrevPosition] = useState(0);
   

    useEffect(() => {
      const interval = setInterval(() => {
        setPosition((prevPosition) => prevPosition + 200);
        setIsTranslated(true);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    const handleProfileContainerClick = () => {
        setIsTranslated(!isTranslated);
      };
    const navigate=useNavigate()

    // useEffect(() => {
    //     const fetchAdminData = async () => {
    //       try {
    //         const result = await axios.get(`http://localhost:3000/api/sarbini/admin/${id}`);
            
    //         setAdminn(result.data);
    //         console.log("AdminData",adminn);
    //         setLoading(false)
          
    //       } catch (error) {
    //         console.error(error);  
    //         setLoading(false)         
    //       }
    //     };
    //   fetchAdminData();
    //   }, []);
    //   console.log("ad",adminn);
  return (
    <div>
    <div className='div1_sidebar'>
    <div className="side-bar">
    <div className="side-bar-content">
        <img className="side-bar-logo" src={logo} alt="" />
        <button className="dashboard" onClick={()=>{setShow(0)}}>
            <button className="icons">
                <RxDashboard  className="group-icon" />
            </button>
            <h3 className="dashboard1">Dashboard</h3>
        </button>
        <button className="dashboard" onClick={()=>{setShow(1)}} >
            <button className="icons">
                <MdInstallDesktop  className="group-icon" alt="" src="Group.png" />
            </button>
            <h3 className="dashboard1">User App Installed</h3>
        </button>
        <button className="dashboard" onClick={()=>{setShow(2)}}  >
            <button className="icons">
                <TbBellUp  className="group-icon" />
            </button>
            {/* <h3 className="dashboard1">send out alarm</h3>
        </button>
        <button className="dashboard" onClick={()=>{setShow(3)}} >
            <button className="icons">
                <TbBellDown  className="group-icon"  />
            </button>
            <h3 className="dashboard1">received alarm</h3>
        </button>
        <button className="dashboard" onClick={()=>{setShow(4)}}>
            <button className="icons">
                <RxDashboard  className="group-icon" />
            </button> */}
            <h3 className="dashboard1">Admins</h3>
        </button>
        <button className="dashboard" onClick={()=>{navigate("/")}}>
            <button className="icons">
                <RxDashboard  className="group-icon" />
            </button>
            <h3 className="dashboard1">LogOut</h3>
        </button>
        </div> <div className="absolute"> 
         <div className="profilecontainer"  onDoubleClick={()=>{handleProfileContainerClick()}} >
           
            <div className="myprofile">My Profile<div className="division1"></div></div>
           
           <Calendar/> <br />
           <div className="divisionn"></div>
           <div className="stuff">
           <div className="stuf">
           <div className="textdiv"> Total subscriptions</div>
            </div>
            <div className="stuf">
            <div className="textdiv">Total Admins</div>
            </div>
            <div className="stuf">
            <div className="textdiv">Total Notifications</div>
            </div>
            </div>
            <div className="myprofile1">Profile Info<div className="division1"></div>
            <div className="profilecont"><div className="containerpic"><Profile/></div>
           
             </div></div></div> 
             <div>
                {/* {adminn.admin_name.toUpperCase()==="Tasnime".toUpperCase()? (<div className="containerpic"><img className="adimg" src="https://media.istockphoto.com/id/515788534/photo/cheerful-and-confidant.jpg?s=612x612&w=0&k=20&c=T0Z4DfameRpyGhzevPomrm-wjZp7wmGjpAyjGcTzpkA=" alt="" /></div>):
            // adminn.admin_name.toUpperCase()==="aziz".toUpperCase()? (<div className="containerpic" ><img className="adimg" src="" alt="" /></div>):adminn.admin_name.toUpperCase()==="aslen".toUpperCase()? (<div className="containerpic"><img className="adimg" src="" alt="" /></div>): */}
            (<div ><img className="adimg" style={{ transform: `translateX(510px)` }} src="data:image/png;base64,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" alt="" /></div>)</div>
          
        </div> 
        
        </div>
<div className='vertical_sidebar'>______________________________________________________________</div>
<div className='show_sidebar'>
    {show===0&&<Dashboard />}
    {show===1&&<Collaborators/>}
    {show===2&&<SendAlarm/>}
    {show===3&&<ReceiveAlarm/>}
    {show===4&&<Admins/>}
    {show===5&&<Clock/>}
    {console.log(show)}
   
</div>

</div> </div>
 )
}

export default Sidebar
