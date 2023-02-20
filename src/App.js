import Form from "./form.js";
import Data from "./data.js"

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
        <main>
          <Routes>
          <Route path="/" element={<Form/>}/>
          <Route path="/data" element={<Data/>}/>
          </Routes>
        </main>
      </Router>
    </>
    
  );
}

export default App;