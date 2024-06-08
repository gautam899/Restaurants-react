import React from "react";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import BookTable from "./container/BookTable/BookTable";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
const App = () => (
  <div>
    <Navbar />
    <ScrollToTop />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <BookTable />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
