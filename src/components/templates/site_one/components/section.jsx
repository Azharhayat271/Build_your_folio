import React from "react";
import Slider from "./slider";
import Services from "./services";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Pricing from "./pricing";
import Contact from "./contact";
import Data from "./data.json"

const section = () => {
  return (
    <div>
      <main class="main-page-wrapper">
        <Slider data={Data}></Slider>
        <Services data={Data}></Services>
        <Portfolio data={Data}></Portfolio>
        <Resume></Resume>
        <Pricing></Pricing>
        <Contact></Contact>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i data-feather="x"></i>
                  </span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row align-items-center">
                  <div class="col-lg-6">
                    <div class="portfolio-popup-thumbnail">
                      <div class="image">
                        <img
                          class="w-100"
                          src="assets/images/portfolio/portfolio-04.jpg"
                          alt="slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="text-content">
                      <h3>
                        <span>Featured - Design</span> App Design Development.
                      </h3>
                      <p class="mb--30">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate distinctio assumenda explicabo veniam
                        temporibus eligendi.
                      </p>
                      <p>
                        Consectetur adipisicing elit. Cupiditate distinctio
                        assumenda. dolorum alias suscipit rerum maiores aliquam
                        earum odit, nihil culpa quas iusto hic minus!
                      </p>
                      <div class="button-group mt--20">
                        <a href="#" class="rn-btn thumbs-icon">
                          <span>LIKE THIS</span>
                          <i data-feather="thumbs-up"></i>
                        </a>
                        <a href="#" class="rn-btn">
                          <span>VIEW PROJECT</span>
                          <i data-feather="chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- End of .text-content --> */}
                  </div>
                </div>
                {/* <!-- End of .row Body--> */}
              </div>
            </div>
          </div>
        </div>
     



      </main>
    </div>
  );
};

export default section;
