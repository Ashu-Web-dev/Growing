import React from 'react';

const Contact = () => {
  return (
    <>
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

export default Contact;
