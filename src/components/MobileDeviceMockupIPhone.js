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
            <img src="/images/Icon.png" alt="UMCP App Icon" className="mdm-app-icon" />
            <p className="mdm-app-name">UMCP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDeviceMockupIPhone;
