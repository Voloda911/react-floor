import React, { useEffect, useState } from "react";
export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`header_ ${showHeader ? "" : "off_header"}`}
      style={{ transition: "all 0.3s ease-in-out" }}
    >
      <div className="header_cont">
        <h3 className="customClass">hette</h3>
        <h3 className="_contact">208-202-8305</h3>
      </div>
    </div>
  );
}
