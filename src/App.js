// // ..................................  .................................................//


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import React, { useEffect } from 'react';
import Header from "./Beleasing/Header";
import Footer from "./Beleasing/Footer";
import Home from "./Beleasing/Home";
import About from "./Beleasing/About";
import Contact from "./Beleasing/Contact";
import Sedan from "./Beleasing/Sedan";
import Hatchback from "./Beleasing/Hatchback";
import Combi from "./Beleasing/Combi";
import Suv from "./Beleasing/Suv";
import Allcars from "./Beleasing/Allcars";
import Bmw from "./Beleasing/Cars/Bmw";
import Ford from "./Beleasing/Cars/Ford";
import './App.css'
import Lamborghini from "./Beleasing/Cars/Lamborghini";
import Mconubia from "./Beleasing/Cars/Mconubia";
import Bmwproin from "./Beleasing/Cars/Bmwproin";
import Audi from "./Beleasing/Cars/Audi";
import Metiam from "./Beleasing/Cars/Metiam";
import Bmwcubilia from "./Beleasing/Cars/Bmwcubilia";
import Mattis from "./Beleasing/Cars/Mattis";
import TermaCondtion from "./Beleasing/TermaCondtion";


function App() {

  useEffect(() => {
    document.title = 'Luxury Cars ';
  }, []);

  return (
    <>
      <Router>
        <Switch>

          {/* Done */}
          <Route exact path="/">
            <Header /> <Home /> <Footer />
          </Route>

          {/* Done */}
          <Route path="/about" >
            <Header /> <About /> <Footer />
          </Route>

          {/* Done */}
          <Route path="/contact" >
            <Header /> <Contact /> <Footer />
          </Route>

          <Route path="/all-cars">
            <Header /> <Allcars /> <Footer />
          </Route>

          <Route path="/sedan" >
            <Header /> <Sedan /> <Footer />
          </Route>

          <Route path="/hatchback" >
            <Header /> <Hatchback /> <Footer />
          </Route>

          <Route path="/combi">
            <Header /> <Combi /> <Footer />
          </Route>

          <Route path="/suv">
            <Header /> <Suv /> <Footer />
          </Route>

          <Route path="/terms-and-conditions">
            <Header /> <TermaCondtion /> <Footer />
          </Route>







          <Route path="/bmw-commodo-ipsum">
            <Header /> <Bmw /> <Footer />
          </Route>

          <Route path="/ford-enim-nibh-litora">
            <Header /><Ford /><Footer />
          </Route>

          <Route path="/lamborghini-rutrum-libero">
            <Header /><Lamborghini /><Footer />
          </Route>

          <Route path="/mercedes-conubia-blandit-sem-neque">
            <Header /><Mconubia /><Footer />
          </Route>

          <Route path="/bmw-proin-commodo-interdum">
            <Header /><Bmwproin /><Footer />
          </Route>

          <Route path="/mercedes-mattis-arcu-maximus">
            <Header /><Mattis /><Footer />
          </Route>

          <Route path="/audi-litora-nec-amet" >
            <Header /><Audi /><Footer />
          </Route>

          <Route path="/mercedes-etiam-quam" >
            <Header /><Metiam /><Footer />
          </Route>

          <Route path="/bmw-cubilia" >
            <Header /><Bmwcubilia /><Footer />
          </Route>


        </Switch>
      </Router>
    </>
  )
}
export default App;


