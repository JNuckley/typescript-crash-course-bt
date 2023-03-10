import React from "react";

export interface Props {
  title: string;
}
const Header = (props: Props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
