import React from "react";
import "./styles.scss";

export interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="header">
      <h1>Shared header library: {children}</h1>
    </header>
  );
};

export default Header;
