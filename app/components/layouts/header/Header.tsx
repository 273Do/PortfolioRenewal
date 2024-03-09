import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <p>Header</p>
      </div>
    </div>
  );
};

export default Header;
