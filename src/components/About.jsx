import React from "react";
import "../about_and_product.css";
import imgCCLAbout from "../assets/About_CCL.jpg";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <div className="container-fluid about-page">
        <div className="row">
          <div className="col-md-9 mx-auto">
            <div className="about-contents mt-5">
              <h3 className="about-heading">About Us</h3>
              <div className="row mt-5 img-text-both">
                <div className="col-md-6">
                  <img src={imgCCLAbout} alt="" className="img-fluid mx-auto" />
                </div>
                <div className="col-md-6">
                  <p>
                    Copper Connections Ltd. designs and manufactures Telecom &
                    Security solutions since 1985.
                  </p>
                  <p>
                    CCL, with its range of EPABX and Intrusion Alarm Systems,
                    provides innovative and creative solutions for residential
                    and commercial applications.
                  </p>
                  <p>
                    Continuous innovation at CCL is ensured by in-house R&D
                    team. ​
                  </p>
                  <p>
                    Our products are commercialized nationwide by a dynamic
                    network of dealers & distributors, who are trained and
                    backed by our wholehearted support to ensure prompt and
                    efficient service to customers in every part of the country.
                  </p>
                </div>
              </div>
              <div className="about-below-text mt-2">
                <p>
                  We proudly combine creativity and expertise to create products
                  which are cost effective while complying with the highest
                  standards of quality, technology, reliability as well as
                  support.
                </p>
                <p>
                  The team of Copper Connections focuses all its efforts on
                  customer satisfaction and constantly strives to deliver a
                  product nothing short of the best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
