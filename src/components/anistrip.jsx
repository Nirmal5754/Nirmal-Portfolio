  
  import React from 'react'
  
 import './anistrip.css'
  
  const icons = [
  "../assets/html2.jpg",
  "../assets/css2.jpg",
  "../assets/js.jpg",
  "../assets/bootstrap.jpg",
  "../assets/tailwind.jpg",
  "../assets/react.svg",
  "../assets/redux.jpg",
  "../assets/c++.jpg",
  "../assets/java.jpg",
  "../assets/fire.webp",
 "../assets/mysql.jpg"
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
              alt=""
              className="w-14 h-14 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}