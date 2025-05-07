import React from 'react';

const Services = () => {
  return (
    <>
   <div>
  {/* services section start */}
  <div className="services_section layout_padding">
    <div className="container">
      <div className="d-flex  justify-content-center">
        <h5 className="what_text">What we do</h5>
      </div>
      <div className="d-flex  justify-content-center">
        <h1 className="services_text custom_main">Our Expertize &amp; Services</h1>
      </div>
    </div>
  </div>
  {/* services section end */}
  {/* services_2 section start */}
  <div className="services_section_2">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-8">
          <div className="plane_main active">
            <div className="plane_left">
              <div className="icon_1"><img src="images/icon-1.png" /></div>
            </div>
            <div className="plane_right">
              <h3 className="vision_text">VISION TO PLAN</h3>
              <p className="completely_text">Completely synergize resource taxing relationships via niche markets. Completely synergize resource taxing.</p>
            </div>
          </div>
          <div className="plane_main">
            <div className="plane_left">
              <div className="icon_1"><img src="images/icon-2.png" /></div>
            </div>
            <div className="plane_right">
              <h3 className="vision_text">GROWTH TO VISION</h3>
              <p className="completely_text">Completely synergize resource taxing relationships via niche markets. Completely synergize resource taxing.</p>
            </div>
          </div>
          <div className="plane_main">
            <div className="plane_left">
              <div className="icon_1"><img src="images/icon-3.png" /></div>
            </div>
            <div className="plane_right">
              <h3 className="vision_text">MARKET TO GROWTH</h3>
              <p className="completely_text">Completely synergize resource taxing relationships via niche markets. Completely synergize resource taxing.</p>
            </div>
          </div>
          <div className="plane_main">
            <div className="plane_left">
              <div className="icon_1"><img src="images/icon-4.png" /></div>
            </div>
            <div className="plane_right">
              <h3 className="vision_text">PLAN TO MARKET</h3>
              <p className="completely_text">Completely synergize resource taxing relationships via niche markets. Completely synergize resource taxing.</p>
            </div>
          </div>
          <div className="read_bt"><a href="#">Read More</a></div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <div className="image_1"><img src="images/img-1.png" /></div>
        </div>
      </div>
    </div>
  </div>
  {/* services_2 section end */}
</div>

    </>
  );
}

export default Services;
