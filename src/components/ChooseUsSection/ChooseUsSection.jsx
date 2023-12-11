import './ChooseUsSection.scss';
import Slider0 from '../../assets/images/slide0.jpg';
import Slider1 from '../../assets/images/slider1.jpg';
import Slider2 from '../../assets/images/slider2.jpg';
import Slider3 from '../../assets/images/slider3.jpg';
import Slider4 from '../../assets/images/slider4.jpg';
import Slider5 from '../../assets/images/slider5.jpg';
import Slider6 from '../../assets/images/slider6.jpg';
import Slider7 from '../../assets/images/slider7.jpg';
import ImageSlider from '../Component/ImageSlider/ImageSlider';
import { motion } from 'framer-motion';

const images = [
  {
    id: 0,
    name: Slider0,
    details:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo saepe dolores laborum aperiam non, labore quidem, dicta, error eos officiis laudantium. Adipisci, ullam dolorem quasi inventore possimus aliquid repellendus totam quidem similique!',
  },
  {
    id: 1,
    name: Slider1,
    details:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo saepe dolores laborum aperiam non, labore quidem, dicta, error eos officiis laudantium. Adipisci, ullam dolorem quasi inventore possimus aliquid repellendus totam quidem similique!',
  },
  {
    id: 2,
    name: Slider2,
    details:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo saepe dolores laborum aperiam non, labore quidem, dicta, error eos officiis laudantium. Adipisci, ullam dolorem quasi inventore possimus aliquid repellendus totam quidem similique!',
  },
  {
    id: 3,
    name: Slider3,
    details:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo saepe dolores laborum aperiam non, labore quidem, dicta, error eos officiis laudantium. Adipisci, ullam dolorem quasi inventore possimus aliquid repellendus totam quidem similique!',
  },
  {
    id: 4,
    name: Slider4,
    details:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo saepe dolores laborum aperiam non, labore quidem, dicta, error eos officiis laudantium. Adipisci, ullam dolorem quasi inventore possimus aliquid repellendus totam quidem similique!',
  },
  {
    id: 5,
    name: Slider5,
    details:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo saepe dolores laborum aperiam non, labore quidem, dicta, error eos officiis laudantium. Adipisci, ullam dolorem quasi inventore possimus aliquid repellendus totam quidem similique!',
  },
  {
    id: 6,
    name: Slider6,
    details:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo saepe dolores laborum aperiam non, labore quidem, dicta, error eos officiis laudantium. Adipisci, ullam dolorem quasi inventore possimus aliquid repellendus totam quidem similique!',
  },
  {
    id: 7,
    name: Slider7,
    details:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo saepe dolores laborum aperiam non, labore quidem, dicta, error eos officiis laudantium. Adipisci, ullam dolorem quasi inventore possimus aliquid repellendus totam quidem similique!',
  },
];

const ChooseUsSection = () => {
  return (
    <section className="chooseUsSection">
      <span>DISCOVER OUR COMPLETELY CUSTOMIZABLE AYURVEDA TREATMENTS</span>
      <div className="sectionTitle">OUR CUSTOMIZED PACKAGES</div>
      <div className="gallery-div">
        <ImageSlider images={images} />
        <div className="button">
          <a href="#">View All..</a>
          <motion.div
            whileHover={{ x: 20 }}
            className="divider-div"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
export default ChooseUsSection;
