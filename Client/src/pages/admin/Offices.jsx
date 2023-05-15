import React from "react";
import List from "../../componenets/List.jsx";
import { AddOffice } from "../../componenets/lists/AddOffice.jsx";

const disc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida libero a mauris consectetur, ut mattis mauris viverra. Sed sed turpis non justo elementum rhoncus. Sed auctor leo eget eleifend sollicitudin. Mauris pulvinar felis a risus sollicitudin cursus. Nullam auctor, eros ac convallis lacinia, urna metus convallis orci, sed suscipit orci massa in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras luctus venenatis ex, ac viverra velit iaculis nec. Fusce consequat ex a mi interdum vulputate. Mauris pellentesque sagittis lorem, vitae consectetur nulla venenatis sed. Nulla facilisi. Donec interdum enim vel ligula vulputate, at tempus tellus volutpat";

const offices = [
  { id: 1, title: "Office 1", description: disc },
  { id: 2, title: "Office 2", description: disc },
  { id: 3, title: "Office 3", description: disc },
];

const displayedData = [["title", "description"], 1];

export const Offices = () => {
  return (
    <>
      <h1>All Offices</h1>
      <AddOffice />
      <List elems={offices} dataHeads={displayedData} />
    </>
  );
};
