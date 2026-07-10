  
  import React from 'react'
  import './anistrip.css'
 import html2 from '../assets/html5.svg';
  import css2 from '../assets/css.svg';
import js from  '../assets/javascript.svg';
import bootstrap from  '../assets/bootstrap.svg';
import tailwind from  '../assets/tailwindcss.svg';
import react2 from  '../assets/react.svg';
import redux from  '../assets/redux.svg';
import cpp from  '../assets/cplusplus.svg';
import java from '../assets/java.svg';
import fire from '../assets/firebase.svg';
import mysql from '../assets/mysql.svg';



  const icons = [
 html2,
 css2 , js , bootstrap , tailwind , react2 , redux , cpp  ,java, fire , mysql
];

export default function SkillsStrip() {
  return (
    <div className="overflow-hidden py-6 bg-black">
      <div className="flex w-max animate-scroll">
        {[...icons, ...icons].map((icon, index) => (
          <div
            key={index}
            className="mx-8 flex items-center justify-center"
          >
    <img
  src={icon}
  alt="icon"
  width={60}
  height={60}

/>
          </div>
        ))}
      </div>
    </div>
  );
}