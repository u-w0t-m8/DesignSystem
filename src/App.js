import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./Assets/css/default.min.css";

//components
import Header from "./Components/headerComponent/header";
import Footer from "./Components/footerComponent/footer";
import Homepage from "./Components/pages/homePage";
import ColourPage from "./Components/pages/colourPage";
import Typography from "./Components/pages/typography";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/colourPage" component={ColourPage} />
        <Route exact path="/typography" component={Typography} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
