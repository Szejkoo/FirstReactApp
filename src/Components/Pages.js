import {Route, Routes } from "react-router-dom"
import React from 'react'
import Main from "./Main"
import AboutUs from './other/AboutUs'
import Contact from "./other/Contact"
import Faq from "./other/Faq"

function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="about us" element={<AboutUs/>}/>
      <Route exact path="contact" element={<Contact/>}/>
      <Route exact path="faq" element={<Faq/>}/>
    </Routes>
  )
}

export default Pages