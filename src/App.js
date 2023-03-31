import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Client from './pages/Home/client/Client';
import AppSection from './pages/Home/apps/AppSection';
import Events from './pages/Home/events/Events';
import Home from './pages/Home/Home';
import How from './pages/Home/HowItWork/How';
import Invest from './pages/Home/investSection/Invest';
import MoreProduct from './pages/Home/moreProduct/MoreProduct';
import News from './pages/Home/newsFeed/News';
import Popular from './pages/Home/popular/Popular';
import Subscribe from './pages/Home/subscribe/Subscribe';
import './App.css'
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AppSection />
      <Invest />
      <Popular />
      <How />
      <MoreProduct />
      <Events />
      <News />
      <Subscribe />
      <Client />
      <Footer />
    </>
  );
}

export default App;
