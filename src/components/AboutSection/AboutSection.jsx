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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          <br />
          <br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
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
