import './App.css';
import Get_Kundali from './Blog/Get_Kundali/Get_Kundali';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Blog/LandingPage';
import About from './Blog/About/About';
import SignUp from './Blog/SignUP_Page/SignUp';
import ContactUs from './Blog/ContactUs/ContactUs';
import LoginPage from './Blog/Log-IN_Page/LoginPage';
import TodayPanchang from './Blog/Panchang';
import BirthChartForm from './Blog/BirthChartForm';
import Horoscope from './Blog/Horoscope/Horoscope';  // Import Horoscope
import KundaliMatching from './Blog/Kundali_Page/KundliMatching';
import ResultPage from './Blog/ResultPage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/get-kundali" element={<Get_Kundali />} />
        <Route exact path="/today-panchang" element={<TodayPanchang />} />
        <Route exact path="/kundli-matching" element={<KundaliMatching />} />
        <Route exact path="/birth-chart" element={<BirthChartForm />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/result" element={<ResultPage />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/horoscope" element={<Horoscope />} />  {/* Add this route */}
      </Routes>
    </>
  );
}

export default App;
