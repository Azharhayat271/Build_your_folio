import React, { useState } from 'react';

// JSON Data
const pricingData = [
  {
    "id": "test",
    "title": "Make Your Single Page",
    "subtitle": "Elementor",
    "price": "$30.00",
    "description": "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
    "features": [
      "1 Page with Elementor",
      "Design Customization",
      "Responsive Design",
      "Content Upload",
      "Design Customization",
      "2 Plugins/Extensions"
    ],
    "additionalFeatures": [
      "multipage Elementor",
      "Design Figma",
      "MAintaine Design",
      "Content Upload",
      "Design With XD",
      "8 Plugins/Extensions"
    ],
    "delivery": "2 Days Delivery",
    "revision": "Unlimited Revision"
  },
  {
    "id": "profile",
    "title": "Design Make this Page",
    "subtitle": "Elementor",
    "price": "$50.00",
    "description": "Making this the first true generator on the Internet. It uses a dictionary & plugin Development.",
    "features": [
      "1 Page with Elementor",
      "Design Customization",
      "Responsive Design",
      "Content Upload",
      "Design Customization",
      "2 Plugins/Extensions"
    ],
    "additionalFeatures": [
      "multipage Elementor",
      "Design Figma",
      "MAintaine Design",
      "Content Upload",
      "Design With XD",
      "8 Plugins/Extensions"
    ],
    "delivery": "2 Days Delivery",
    "revision": "Unlimited Revision"
  },
  {
    "id": "contact",
    "title": "Customize Your Single Page",
    "subtitle": "Elementor",
    "price": "$90.00",
    "description": "I will install your desire theme and made like Theme demo and customize your single page (homepage)",
    "features": [
      "1 Page with Elementor",
      "Design Customization",
      "Responsive Design",
      "Content Upload",
      "Design Customization",
      "2 Plugins/Extensions"
    ],
    "additionalFeatures": [
      "multipage Elementor",
      "Design Figma",
      "MAintaine Design",
      "Content Upload",
      "Design With XD",
      "8 Plugins/Extensions"
    ],
    "delivery": "2 Days Delivery",
    "revision": "Unlimited Revision"
  }
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(pricingData[1].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const activePricing = pricingData.find(item => item.id === activeTab);

  return (
    <div className="rn-pricing-area rn-section-gap section-separator" id="pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xl-5 mb_md--40 mb_sm--40 small-margin-pricing">
            <div className="d-block d-lg-flex text-center d-lg-left section-flex flex-wrap align-content-start h-100">
              <div className="position-sticky sticky-top rbt-sticky-top-adjust">
                <div className="section-title text-left">
                  <span className="subtitle text-center text-lg-left">Pricing</span>
                  <h2 className="title text-center text-lg-left">My Pricing</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-xl-7">
            {/* Pricing Area */}
            <div className="navigation-wrapper">
              <ul className="nav" id="myTab" role="tablist">
                {pricingData.map(item => (
                  <li className="nav-item" key={item.id}>
                    <a
                      className={`nav-style ${activeTab === item.id ? 'active' : ''}`}
                      id={`${item.id}-tab`}
                      onClick={() => handleTabClick(item.id)}
                      role="tab"
                      aria-controls={item.id}
                      aria-selected={activeTab === item.id}
                    >
                      {item.title.split(' ')[0]} {/* Extract label from title */}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="tab-content" id="myTabContent">
                {pricingData.map(item => (
                  <div
                    className={`tab-pane fade ${activeTab === item.id ? 'show active' : ''}`}
                    id={item.id}
                    role="tabpanel"
                    aria-labelledby={`${item.id}-tab`}
                    key={item.id}
                  >
                    {/* Pricing Start */}
                    <div className="rn-pricing">
                      <div className="pricing-header">
                        <div className="header-left">
                          <h2 className="title">{item.title}</h2>
                          <span>{item.subtitle}</span>
                        </div>
                        <div className="header-right">
                          <span>{item.price}</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <p className="description">{item.description}</p>
                        <div className="check-wrapper">
                          <div className="left-area">
                            {item.features.map((feature, index) => (
                              <div className="check d-flex" key={index}>
                                <i data-feather="check"></i>
                                <p>{feature}</p>
                              </div>
                            ))}
                          </div>
                          <div className="right-area">
                            {item.additionalFeatures.map((feature, index) => (
                              <div className="check d-flex" key={index}>
                                <i data-feather="check"></i>
                                <p>{feature}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="pricing-footer">
                        <a href="#" className="rn-btn d-block">
                          <span>ORDER NOW</span>
                          <i data-feather="arrow-right"></i>
                        </a>
                        <div className="time-line d-flex">
                          <div className="single-cmt d-flex">
                            <i data-feather="clock"></i>
                            <span>{item.delivery}</span>
                          </div>
                          <div className="single-cmt d-flex">
                            <i data-feather="activity"></i>
                            <span>{item.revision}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
