import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/JRICH-brand-med-transp.png";
import CompanyDetails from "./components/CompanyDetails";

import ContactForm from "./components/ContactForm";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App" id="home">
      <Navigation />
      <header className="App-header">
        <img src={logo} className="pt-4 pb-2" alt="logo" />
      </header>
      <CompanyDetails />
      <ContactForm />
    </div>
  );
}

export default App;
