import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
        />
      ))}
    </div>
  );
}

export default Accordion;
