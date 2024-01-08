import { useRef, useState } from "react";
import "./ReviewsSection.scss";
import { motion } from "framer-motion";

const ReviewsSection = () => {
  return (
    <section className="reviewsSection">
      <div className="reviewTextSection">
        <div className="img-div-aboutRight">
          <img
            style={{ width: "60px", height: "50px" }}
            src="/images/26910.jpg"
          />
          <span style={{ fontSize: "13px" }}>
            HEAL AND REINVIGORATE YOURSELF WITH THE BEST AYURWEDA THREATMENTS IN
            SRI LANKA
          </span>

          <div className="header">OUR AYURWEDA THREATMENTS</div>
        </div>
      </div>
      <div className="allReviews">
        <div className="left-section">
          <img
            src="/images/massage-therapy-1612308_1280.jpg"
            alt="image"
            className="therapy-image"
          />
        </div>
        <div className="right-section">
          <div className="card-description">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis doloribus, nam, modi dolor voluptatem odio beatae quod
              dolorem cupiditate fuga tenetur recusandae error, expedita laborum
              nobis laudantium doloremque? Autem, aspernatur.
            </div>
            <div className="read-more-div-review">
              <a href="#">Read More..</a>
              <motion.div
                whileHover={{ x: 20 }}
                className="divider-div"
              ></motion.div>
            </div>
          </div>
          <div className="card-description">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis doloribus, nam, modi dolor voluptatem odio beatae quod
              dolorem cupiditate fuga tenetur recusandae error, expedita laborum
              nobis laudantium doloremque? Autem, aspernatur.
            </div>

            <div className="read-more-div-review">
              <a href="#">Read More..</a>
              <motion.div
                whileHover={{ x: 20 }}
                className="divider-div"
              ></motion.div>
            </div>
          </div>
          <div className="card-description">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis doloribus, nam, modi dolor voluptatem odio beatae quod
              dolorem cupiditate fuga tenetur recusandae error, expedita laborum
              nobis laudantium doloremque? Autem, aspernatur.
            </div>
            <div className="read-more-div-review">
              <a href="#">Read More..</a>
              <motion.div
                whileHover={{ x: 20 }}
                className="divider-div"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
