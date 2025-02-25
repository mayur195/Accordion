import index from "./index.css";
import React, { useState } from "react";

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          curOpen={curOpen}
          setCurOpen={setCurOpen}
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

function AccordionItem({ num, title, text, curOpen, setCurOpen }) {
  const isOpen = curOpen === num;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setCurOpen(isOpen ? null : num)}
    >
      <p className="number">{num < 9 ? "0" + (num + 1) : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{text}</div> : null}
    </div>
  );
}
