import { BrowserRouter } from "react-router-dom";

import Courses from "./components/Courses"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Category from "./components/Category"
import FeedBack from "./components/Feedback"
import Companies from "./components/Companies"
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer"

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Courses />
      <Companies />
      <Category />
      <FeedBack />
      <Subscribe />
      <Footer />
    </BrowserRouter>
  )
}

export default App
