import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./Assets/css/default.min.css";

//components
import Header from "./Components/headerComponent/header";

//Other
import Footer from "./Components/footerComponent/footer";
import Homepage from "./Components/pages/homePage";
import ColourPage from "./Components/pages/colourPage";
import Typography from "./Components/pages/typography";
import Layout from "./Components/pages/layout";
import HowItWorks from "./Components/pages/howItWorks";
import AssetLocation from "./Components/pages/assetLocation";

/*************************************************
 *  F U N C T I O N  A P P  B E G I N S  H E R E  *
 **************************************************/
function App() {
  return (
    <Router>
      <div className="App" style={{ height: "100%" }}>
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route path="/colourPage" component={ColourPage} />
        <Route path="/typography" component={Typography} />
        <Route path="/layout" component={Layout} />
        <Route path="/assetLocation" component={AssetLocation} />
        <Route path="/howitworks" component={HowItWorks} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
