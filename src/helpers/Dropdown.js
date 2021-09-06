import React, { useRef } from "react";
import DetectOutsideClick from "./DetectOutsideClick";

const Dropdown = ({ data,className, children }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = DetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger focus:outline-none">
        {data}
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${className} ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>{children}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Dropdown;
