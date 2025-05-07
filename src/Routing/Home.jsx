import React from 'react';

const Home = () => {
  return (
    <>
       <div>
  {/* banner section start */}
  <div className="banner_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8 padding_0">
          <div className="banner_img"><img src="images/banner-img.png" /></div>
        </div>
        <div className="col-sm-4">
          <h1 className="clever_text">Clever <span style={{color: '#212122'}}>Investing</span> makes
            Your Money Grow</h1>
          <div className="read_bt_2"><a href="#">Read More</a></div>
        </div>
      </div>
    </div>
  </div>
  {/* banner section end */}
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
  {/* money section start */}
  <div className="money_section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <div className="money_taital">
            <h3 className="advanced_text">ADVANCED SERVICE</h3>
            <h1 className="data_text">Data Analytics</h1>
            <p className="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it </p>
            <div className="read_bt_1"><a href="#">Read More</a></div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-8 padding_0">
          <div className="image_2"><img src="images/img-2.png" /></div>
          <h1 className="your_text">Your<br /> Money<br /> Grow</h1>
        </div>
      </div>
    </div>
  </div>
  {/* money section end */}
  {/* client section start */}
  <div className="client_section layout_padding">
    <div className="container">
      <div className="d-flex  justify-content-center">
        <h1 className="services_text custom_main">Testimonial</h1>
      </div>
    </div>
  </div>
  <div className="client_section_2 layout_padding">
    <div className="container">
      <div id="main_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="client_main"><img src="images/img-3.png" /></div>
            <div className="client_main_1">
              <h1 className="kamlioo_text">kamlioo</h1>
              <p className="ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it </p>
              <div className="quote_icon"><img src="images/quote-icon.png" /></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="client_main"><img src="images/img-3.png" /></div>
            <div className="client_main_1">
              <h1 className="kamlioo_text">kamlioo</h1>
              <p className="ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it </p>
              <div className="quote_icon"><img src="images/quote-icon.png" /></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="client_main"><img src="images/img-3.png" /></div>
            <div className="client_main_1">
              <h1 className="kamlioo_text">kamlioo</h1>
              <p className="ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it </p>
              <div className="quote_icon"><img src="images/quote-icon.png" /></div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
          <i className="fa fa-angle-left" />
        </a>
        <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
          <i className="fa fa-angle-right" />
        </a>
      </div>
    </div>
  </div>
  {/* client section end */}
</div>
{/* contact section start */}
<div className="contact_section layout_padding">
  <div className="container">
    <h1 className="contact_text">Contact Us</h1>
    <div className="contact_section_2">
      <div className="row">
        <div className="col-md-6">
          <form action="/action_page.php">
            <div className="form-group">
              <input type="text" className="email-bt" placeholder="Name" name="Name" />
            </div>
            <div className="form-group">
              <input type="text" className="email-bt" placeholder="Email" name="Email" />
            </div>
            <div className="form-group">
              <input type="text" className="email-bt" placeholder="Subject" name="Email" />
            </div>
            <div className="form-group">
              <textarea className="massage-bt" placeholder="Massage" rows={5} id="comment" name="text" defaultValue={""} />
            </div>
          </form>
          <div className="main_bt"><a href="#">Send</a></div>
        </div>
        <div className="col-md-6">
          <div className="map">
            <div className="map-responsive">
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={400} frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </> 
  );
}

export default Home;
