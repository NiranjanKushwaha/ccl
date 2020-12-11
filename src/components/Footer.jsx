import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer m-0 p-0">
        <div className="row footer-contents text-center">
          <div className="col-md-4 col-sm-12 mt-3">
            <h3>Copper Connections Ltd.</h3>
            <p>195-196, DSIDC Complex,</p>
            <p>Okhla Industrial Area, Phase-1</p>
            <p>New Delhi- 110020</p>
            
            <p className="pt-2">Tel: 011-40625543</p>
            <p>Email: cclsalesccl@gmail.com</p>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 text-center">
            <h4>Hours of operation</h4>
            <p>Mon-Sat: 9 AM to 5:30 PM</p>
            <p>Sun:Closed</p>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 text-center">
            <h4>Latest Updates</h4>
            <p>New PBX Model 312B & 216B</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
