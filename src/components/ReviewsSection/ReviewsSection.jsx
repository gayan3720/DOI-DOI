import { useRef, useState } from 'react';
import './ReviewsSection.scss';

const ReviewsSection = () => {
  return (
    <section className="reviewsSection">
      <div className="reviewTextSection">
        <div className="img-div-aboutRight">
          <img
            style={{ width: '60px', height: '50px' }}
            src="/images/26910.jpg"
          />
          <span style={{ fontSize: '13px' }}>
            HEAL AND REINVIGORATE YOURSELF WITH THE BEST AYURWEDA THREATMENTS IN
            SRI LANKA
          </span>

          <div className="header">OUR AYURWEDA THREATMENTS</div>
        </div>
      </div>
      <div className="allReviews">
        <div className="left-section">
          <img src="/images/massage-therapy-1612308_1280.jpg" alt="image" />
        </div>
        <div className="right-section">
          <div className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            doloribus, nam, modi dolor voluptatem odio beatae quod dolorem
            cupiditate fuga tenetur recusandae error, expedita laborum nobis
            laudantium doloremque? Autem, aspernatur.
          </div>
          <div className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            libero nihil officia vitae quae? Repudiandae repellat cupiditate
            deserunt, unde expedita ducimus voluptatibus doloremque!
            Exercitationem excepturi, autem cupiditate saepe reprehenderit nisi.
          </div>
          <div className="card-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
            mollitia? Nulla sit ipsam dolore quisquam possimus sunt, optio iure
            iusto molestiae magni perspiciatis nihil ab fugiat nostrum, officia
            tempora. Fuga.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
