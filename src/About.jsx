import React from 'react';
import about from "../src/images/about (1).png";
import Common from './Common';


const About = () => {
  return (
    <>
    <Common name = "Welcome to about page of " imgsrc = {about} visit="/contact" btname="contat Now"/>
    </>
  );
}

export default About;
