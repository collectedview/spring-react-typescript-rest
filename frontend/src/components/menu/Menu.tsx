// React -%- ////
import * as React from 'react';

// Packages -%- ////
import styled from "@emotion/styled";

// Components -%- ////
import AppBar from "../menu/AppBar"
import BasicMenu from "../../components/menu/items/BasicMenu";

// Integrations -%- ////
const appBar = {
  app_bar_title: "Frontend",
}
const basicMenus = [
  {
    id: 0,
    basic_menu_title: "Menu One",
    basic_item_link: "/",
  },
  {
    id: 1,
    basic_menu_title: "Menu Two",
    basic_item_link: "/",
  },
  {
    id: 2,
    basic_menu_title: "Menu Three",
    basic_item_link: "/",
  },
  {
    id: 3,
    basic_menu_title: "Menu Four",
    basic_item_link: "/",
  },
];

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////
const MenuFlex = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    flexDirection: row;
    flexWrap: nowrap;
    flexFlow: row nowrap;
    justifyContent: flex-start;
    alignItems: flex-start;
    alignContent: flex-start;
    height: auto;
    width: 50vw;
    margin: 1.5em auto;
    padding: 0;
    gap: 1.5em;
    background: none;
    border: none;
  }
`;

const MenuFlexItem = styled.div`
    order: 0;
    flex: none;
    align-self: flex-start;
    height: auto;
    width: auto;
    margin: 0 auto;
    padding: 0;
    background: none;
    border: none;
`;

// Application -%- ////
export default function Menu() {
  return (
    <>
    <AppBar app_bar_title={appBar?.app_bar_title} app_bar_menu={basicMenus}/>
    <MenuFlex>
      {basicMenus.map((data) => (
        <MenuFlexItem key={data?.id}>
          <BasicMenu 
          basic_menu_title={data?.basic_menu_title} 
          basic_item_link={data?.basic_item_link}
           />
        </MenuFlexItem>
      ))}
    </MenuFlex>
    </>
  );
}

// System -%- ////
