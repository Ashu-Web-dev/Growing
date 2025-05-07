import React from 'react';

const Footer = () => {
  return (
    <>
      {/* footer section start */}
<div className="contact_section layout_padding">
  <div className="footer_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="footer_logo"><img src="images/footer-logo.png" /></div>
          <p className="dolor_amet_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it </p>
        </div>
        <div className="col-sm-4">
          <h1 className="footer_about">About Us</h1>
          <p className="dolor_amet_text_1">distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has</p>
        </div>
        <div className="col-sm-4">
          <h1 className="footer_about">Newsletter</h1>
          <input type="text" className="mail_text" placeholder="Enter your Email" name="text" />
          <button className="subscribe_bt">Send</button>
        </div>
      </div>
    </div>
  </div>
  {/* footer section end */}
</div>

    </>
  );
}

export default Footer;
