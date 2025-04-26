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
          <div className="mdm-app-icon-container" style={{ textAlign: 'center' }}>
            <a 
              href="https://app.spline.design/community/file/d6f6f5d1-57e1-4eb3-aa34-6dbd7d2e53f3" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-block' }}
            >
              <img src="/images/UMCP_Arcade_Cabinet.png" alt="UMCP Arcade Cabinet" className="mdm-arcade-cabinet" />
            </a>
            <p className="mdm-app-name" style={{ marginTop: '5px' }}>Web Version Prototype</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDeviceMockupIPhone;
