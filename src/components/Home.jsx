import React from "react"
import Footer from "./Footer";

const Home = () => {
  let CCLsrc =
    "https://static.wixstatic.com/media/985d88_f547ca76eb21417999d77c90ee99edf7~mv2.png/v1/crop/x_0,y_67,w_1023,h_590/fill/w_958,h_553,al_c,q_90,usm_0.66_1.00_0.01/11%20new.webp";
    return (
      <>
        <div className="container-fluid IC_BG">
          <div className="row">
            <div className="col-8">
              <div className="row mt-5">
                <div className="col-8 homepage-left-strip"> 
                  <h3 className="homepage-left-strip-text">
                    Manufacturing Telecom & Security Products since 1985
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-4 homepage-right-strip">
              <div id="carasoul-text2">
                <i className="fas fa-less-than slider"></i>
                <span className="homepage-right-strip-text">
                  Visit us at IFSEC, Delhi in Feb 2021
                </span>
                <i className="fas fa-greater-than slider" />
              </div>
            </div>
          </div>
        </div>

        {/* below section of homepage basically CCL */}
        <div className="container-fluid m-0 p-0">
          <div className="row">
            <div className="col-md-4 col-12 CCL-section-left pl-5 pt-5">
              <h1 style={{ color: "#fff" }}>Welcome to CCL</h1>
              <div className="horizontal-border"></div>
              <br />

              <p className="CCL-section-para">
                Copper Connections Ltd. designs, develops & manufactures EPABX
                and Security Systems.
              </p>
              <br />

              <p className="CCL-section-para">
                With over 35 years of manufacturing experience and in-house R&D,
                we constantly work towards providing premium quality and
                technology at competitive price.
              </p>
              <br />

              <p className="CCL-section-para">
                Based in Delhi, our reach is well spread all over India through
                a strong network of Dealers and Distributors.
              </p>
            </div>
            <div className="col-md-8 col-12 CCL-section-right m-0">
              <img src={CCLsrc} alt="" />
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
}

export default Home;