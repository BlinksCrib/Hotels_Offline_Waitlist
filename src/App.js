import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { RequireAuth } from "./userProtect";
import "antd/dist/antd.css";
// import NewsLetter from "./NewsLetter/NewsLetter";
// import Navbar from "./Navbar/Navbar";
// import Waitlist from "./WaitList/Waitlist";
import Nav from "./Nav/Nav";
// import PageNotFound from "./PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Nav />} />
          {/* <Route exact path="/" element={<NewsLetter />} /> */}
          {/* <Route exact path="/approved" element={<Waitlist />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
