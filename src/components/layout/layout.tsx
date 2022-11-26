import React, { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

import "./styles.scss";
export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};
