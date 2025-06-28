import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral-200 flex items-center justify-center transition-all
    lg:h-16 lg:mt-10
    md:h-14 md:mt-8
    sm:h-12 sm:mt-6
    max-sm:h-10 max-sm:mt-4">
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
