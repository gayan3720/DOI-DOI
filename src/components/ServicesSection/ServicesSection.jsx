import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './ServicesSection.scss';

const ServicesSection = () => {
  // const serviceImageRef = useRef()

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting)
  //         entry.target.classList.add("fadeIn")
  //     })
  //   }, {
  //     threshold: 0.5
  //   })
  //   observer.observe(serviceImageRef.current)
  // }, [])

  return (
    <section className="serviceSection">
      <div className="serviceText">
        <div className="img-div-aboutRight">
          <img
            style={{ width: '60px', height: '50px' }}
            src="/images/26910.jpg"
          />
          <span style={{ fontSize: '13px' }}>
            ICONIC GETAWAYS OF LUXURY AYURVEDA
          </span>
        </div>
        <div className="motto">OUR LOCATIONS</div>
        <div className="mottoSubtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </div>
        <div className="serviceButtons">
          <div className="service-img-div">
            <motion.img
              whileInView={{
                scale: [1, 0.75, 1],
                borderRadius: ['0%', '50%', '0%'],
                opacity: [0, 0, 1],
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',

                repeat: 0,
                repeatDelay: 0,
              }}
              className="service-img"
              src="/images/location1.jpg"
              alt="img_1"
            />
            <div className="title-div">
              <span className="title-div-header">DOI DOI SPA COLOMBO</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                quidem voluptatum debitis inventore! Perferendis nesciunt
                tempore fugiat est voluptates dolores alias veritatis minus,
                magnam odit, laboriosam et molestias? Et, ad.
              </p>
              <div className="read-more-div">
                <a href="#">Read More..</a>
                <motion.div
                  whileHover={{ x: 20 }}
                  className="divider-div"
                ></motion.div>
              </div>
            </div>
          </div>
          <div className="service-img-div">
            <motion.img
              whileInView={{
                scale: [1, 0.75, 1],
                borderRadius: ['0%', '50%', '0%'],
                opacity: [0, 0, 1],
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',

                repeat: 0,
                repeatDelay: 0,
              }}
              className="service-img"
              src="/images/location2.jpg"
              alt="img_2"
            />
            <div className="title-div">
              <span className="title-div-header">FOOT SPA KANDY</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                quidem voluptatum debitis inventore! Perferendis nesciunt
                tempore fugiat est voluptates dolores alias veritatis minus,
                magnam odit, laboriosam et molestias? Et, ad.
              </p>
              <div className="read-more-div">
                <a href="#">Read More..</a>
                <motion.div
                  whileHover={{ x: 20 }}
                  className="divider-div"
                ></motion.div>
              </div>
            </div>
          </div>
          <div className="service-img-div">
            <motion.img
              animate={{
                scale: [1, 0.75, 1],
                borderRadius: ['0%', '50%', '0%'],
                opacity: [0, 0, 1],
              }}
              whileInView={{
                scale: [1, 0.75, 1],
                borderRadius: ['0%', '50%', '0%'],
                opacity: [0, 0, 1],
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',

                repeat: 0,
                repeatDelay: 0,
              }}
              className="service-img"
              src="/images/location3.jpg"
              alt="img_3"
            />
            <div className="title-div">
              <span className="title-div-header">DOI DOI JAFFNA</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                quidem voluptatum debitis inventore! Perferendis nesciunt
                tempore fugiat est voluptates dolores alias veritatis minus,
                magnam odit, laboriosam et molestias? Et, ad.
              </p>
              <div className="read-more-div">
                <a href="#">Read More..</a>
                <motion.div
                  whileHover={{ x: 20 }}
                  className="divider-div"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
