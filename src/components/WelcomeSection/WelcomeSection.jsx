import { useEffect, useRef } from 'react';
import YoutubeOutlined from '@ant-design/icons/YoutubeOutlined';
import './WelcomeSection.scss';
import BackGround from '../../assets/images/backImage1.jpg';

const WelcomeSection = () => {
  // const welcomeImageRef = useRef();

  useEffect(() => {
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) entry.target.classList.add('fadeIn');
    //     });
    //   },
    //   {
    //     threshold: 0.000001,
    //   }
    // );
    // observer.observe(welcomeImageRef.current);
  }, []);

  return (
    <section className="welcomeSection">
      <div className="welcomeSection-main">
        <img src={BackGround} alt="background" />
      </div>
      <div className="welcomeText">
        <span>DOI DOI FOOT SPA</span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className="mottos">Experience The Secrets </div>
          <div className="mottos">Of </div>
          <div className="mottos">Relaxation</div>
        </div>
        {/* <div className="mottoSubtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div> */}
        <div className="welcomeButtons">
          <button>
            <div>
              <YoutubeOutlined style={{ fontSize: '20px', color: '#3A2D28' }} />
            </div>
            <div>Watch Video</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
