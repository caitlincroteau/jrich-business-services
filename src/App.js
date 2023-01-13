import "./App.css";
import logo from "./images/JRICH-logo.png";
import CompanyDetails from "./components/CompanyDetails";
import Services from "./components/Services";
import Form from "./components/Form";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CompanyDetails />
      <Services />
      <Form />
    </div>
  );
}

export default App;
