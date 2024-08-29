import React from "react";
import { FaHeart } from "react-icons/fa";

const Portfolio = ({ data }) => {
  return (
    <div>
      <div
        className="rn-portfolio-area rn-section-gap section-separator"
        id="portfolio"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle">
                  Visit my portfolio and keep your feedback
                </span>
                <h2 className="title">My Portfolio</h2>
              </div>
            </div>
          </div>

          <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
            {data.portfolio.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${100 + index * 200}`}
                data-aos-once="true"
                className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
              >
                <div
                  className="rn-portfolio"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalCenter"
                >
                  <div className="inner">
                    <div className="thumbnail">
                      <a href="javascript:void(0)">
                        <img src={item.image} alt="Personal Portfolio Images" />
                      </a>
                    </div>
                    <div className="content">
                      <div className="category-info">
                        <div className="category-list">
                          <a href="javascript:void(0)">{item.category}</a>
                        </div>
                        <div className="meta">
                          <span>
                            <a href="javascript:void(0)">
                              <i className="feather-heart"></i>
                            </a>
                            {item.likes}
                          </span>
                        </div>
                      </div>
                      <h4 className="title">
                        <a href="javascript:void(0)">
                          {item.title}
                          <i className="feather-arrow-up-right"></i>
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
