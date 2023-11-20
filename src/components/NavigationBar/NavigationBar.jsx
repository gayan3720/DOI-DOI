import './NavigationBar.scss';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RxHamburgerMenu as OpenMenu } from 'react-icons/rx';
import { CgClose as HideMenu } from 'react-icons/cg';
import { UserOutlined, LockOutlined, SettingOutlined } from '@ant-design/icons';
import DropDown from '../Component/Dropdown/DropDown';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [showDrop, setShowDrop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      window.innerWidth > 1200 && setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleUserProfile = () => {
    setShowDrop(!showDrop);
  };
  const handleDoctorsScreen = () => {
    navigate('/doctors');
  };

  const handlePackageScreen = () => {
    navigate('/packages');
  };

  const handleLocationsScreen = () => {
    navigate('/location');
  };

  const handleTreatmentScreen = () => {
    navigate('/treatments');
  };

  const handleAboutUs = () => {
    navigate('/aboutus');
  };

  const handleContactScreen = () => {
    navigate('/contactus');
  };

  const handleServiceScreen = () => {
    navigate('/services');
  };

  const data = {
    items: [
      {
        key: 1,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Profile
          </a>
        ),
        icon: <UserOutlined />,

        danger: false,
      },
      {
        key: 2,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Settings
          </a>
        ),
        icon: <SettingOutlined />,
      },
      {
        key: 3,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Logout
          </a>
        ),
        icon: <LockOutlined />,
      },
    ],
    showDrop: showDrop,
  };

  return (
    <>
      <nav className="navBar">
        <div className="leftSection">
          <a
            href="/"
            target={'_blank'}
            style={{ textDecoration: 'none', outline: 'none' }}
          >
            <div className="companyLogo">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  duration: 3,
                  //type: 'spring',
                  stiffness: 260,
                  //damping: 5,
                }}
                whileHover={{ scale: 1.1, rotate: 0 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: '100%',
                }}
                src="/images/logo.jpg"
              />
              <h1>DOI DOI</h1>
            </div>
          </a>

          <div className="navBtns">
            {/* <div className="navDropdown">
              <button onClick={handleAboutUs}>ABOUT US</button>
              <div className="aboutDropdownMenu">
                <div className="menuItem">
                  <h3>Who We Are</h3>
                  <hr />
                  <div className="dropdownDescription">
                    <p>
                      Get to know more about our business and what we do to
                      serve our fellow communities.
                      <span>
                        <a href="#" style={{ textDecoration: 'none' }}>
                          {' '}
                          Learn more.
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="menuItem">
                  <h3>Our Mission</h3>
                  <hr />
                  <div className="dropdownDescription">
                    <p>
                      Our mission at Company is to make a positive impact in the
                      world through our work.
                      <span>
                        <a href="#" style={{ textDecoration: 'none' }}>
                          {' '}
                          Learn more.
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="menuItem">
                  <h3>Meet the Team</h3>
                  <hr />
                  <div className="dropdownDescription">
                    <p>
                      See all the amazing members of our team who help make our
                      goals become reality.
                      <span>
                        <a href="#" style={{ textDecoration: 'none' }}>
                          {' '}
                          Learn more.
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div> */}
            {/* </div> */}
            <button onClick={handleAboutUs}>ABOUT US</button>
            <button onClick={handleDoctorsScreen}>OUR DOCTORS</button>
            <button onClick={handleTreatmentScreen}>OUR TREATMENTS</button>
            <button onClick={handlePackageScreen}>OUR PACKAGES</button>
            {/* <div className="navDropdown"> */}
            <button onClick={handleServiceScreen}>SERVICES</button>
            {/* <div className="serviceDropdownMenu">
                <div className="menuItem">
                  <h3>Service #1</h3>
                  <hr />
                  <div className="dropdownDescription">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      <span>
                        <a href="#" style={{ textDecoration: 'none' }}>
                          {' '}
                          Learn more.
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="menuItem">
                  <h3>Service #2</h3>
                  <hr />
                  <div className="dropdownDescription">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span>
                        <a href="#" style={{ textDecoration: 'none' }}>
                          {' '}
                          Learn more.
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="menuItem">
                  <h3>Service #3</h3>
                  <hr />
                  <div className="dropdownDescription">
                    <p>
                      Lorem ipsum dolor sit amet.
                      <span>
                        <a href="#" style={{ textDecoration: 'none' }}>
                          {' '}
                          Learn more.
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="menuItem">
                  <h3>Service #4</h3>
                  <hr />
                  <div className="dropdownDescription">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                      <span>
                        <a href="#" style={{ textDecoration: 'none' }}>
                          {' '}
                          Learn more.
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            <button onClick={handleLocationsScreen}>OUR LOCATIONS</button>
            <button onClick={handleContactScreen}>CONTACT US</button>
          </div>
        </div>
        <div className="rightSection">
          <div className="accountSection">
            <button>BOOKINGS</button>
            <div className="profile_section">
              <button onClick={handleUserProfile}>
                <DropDown props={data} />
              </button>
            </div>
          </div>
          <div className="menuSection">
            {!menuOpen ? (
              <OpenMenu className="menuBtn" onClick={() => setMenuOpen(true)} />
            ) : (
              <HideMenu
                className="hideBtn"
                onClick={() => setMenuOpen(false)}
              />
            )}
          </div>
        </div>
        <div
          className="sideMenu"
          style={{ display: !menuOpen || width > 1200 ? 'none' : 'flex' }}
        >
          <div className="sideMenuSiteSections">
            <button>About Us</button>
            <button>Services</button>
            <button>Community</button>
            <button>Blog</button>
            <button>Contact Us</button>
          </div>
          <div className="sideMenuContent">
            <div className="sideMenuAccountHeader">
              <h1>Login or Sign Up</h1>
            </div>
            <div className="loginSignUpSection">
              <div className="sideMenuAccountBtns">
                <button>Login</button>
                <button>Sign Up</button>
              </div>
              <div className="disclaimer">
                &copy; SPARK All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
