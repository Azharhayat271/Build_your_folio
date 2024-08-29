import React from 'react';

const Slider = ({ data }) => {
  return (
    <div>
      <div id="home" className="rn-slider-area">
        <div className="slide slider-style-1">
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                <div className="content">
                  <div className="inner">
                    <span className="subtitle">{data.subtitle}</span>
                    <h1 className="title">
                      {data.title}
                      <br />
                      <span className="header-caption" id="page-top">
                        <span className="cd-headline clip is-full-width">
                          <span>a </span>
                          <span className="cd-words-wrapper">
                            {data.headline.map((text, index) => (
                              <b key={index} className={index === 0 ? 'is-visible' : 'is-hidden'}>
                                {text}
                              </b>
                            ))}
                          </span>
                        </span>
                      </span>
                    </h1>
                    <div>
                      <p className="description">{data.description}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                      <div className="social-share-inner-left">
                        <span className="title">find with me</span>
                        <ul className="social-share d-flex liststyle">
                          {data.socialLinks.map((link, index) => (
                            <li key={index} className={link.platform}>
                              <a href={link.url}>
                                <i data-feather={link.platform}></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="skill-share-inner">
                        <span className="title">best skill on</span>
                        <ul className="skill-share d-flex liststyle">
                          {data.skills.map((skill, index) => (
                            <li key={index}>
                              <img src={skill} alt="Icons Images" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 order-lg-2 col-lg-5">
                <div className="thumbnail">
                  <div className="inner">
                    <img src={data.imageSrc} alt="Personal Portfolio Images" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
