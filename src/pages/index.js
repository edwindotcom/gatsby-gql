import React from "react";

import AddAuthor from "../components/AddAuthor";
import AuthorList from "../components/AuthorList";
import {Heading} from "evergreen-ui"

const box = {
  // display: "flex",
  // justifyContent: "center"
  // alignItems: "center"
};

const Index = () => (
  <div style={box}>
    <Heading size={900}>ToDo App</Heading>
    <AddAuthor />
    <AuthorList />
  </div>
);

export default Index;