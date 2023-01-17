import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/JRICH-logo.png";
import CompanyDetails from "./components/CompanyDetails";

import Form from "./components/Form";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App" id="home">
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CompanyDetails />
    </div>
  );
}

export default App;
