import { useEffect, useRef } from 'react';
import './AboutSection.scss';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const aboutImageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('fadeIn');
        });
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(aboutImageRef.current);
  }, []);

  return (
    <section className="aboutSection">
      <div className="aboutLeft">
        <img
          src="/images/image2.jpg"
          className="aboutImage"
          ref={aboutImageRef}
          width={600}
          height={400}
        />
      </div>
      <div className="aboutRight">
        <div className="img-div-aboutRight">
          <img
            style={{ width: '60px', height: '50px' }}
            src="/images/26910.jpg"
          />
          <span style={{ fontSize: '13px' }}>BEST FOOT SPA EXPERIENCE</span>
        </div>
        <div className="header">WELCOME TO DOI DOI FOOT SPA</div>
        <div className="body">
          Welcome to Doi Doi Foot Spa and Wellness Center, your haven of
          tranquility and rejuvenation. Nestled in the heart of serenity, our
          center offers an array of revitalizing foot spa treatments and
          wellness therapies designed to pamper your body, soothe your mind, and
          uplift your spirit..
          <br />
          www.doidoi.com
          <br />
        </div>
        <div className="button-about">
          <a href="#">Read More..</a>
          <motion.div
            whileHover={{ x: 20 }}
            className="divider-div-about"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
