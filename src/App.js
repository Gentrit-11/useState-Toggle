import React from "react";
import Accordion1 from "./components/Accordion1";
import Accordion2 from "./components/Accordion2";
import Accordion3 from "./components/Accordion3";
import { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import "./style.css";

function App() {
  const [active, setActive] = useState(null);
  const toggle = (index) => {
    if (active == index) {
      return setActive(null);
    }
    setActive(index);
  };
  return (
    <div className="main">
      <h1>React Accordion</h1>
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, index) => (
            <>
              <div className="item1">
                <div className="title" onClick={() => toggle(index)}>
                  <h2>{item.title}</h2>
                 
                 
                  <span>
                    {active == index ? <BsChevronUp /> : <BsChevronDown />}
                  </span>
                  
                </div>
                <p>{item.text}</p>
                <hr className={active == index ? "hr show " : "hr"} />
                <div className={active == index ? "content show  " : "content"}>
                <Accordion1 >
                 {active == index ? <BsChevronDown /> : <BsChevronUp />}
                 </Accordion1>
                 
                </div>
                <div className={active == index ? "content show  " : "content"}>
                <Accordion2>
                 {active == index ? <BsChevronDown /> : <BsChevronUp />}
                 </Accordion2>
                 
                </div>
                <div className={active == index ? "content show  " : "content"}>
                <Accordion3>
                 {active == index ? <BsChevronDown /> : <BsChevronUp />}
                 </Accordion3>
                 
                </div>
                <div>

                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
const data = [
  {
    title: "What is react js used for?",
    text:"3 topic in this case"
  },
];

export default App;
