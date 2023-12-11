import NavigationBar from './components/NavigationBar/NavigationBar';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import AboutSection from './components/AboutSection/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ChooseUsSection from './components/ChooseUsSection/ChooseUsSection';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';
import DownloadSection from './components/DownloadSection/DownloadSection';
import Footer from './components/Footer/Footer';
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';
import MainLayout from './assets/Layout/MainLayout';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomeScreen />,
        children: [],
      },
      {
        path: 'aboutus',
        element: <AboutScreen />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
