import React from "react";
//import Navbar from "../../component/navbar/Navbar"
import Header from "../../header";
//import Featured from "../../component/featured/Featured";
//import PropertyList from "../../component/propertyList/PropertyList";
import Body from "../../body";
import "./home.css";
import Footer from "../../footer/Footer";
//import FeaturedProperties from "../../component/featuredProperties/FeaturedProperties";
//import MailList from "../../component/mailList/MailList";
//mport Footer from "../../component/footer/Footer";

const Home = () => {
  //const res = axios.get("http://localhost")
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
