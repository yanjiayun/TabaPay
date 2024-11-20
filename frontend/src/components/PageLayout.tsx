import React, { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import ClickedItemModal from "./ClickedItemModal";
import ContentDisplay from "./ContentDisplay"
import { TreeNode } from "../utils/type";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  treeData: TreeNode[];
}

const PageLayout: React.FC<PageLayoutProps> = ({ treeData }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    if (item !== "Child A1" && item !== "Child A21" && item !== "Child A22") {
      setClickedItem(item);
    } else {
      setClickedItem(null);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="w-52 lg:w-64 bg-gray-100 py-4">
          <NavigationMenu data={treeData} onItemClick={handleItemClick} />
        </div>
        <ContentDisplay selectedItem={selectedItem} />
      </div>
      <Footer />
      <ClickedItemModal item={clickedItem} onClose={() => setClickedItem(null)} />
    </div>
  );
};

export default PageLayout;