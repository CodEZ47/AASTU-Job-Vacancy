import React from "react";
import List from "../../componenets/List.jsx";
import { AddPosition } from "../../componenets/lists/AddPosition.jsx";

const disc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida libero a mauris consectetur, ut mattis mauris viverra. Sed sed turpis non justo elementum rhoncus. Sed auctor leo eget eleifend sollicitudin. Mauris pulvinar felis a risus sollicitudin cursus. Nullam auctor, eros ac convallis lacinia, urna metus convallis orci, sed suscipit orci massa in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras luctus venenatis ex, ac viverra velit iaculis nec. Fusce consequat ex a mi interdum vulputate. Mauris pellentesque sagittis lorem, vitae consectetur nulla venenatis sed. Nulla facilisi. Donec interdum enim vel ligula vulputate, at tempus tellus volutpat";

const positions = [
  { id: 1, name: "Position 1", level: "High", description: disc, requirements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, name: "Position 2", level: "Middle", description: disc, requirements: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
  { id: 3, name: "Position 3", level: "Low", description: disc, requirements: "Sed gravida libero a mauris consectetur, ut mattis mauris viverra." },
];

const displayedData = [["name", "level", "description", "requirements"], 2];
const levels = ["High", "Middle", "Low"];

export const Positions = () => {
  return (
    <>
      <h1>All Positions</h1>
      <AddPosition levels={levels} />
      <List elems={positions} dataHeads={displayedData} levels={levels}/>
    </>
  );
};
