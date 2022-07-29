import React from "react";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import "../style.css";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

function Accordion1() {
  const [active, setActive] = useState(null);
  const toggle = (index) => {
    if (active == index) {
      return setActive(null);
    }
    setActive(index);
  }
  return (
    <div>
 
        {data.map((item, index) => (
          <>
            <div>
              <div className="title" onClick={() => toggle(index)}>
                <h4>{item.title}</h4>

                <span>
                  {active == index ? < BsChevronUp/> : <BsChevronRight/>}
                </span>
              </div>
             
              <div className={active == index ? "content show  " : "content"}>
                {item.content}
              </div>
              <div>
              <hr className={active == index ? "hr show " : "hr show"} />
              </div>
            </div>
          </>
        ))}
      </div>
  
  )
}
const data = [
  {
    title: "What is react js used for?",
    content:  "React.js is an open-source JavaScript library that is used for building user interfaces specificallyfor single-page applications,It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.",
   
  },

];


export default Accordion1;