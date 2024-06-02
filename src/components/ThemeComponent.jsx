import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { toggleTheme } from "../redux/theme/ThemeSlice"; // Import your theme action

function MyAwesomeThemeComponent() {
  const theme = useSelector((state) => state.theme.theme); // Assuming you have a theme state in Redux
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(toggleTheme()); // Dispatch the action to toggle the theme
  };

  // Apply the theme to the HTML tag when the theme changes
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    // Store the theme preference in local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Retrieve the theme preference from local storage when the component mounts
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== theme) {
      // Dispatch toggleTheme only if the stored theme differs from the current theme
      dispatch(toggleTheme());
    }
  }, [dispatch, theme]);


  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')

  
  return (
    <div>
      <motion.button
        onClick={toggleThemeHandler}
        style={{
          backgroundColor: theme === "light" ? "#E2E8F0" : "#4A5568",
          color: "#FFFFFF",
          border: "none",
          padding: "3px",
          borderRadius: "15px",
          cursor: "pointer",
          outline: "none",
          position: "relative",
          width: "50px",
          height: "25px",
        }}
      >
        <motion.div
          style={{
            width: "15px",
            height: "15px",
            background: "#4299E1",
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: theme === "light" ? "3px" : "calc(100% - 20px - 3px)",
            transition: "0.2s",
            transform: "translateY(-50%)",
          }}
        ></motion.div>
      </motion.button>
    </div>
  );
}

export default MyAwesomeThemeComponent;
