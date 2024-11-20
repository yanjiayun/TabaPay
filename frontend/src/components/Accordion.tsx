import React, { useState } from "react";

const Accordion: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const fakeData = [
    { category: "Category 1", content: "This is content for Category 1" },
    { category: "Category 2", content: "This is content for Category 2" },
    { category: "Category 3", content: "This is content for Category 3" },
  ];

  const toggleCategory = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="w-full">
      {fakeData.map((item) => (
        <div key={item.category} className="mb-4 border-b border-gray-300">
          <button
            className="w-full text-left py-2 px-4 text-lg bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleCategory(item.category)}
          >
            {item.category}
          </button>
          {expandedCategory === item.category && (
            <div className="p-4 bg-white">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;