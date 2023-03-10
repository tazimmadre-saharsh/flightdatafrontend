import DepartureForm from "./Departureform.js";
import DepartureData from "./DepartureData.js";
import ArrivalForm from "./ArrivalForm";
import ArrivalData from "./ArrivalData";
import Home from "./Home.js";
import FAQs from "./FAQs.js";
import AddFAQs from "./AddFAQs.js";
import Navbar from "./header/index.js";

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

function App() {
  return (
    
    <>
      <Router>
        

        <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/arrivalData' component={ArrivalData} />
        <Route path='/departureData' component={DepartureData} />
        <Route path='/FAQs' component={FAQs} />
      </Routes>


      <main>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addDeparture" element={<DepartureForm/>}/>
          <Route path="/departureData" element={<DepartureData/>}/>\
          <Route path="/addArrival" element={<ArrivalForm/>}/>
          <Route path="/arrivalData" element={<ArrivalData/>}/>
          <Route path="/FAQs" element={<FAQs/>}/>
          <Route path="/addFAQ" element={<AddFAQs/>}/>
          </Routes>
        </main>


      </Router>




    </>
    
  );
}

export default App;