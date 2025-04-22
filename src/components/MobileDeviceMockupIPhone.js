import React from "react";
import "./MobileDeviceMockupIPhone.css";

const MobileDeviceMockupIPhone = () => {
  return (
    <div className="mdm-iphone-mockup-container">
      <div className="mdm-iphone-device">
        <span className="mdm-iphone-speaker"></span>
        <span className="mdm-iphone-btn-right"></span>
        <span className="mdm-iphone-btn-left-small"></span>
        <span className="mdm-iphone-btn-left-mid"></span>
        <span className="mdm-iphone-btn-left-long"></span>
        
        <div className="mdm-iphone-screen">
          <div className="mdm-app-icon-container">
            <img src="/images/UMCP_Arcade_Cabinet.png" alt="UMCP Arcade Cabinet" className="mdm-arcade-cabinet" />
            <p className="mdm-app-name">Arcade Mode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDeviceMockupIPhone;
