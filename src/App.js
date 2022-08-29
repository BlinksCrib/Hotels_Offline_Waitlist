import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { RequireAuth } from "./userProtect";
import "antd/dist/antd.css";
import Nav from "./Nav/Nav";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Nav />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
