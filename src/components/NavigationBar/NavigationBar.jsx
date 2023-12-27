import './NavigationBar.scss';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { RxHamburgerMenu as OpenMenu } from 'react-icons/rx';
// import { CgClose as HideMenu } from 'react-icons/cg';
import { UserOutlined, LockOutlined, SettingOutlined } from '@ant-design/icons';
import DropDown from '../Component/Dropdown/DropDown';
import { useNavigate } from 'react-router-dom';
import { Avatar, Menu } from 'antd';
import HamburgerMenu from '../Component/HamburgerMenu/HamburgerMenu';
//import 'antd/dist/antd.min.css';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuListOpen, setMenuListOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [showDrop, setShowDrop] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log(window.innerWidth, '---');
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
    navigate('doctors');
  };

  const handlePackageScreen = () => {
    navigate('packages');
  };

  const handleLocationsScreen = () => {
    navigate('location');
  };

  const handleTreatmentScreen = () => {
    navigate('treatments');
  };

  const handleAboutUs = () => {
    navigate('aboutus');
  };

  const handleContactScreen = () => {
    navigate('contactus');
  };

  const handleServiceScreen = () => {
    navigate('services');
  };

  const profileData = {
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
    icon: <UserOutlined />,
  };

  const HamButtonMenuDataSmall = {
    items: [
      {
        key: 1,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            ABOUT US
          </a>
        ),
        // danger: false,
      },
      {
        key: 2,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            OUR DOCTORS
          </a>
        ),
      },
      {
        key: 3,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            OUR TREATMENTS
          </a>
        ),
      },
      {
        key: 4,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            OUR PACKAGES
          </a>
        ),
      },
      {
        key: 5,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            SERVICES
          </a>
        ),
      },
      {
        key: 6,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            OUR LOCATIONS
          </a>
        ),
      },
    ],
    showDrop: menuOpen,
  };

  const HamButtonMenuDataIsLogged = {
    items: [
      {
        key: 1,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            BOOKING
          </a>
        ),
        // danger: false,
      },
      {
        key: 2,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            SIGN UP
          </a>
        ),
      },
    ],
    showDrop: menuOpen,
  };

  const HamButtonMenuDataIsnotLogged = {
    items: [
      {
        key: 1,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            BOOKING
          </a>
        ),
        // danger: false,
      },
      {
        key: 2,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            LOGIN
          </a>
        ),
      },
      {
        key: 3,
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            SIGN UP
          </a>
        ),
      },
    ],
    showDrop: menuOpen,
  };

  const handleSmallMenu = (e) => {
    // console.log(e);
  };

  // console.log(menuOpen, '---');

  return (
    <>
      <nav className="navBar">
        <div className="header-main">
          <div className="header-div">
            <span>PROPERTY OF DOI DOI SPA</span>
          </div>
        </div>
        <div className="leftSection-main">
          <div className="leftSection">
            <a
              href="/"
              target="#"
              style={{ textDecoration: 'none', outline: 'none' }}
            >
              <div className="companyLogo">
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
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
                  src="/images/doilogo.jpg"
                />
              </div>
            </a>

            <div className="navBtns">
              <button onClick={handleAboutUs}>ABOUT US</button>
              <button onClick={handleDoctorsScreen}>OUR DOCTORS</button>
              <button onClick={handleTreatmentScreen}>OUR TREATMENTS</button>
              <button onClick={handlePackageScreen}>OUR PACKAGES</button>

              <button onClick={handleServiceScreen}>SERVICES</button>

              <button onClick={handleLocationsScreen}>OUR LOCATIONS</button>
              <button onClick={handleContactScreen}>CONTACT US</button>
            </div>
          </div>
          <div className="rightSection">
            <div className="menuSection">
              {/* {!menuOpen ? (
              <OpenMenu className="menuBtn" onClick={() => setMenuOpen(true)} />
            ) : (
              <HideMenu
                className="hideBtn"
                onClick={() => setMenuOpen(false)}
              />
            )} */}
              {!menuOpen && (
                <Avatar
                  shape="square"
                  size={50}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'gray',
                  }}
                >
                  <HamburgerMenu
                    setMenuOpen={setMenuListOpen}
                    menuOpen={menuListOpen}
                  />
                </Avatar>
              )}
            </div>
            <div
              className="sideMenu"
              style={{
                display: !menuListOpen || width > 1200 ? 'none' : 'flex',
              }}
            >
              <div className="sideMenuSiteSections">
                {menuListOpen && width <= 985 && (
                  <Menu
                    theme="dark"
                    items={HamButtonMenuDataSmall.items}
                    onClick={handleSmallMenu}
                  />
                )}
              </div>

              <div className="sideMenuContent">
                <div className="loginSignUpSection">
                  {isLoggedIn && width > 985 && width <= 1200 ? (
                    <Menu
                      theme="dark"
                      items={HamButtonMenuDataIsLogged.items}
                    />
                  ) : width > 985 && width <= 1200 ? (
                    <Menu
                      theme="dark"
                      items={HamButtonMenuDataIsnotLogged.items}
                    />
                  ) : null}
                </div>

                <div className="disclaimer">
                  &copy; SPARK All rights reserved.
                </div>
              </div>
            </div>
            <div className="accountSection">
              <div className="accountSection_btn">
                <button>BOOKINGS</button>
              </div>
              <div className="profile_section">
                <button onClick={handleUserProfile}>
                  <DropDown props={profileData} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
