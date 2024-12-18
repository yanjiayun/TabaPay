import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AdjustIcon from '@mui/icons-material/Adjust';
import { TreeNode } from "../utils/type";

// interface NavigationMenuProps {
//   data: TreeNode[];
//   onItemClick: (item: string) => void;
// }

interface NavigationMenuProps {
  data: TreeNode[];
  onItemClick: (item: string) => void;
  selectedItem: string | null;
}
// const NavigationMenu: React.FC<NavigationMenuProps> = ({ data, onItemClick }) => {
const NavigationMenu: React.FC<NavigationMenuProps> = ({ data, onItemClick, selectedItem }) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const handleToggle = (label: string) => {
    setExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const renderTree = (nodes: TreeNode[]) => {
    return nodes.map((node) => {
      const isLeaf = !node.children || node.children.length === 0;
      const isSelected = node.label === selectedItem; 

      return (
        <div key={node.label} className="pl-2">
          <div
            // className="cursor-pointer hover:text-blue-500"
            className={`cursor-pointer hover:text-blue-500 ${
              isSelected ? "font-bold" : "font-normal"
            }`}
            onClick={() => {
              if (isLeaf) {
                onItemClick(node.label);
              } else {
                handleToggle(node.label);
              }
            }}
          >
            {isLeaf ? (
              <AdjustIcon />
            ) : expanded[node.label] ? (
              <ArrowDropDownIcon />
            ) : (
              <ArrowRightIcon />
            )}{" "}
            {node.label}
          </div>
          {expanded[node.label] && node.children && (
            <div className="pl-4">{renderTree(node.children)}</div>
          )}
        </div>
      );
    });
  };

  return <div>{renderTree(data)}</div>;
};

export default NavigationMenu;