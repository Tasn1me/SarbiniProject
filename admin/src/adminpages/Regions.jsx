import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "../App.css";
import { IoSearch } from 'react-icons/io5';
import { BarChartOutlined } from "@ant-design/icons";


 const Regions = ({popularity,users}) => {
console.log("pop",popularity());


  return (
    <div className="regions">
     
    <div className="bg-[#191919] flex flex-row justify-center w-full">
      <div className="bg-maincolorsecondary w-[1440px] h-[1024px] relative"></div>
      <div className="bigDiv">
      <h3 className="latest-registration-users5">Check Your Updates</h3>
        <div className="super-container-region" >
          
            <div className="btn-region btn-1-region" >
              <div className="divv-region">
                <BarChartOutlined  style={{marginLeft:'-8px',flexShrink: 0, flexGrow: 1, fontSize: '1.5em' , color:'red' }} />
                <div className="title-region">App Popularity:</div>
              </div>
              <div className="divvv-region">
                <div className="number-region">{popularity()}%</div>
              </div>
            </div>
            <div className="btn-region btn-1-region" >
              <div className="divv-region">
                <BarChartOutlined  style={{ marginLeft:'-11px' ,flexShrink: 0, flexGrow: 1, fontSize: '1.5em' , color:'red' }} />
                <div className="title-region">Total Sales:</div>
              </div>
              <div className="divvv-region">
                <div className="number-region">{users.length}users</div>
              </div>
            </div>
            <div className="btn-region btn-1-region" >
              <div className="divv-region">
                <BarChartOutlined  style={{ marginLeft:'-10.5px',marginTop:'-5px' ,flexShrink: 0, flexGrow: 1, fontSize: '1.5em' , color:'red' }} />
                <div className="title-region">Message Received</div>
              </div>
              <div className="divvv-region">
                <div className="number-region">12</div>
              </div>
            </div>
            <div className="btn-region btn-1-region" >
              <div className="divv-region">
                <BarChartOutlined  style={{ flexShrink: 0, flexGrow: 1, fontSize: '1.5em' , color:'red' }} />
                <div className="title-region">Messages Sent</div>
              </div>
              <div className="divvv-region">
                <div className="number-region">12</div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Regions;
