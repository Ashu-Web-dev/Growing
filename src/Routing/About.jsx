import React from 'react';

const About = () => {
  return (
   <>
  {/* money section start */}
<div className="money_section padding_top_0">
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

   </>
  );
}

export default About;
