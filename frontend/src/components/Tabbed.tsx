import React, { useState } from "react";

const Tabbed: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Category 1");

  const fakeData = [
    { category: "Category 1", content: "This is content for Category 1" },
    { category: "Category 2", content: "This is content for Category 2" },
    { category: "Category 3", content: "This is content for Category 3" },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="flex border-b border-gray-300">
        {fakeData.map((item) => (
          <button
            key={item.category}
            className={`py-2 px-4 text-lg ${
              activeTab === item.category
                ? "border-b-4 border-teal-500 text-teal-500 font-bold"
                : "text-gray-600 hover:text-teal-500"
            }`}
            onClick={() => setActiveTab(item.category)}
          >
            {item.category}
          </button>
        ))}
      </div>

      <div className="p-4 bg-gray-100 rounded-b-lg">
        {fakeData
          .filter((item) => item.category === activeTab)
          .map((item) => (
            <div key={item.category}>
              <h2 className="text-xl font-semibold">{item.category}</h2>
              <p className="mt-2">{item.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tabbed;