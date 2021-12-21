import About from "./Component/About";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./Component/Home";
import Footer from "./Component/Footer";


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/about" element={<Secondsection />}></Route>
          <Route exact path="/services" element={<Thirdsection />}></Route> */}
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
