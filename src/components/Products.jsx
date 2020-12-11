import React from "react";
import "../about_and_product.css";
import telecom from "../assets/Telecom-icon.png";
import security from "../assets/security-icon.png";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
const Products = () => {
  return (
    <>
      <div className="container-fluid product-page">
        <div className="row">
          <div className="col-md-9 mx-auto">
            <div className="products-container">
              <h2 className="Product-heading">Products</h2>
              <div className="row">
                <div className="col-md-6">
                  <img src={telecom} alt="" className="img-fluid" />
                  <div className="image-text-left">
                    <h3 className="text-heading-icons">Telecom</h3>
                    <ul className="list-container mt-5">
                      <li>
                        <NavLink to="#">PBX</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Intercom for Housing Society</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">IP PBX</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          FCT{" "}
                          <span className="small-text">
                            (To convert GSM into landline)
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Voice Loggers</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <img src={security} alt="" className="img-fluid" />
                  <div className="image-text-right">
                    <h3 className="text-heading-icons">Security</h3>
                    <ul className="list-container mt-5">
                      <li>
                        <NavLink to="#">Intrusion Alarm System</NavLink>
                      </li>

                      <li>
                        <NavLink to="#">
                          Wireless Remote Switch
                           <br/>
                          <span className="small-text right">
                            To operate any appliance using a wireless remote
                          </span>
                        </NavLink>
                      </li>
                    </ul>
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

export default Products;
