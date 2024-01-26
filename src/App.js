import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NavbarWithMegaMenu from './components/NavBar';
import Homepage from './components/Homepage';
import ConsultForm from './components/ConsultForm';
// import SafetyPlan from './components/SafetyPlanForm';
import ContactPage from './components/ContactPage';
//import Testimonials from './components/Testimonials';
import SafetyPlanForm from './components/SafetyPlanForm';
import Financial from './components/FinancialAbusePage';
import Physical from './components/PhysicalAbusePage';
import Emotional from './components/EmotionalAbusePage';
import Sexual from './components/SexualAbusePage';
// import Digital from './components/DigitalAbusePage';
import Stalking from './components/StalkingPage';
import AboutUs from './components/AboutUs';
import Consultation from './components/Consultations';
// import AgencyMain from './components/AgencyMain';
// import NewsletterSignup from './components/Newsletter';
import './App.css';
import 'tailwindcss/tailwind.css';
import { AgencyProvider } from './components/AgencyContext';


function App() {
  const [completedSafetyPlan, setCompletedSafetyPlan] = useState([]);
  const [newConsultation, setNewConsultation] = useState([]);

  useEffect(() => {
    fetch('/consultations')
      .then(response => response.json())
      .then(newConsultation => setNewConsultation(newConsultation));
  }, []);

  const handleSubmit = (formData) => {
    fetch('/generate_safety_plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        setCompletedSafetyPlan(data);
      });
  };

  return (
  <AgencyProvider>
      <div>
        <NavbarWithMegaMenu />
        <Routes>
           <Route path="/" element={<Homepage />} />
          {/* <Route path="/safety_plan" element={<SafetyPlan />} />*/}
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          <Route path="/financial_abuse" element={<Financial/>}/>
          <Route path="/emotional_abuse"element={<Emotional/>}/>
          <Route path="/physical_abuse" element={<Physical/>}/>
           <Route path="/sexual_abuse" element={<Sexual/>}/>
          {/*<Route path="/digital_abuse" element={<Digital/>}/>*/}
          <Route path="/stalking" element={<Stalking/>}/>
          {/*<Route path="/consultations" element={<Consultation newConsultation={newConsultation} />} />
          <Route path="/agencies" element={<AgencyMain />} />   */}
          <Route path='/about_us' element={<AboutUs />} /> 
        </Routes>

        Force system to populate information on their own pages 
        <Routes>
          <Route
            path='/contact'
            render={() => <ConsultForm onSubmit={handleSubmit} />}
          />
          <Route
            path="/safety_plan"
            render={() => <SafetyPlanForm onSubmit={handleSubmit} />}
          />
        </Routes> 

      </div>
    </AgencyProvider>
  );
}

export default App;