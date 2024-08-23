
import React from 'react';
import './App.css';
import Header from './components/Header';
import BloodBankInfo from './components/BloodBankInfo';
import ContactForm from './components/ContactForm .js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BloodBankInfo />
        <ContactForm />
      </main>
      <footer>
        <p>&copy; 2024 Blood Bank. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;