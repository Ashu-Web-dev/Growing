import React from 'react';

const Customer = () => {
  return (
    <>
    <div>
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

    </>
  );
}

export default Customer;
