import React from "react";
import "../contact.css";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <div className="container-fluid contact-page">
        <div className="row">
          <div className="col-md-9 mx-auto">
            <h3 className="contact-heading mt-5">Contact Us</h3>

            <div className="row mt-4">
              <div className="col-md-6 mt-3">
                <h4 className="mt-0">Copper Connections Ltd.</h4>
                <p>195-196, DSIDC Complex,</p>
                <p>Okhla Industrial Area, Phase-1</p>
                <p>New Delhi- 110020</p>
              </div>
              <div className="col-md-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4991305938142!2d77.27754651440453!3d28.5247134957048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25767d65705%3A0x4dcccc09966f5d86!2sCopper%20Connections%20Ltd!5e0!3m2!1sen!2sin!4v1607695420310!5m2!1sen!2sin"
                  width="400"
                  height="200"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  
                ></iframe>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <div className="sales">
                  <h4>SALES</h4>
                  <div className="row">
                    <div className="col-6">
                      <p>Mr. Amarjit Kumar </p>
                      <p>8285332564, 011-40625525</p>
                      <p>cclsalesccl@gmail.com</p>
                    </div>
                    <div
                      className="col-1 vertical-bar"
                      style={{
                        borderLeft: "2px solid #bdc3c7",
                        height: "60px",
                      }}
                    ></div>
                    <div className="col-5">
                      <p>Mr. Ram Ratan Lal</p>
                      <p>8285332566, 011-40625514</p>
                      <p>cclsalesccl@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <h4>APPLY FOR JOB</h4>
                <p>cclhrccl@gmail.com</p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <div className="service-support">
                  <h4>SERVICE SUPPORT</h4>
                  <div className="row">
                    <div className="col-6">
                      <p>Mr. Amarjit Kumar </p>
                      <p>8285332564, 011-40625525</p>
                      <p>cclsalesccl@gmail.com</p>
                    </div>
                    <div
                      className="col-1 vertical-bar"
                      style={{
                        borderLeft: "2px solid #bdc3c7",
                        height: "60px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <h4>VENDOR REGISTRATION</h4>
                <p>cclpurchaseccl@gmail.com</p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <div className="dealership">
                  <h4>DEALERSHIP ENQUIRY</h4>
                  <div className="row">
                    <div className="col-6">
                      <p>Mr. Vibhoar Kumar </p>
                      <p>Director</p>
                      <p>9718877202, 011-40625546</p>
                      <p>cclvibhoar@gmail.com</p>
                    </div>
                    <div
                      className="col-1 vertical-bar"
                      style={{
                        borderLeft: "2px solid #bdc3c7",
                        height: "60px",
                      }}
                    ></div>
                    <div className="col-5">
                      <p>Ms. Deeksha Kumar</p>
                      <p>Director</p>
                      <p style={{ fontSize: "12px" }}>
                        9818952152, 011-40625541 / 43
                      </p>
                      <p>ccldeeksha@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
