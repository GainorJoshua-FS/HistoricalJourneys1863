import './App.css';
// import './App2.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import TheGuides from './components/TheGuides';
import Tours from './components/Tours';
import AdditionalDetails from './components/AdditionalDetails';
import ImgSlider from './helpers/ImgSlider';
import AlertBanner from './components/AlertBanner';

function App() {
  return (
    <main style={styles.main}>
        <Router>
        <Header />
        <AlertBanner />
          <Routes>
              <Route key="home" path='/' element={<AboutUs/>} />
              <Route key="guides" path='/guides' element={<TheGuides/>} />
              <Route key="tours" path='/tours' element={<Tours/>} />
              <Route key="detauls" path='/details' element={<AdditionalDetails/>} />

            </Routes>
        </Router>
        {/* <AboutUs /> */}
        <Footer />
    </main>
  );
}

export default App;

const styles = {
  main:{
    textAlign: "left",
  },

}