import React from "react";
import loginLogo from "../assets/Login_logo.png";

const Dealer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 login-form mx-auto">
            <div className="text-center mb-5">
              <img src={loginLogo} alt="" />
              <h1 className="mt-3">Welcome User</h1>
            </div>
            <form action="">
              <label htmlFor="">YOUR USERNAME</label>
              <br />
              <input type="text" placeholder="Username" />
              <br />
              <label htmlFor="">PASSWORD</label>
              <br />
              <input type="text" placeholder="Password" />
              <br />
              <br />
              <button className="text-center btn btn-success login-btn">LOGIN</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dealer;
