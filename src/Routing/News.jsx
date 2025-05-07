import React from 'react';

const News = () => {
  return (
    <>
    <div>
  {/* News section start */}
  <div className="news_section layout_padding">
    <div className="container">
      <div className="d-flex  justify-content-center">
        <h1 className="services_text custom_main">Our News</h1>
      </div>
    </div>
  </div>
  <div className="news_section_2 layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="image_4"><img src="images/img-4.png" /></div>
        </div>
        <div className="col-md-6">
          <h1 className="study_text">Study &amp; Education</h1>
          <p className="sed_text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <div className="readmore_bt"><a href="#">Read More</a></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h1 className="study_text">Latest fashion for you</h1>
          <p className="sed_text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab..</p>
          <div className="readmore_bt"><a href="#">Read More</a></div>
        </div>
        <div className="col-md-6">
          <div className="image_4"><img src="images/img-5.png" /></div>
        </div>
      </div>
    </div>
  </div>
  {/* News section end */}
</div>

    </>
  );
}

export default News;
