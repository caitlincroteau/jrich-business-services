import logo from './images/JRICH-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      <div>
        <p>
          JRich Business Services Inc. is a company dedicated to providing you with efficient business solutions adapted to your specific needs. With 33 years at Canada Revenue Agency, Janis Richards has the experience to assist you in managing your finances for a better bottom line.
        </p>
        <p>
          To get started with our services, please fill out our online questionnaire below or contact us via phone or
          email.
        </p>
      </div>
      <div>
        <div>
          Bookkeeping and Tax Filing
          At the most affordable rates, we provide bookkeeping and tax filing for small to medium unincorporated or incorporated businesses.
        </div>
        <div>
          Tax Seminars & Personal Consulting
          Our Tax Seminars & personal consulting services are geared toward your type of business and will cover topics such as self-employment, record keeping, business income, eligible expenses, GST treatment, inventory, audits and dispelling tax myths. We will provide you with the information you need to keep your business, your paperwork and your taxes up to date and accurate.
        </div>
        <div>
          CRA Troubleshooting
          We are here to help you resolve all questions and issues related to CRA audits and appeals and can act as your representative in these matters.
        </div>
</div>
    </div>
  );
}

export default App;
