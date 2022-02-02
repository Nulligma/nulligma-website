import React, { useState } from "react";

function DayToggler({ intialTheme, changeTheme }) {
  const [theme, setTheme] = useState(intialTheme);
  return (
    <div>
      <button
        className={theme === "light" ? "dayBtn" : "nightBtn"}
        onClick={(e) => {
          changeTheme(theme === "dark" ? "light" : "dark");
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        <img
          src= "/icons/sun.png"
          width="224"
          height="224"
          alt="Light theme"
          title="Light theme"
        />
        <img
          src="/icons/half-moon.png"
          width="224"
          height="224"
          alt="Dark theme"
          title="Dark theme"
        />
      </button>
    </div>
  );
}

export default DayToggler;
