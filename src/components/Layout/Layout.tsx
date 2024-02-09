import React from "react";
import Topbar from "./Topbar";

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen relative">
      <Topbar />
      {children}
    </div>
  );
};

export default Layout;
