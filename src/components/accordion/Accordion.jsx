import AccordionItem from "./AccordionItem";
import { accordionItems } from "./data";

export default function Accordion() {

  return (
    <div>
      {accordionItems.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  )
}
