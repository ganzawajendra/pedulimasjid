import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral-200 flex items-center justify-center transition-all
    lg:h-16
    md:h-14
    sm:h-12
    max-sm:h-10">
      <footer className="footer">
        <div className="container">
          <p className="text-muted transition-all
          lg:text-md
          md:text-sm
          sm:text-xs
          max-sm:text-xs">© 2025 Peduli Masjid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
