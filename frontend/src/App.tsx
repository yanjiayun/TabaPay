import React from "react";
import PageLayout from "./components/PageLayout";
import { TreeNode } from "./utils/type";

const treeData: TreeNode[] = [
  {
    label: "Root",
    children: [
      {
        label: "Parent A",
        children: [
          { label: "Child A1" },
          {
            label: "Child Parent A2",
            children: [
              { label: "Child A21" },
              { label: "Child A22" },
            ],
          },
        ],
      },
      {
        label: "Parent B",
        children: [
          { label: "Child B1" },
          { label: "Child B2" },
          { label: "Child Parent B3" ,
            children: [
              { label: "Child B31" },
              { label: "Child B32" },
            ],
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  return <PageLayout treeData={treeData} />;
};

export default App;