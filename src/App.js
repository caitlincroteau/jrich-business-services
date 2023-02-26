import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Intro from "./components/Intro";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ContactInfo from "./components/ContactInfo";

function App() {
  return (
    <div className="App" id="home">
      <Navigation />
      <Header />
      <Intro />
      <Services />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
