import index from "./index.css";
import React, { useState } from "react";

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          title={faq.title}
          text={faq.text}
          num={index}
        />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="number">{num < 9 ? "0" + (num + 1) : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{text}</div> : null}
    </div>
  );
}
