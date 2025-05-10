import React, { useState, useRef, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface AccordionItem {
  title: string;
  body: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: boolean;
  disabled?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpen = false,
  disabled = false,
  className = "",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpen ? 0 : null
  );
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    if (disabled) return;
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, items.length);
  }, [items.length]);

  return (
    <div className={`bg-white p-4  space-y-4 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="p-2 rounded-lg border border-gray-200 ">
          <div
            className="flex justify-between items-center cursor-pointer py-2"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-gray-900 font-medium">{item.title}</span>
            <span>
              {openIndex === index ? (
                <FaAngleUp className="text-gray-400 text-xl" />
              ) : (
                <FaAngleDown className="text-gray-400 text-xl" />
              )}
            </span>
          </div>
          <div
            ref={(el: any) => (contentRefs.current[index] = el)}
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              height:
                openIndex === index
                  ? (contentRefs.current[index]?.scrollHeight || 0) + "px"
                  : "0px",
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <div className="border-t border-gray-200 mt-2 pb-2 text-gray-600">
              {item.body}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
