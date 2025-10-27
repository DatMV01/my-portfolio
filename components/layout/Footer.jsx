import React from "react";
 
const Footer = () => {
  return (
    <footer id="footer">
      <div className="border-border flex h-16 items-center justify-center border-t">
        © {new Date().getFullYear()} Dat Mai's Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
