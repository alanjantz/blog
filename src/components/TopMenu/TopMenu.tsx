import React from "react";
import { List, ListItem } from "../List";
import { Container } from "./styles";

interface TopMenuModel {
  scrollHeight?: number;
  color?: string;
}

const TopMenu: React.FC<TopMenuModel> = ({ scrollHeight, color }) => {
  return (
    <Container>
      <List>
        <ListItem color={color} href="/">
          Início
        </ListItem>
        <ListItem color={color} href="/about">
          Sobre
        </ListItem>
        <ListItem color={color} href="/blog">
          Postagens
        </ListItem>
        <ListItem color={color} href="/contact">
          Contato
        </ListItem>
      </List>
    </Container>
  );
};

export default TopMenu;
