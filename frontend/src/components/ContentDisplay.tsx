import React from "react";
import Tabbed from "./Tabbed";
import Accordion from "./Accordion";
import TodoList from "./TodoList";

interface ContentDisplayProps {
  selectedItem: string | null;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ selectedItem }) => {
  const renderContent = () => {
    switch (selectedItem) {
      case "Child A1":
        return <TodoList />;
      case "Child A21":
        return <Tabbed />;
      case "Child A22":
        return <Accordion />;
      default:
        return (
          <h2 className="text-xl font-semibold italic">
            Selected Item:{" "}
            <span className="not-italic font-bold text-2xl">{selectedItem}</span>
          </h2>
        );
    }
  };

  return (
    <div className="flex-1 p-4">
      {selectedItem ? (
        renderContent()
      ) : (
        <>
          <p className="text-xl">Nothing is selected yet.</p>
          <p className="italic text-lg font-normal">
            Please click an item from the menu.
          </p>
        </>
      )}
    </div>
  );
};

export default ContentDisplay;