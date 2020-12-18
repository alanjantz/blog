import React from "react";
import { Li } from "./styles";

export interface ListItemModel {
  href: string;
  color?: string;
}

const ListItem: React.FC<ListItemModel> = ({ children, href, color }) => {
  return (
    <Li color={color}>
      <a href={href}>{children}</a>
    </Li>
  );
};

export default ListItem;
